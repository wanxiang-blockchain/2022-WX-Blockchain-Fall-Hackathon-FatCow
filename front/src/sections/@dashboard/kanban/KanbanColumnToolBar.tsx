import { useRef, useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
// @mui
import { Stack, OutlinedInput, MenuItem, IconButton, Typography, Button } from '@mui/material';
// hooks
import useToggle from '../../../hooks/useToggle';
// components
import Iconify from '../../../components/Iconify';
import MenuPopover from '../../../components/MenuPopover';
//
import KanbanConfirmDialog from './KanbanConfirmDialog';

// ----------------------------------------------------------------------

type Props = {
  columnName: string;
  onDelete: VoidFunction;
  onUpdate: (name: string) => void;
};

export default function KanbanColumnToolBar({ columnName, onDelete, onUpdate }: Props) {
  const renameRef = useRef<HTMLInputElement>(null);

  const { toggle: openConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useToggle();

  const [value, setValue] = useState(columnName);

  const [open, setOpen] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      if (renameRef.current) {
        renameRef.current.focus();
      }
    }
  }, [open]);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleClickRename = () => {
    handleClose();
  };

  const handleChangeColumnName = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleUpdateColumn = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && renameRef.current) {
      renameRef.current.blur();
      onUpdate(value);
    }
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
        sx={{ pt: 3 }}
      >
        <OutlinedInput
          size="small"
          placeholder="Section name"
          value={value}
          onChange={handleChangeColumnName}
          onKeyUp={handleUpdateColumn}
          inputRef={renameRef}
          sx={{
            typography: 'h6',
            fontWeight: 'fontWeightBold',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
          }}
        />

        <IconButton size="small" onClick={handleOpen} color={open ? 'inherit' : 'default'}>
          <Iconify icon={'eva:more-horizontal-fill'} width={20} height={20} />
        </IconButton>
      </Stack>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          width: 'auto',
          '& .MuiMenuItem-root': { px: 1, typography: 'body2', borderRadius: 0.75 },
        }}
      >
        <MenuItem onClick={onOpenConfirm} sx={{ color: 'error.main' }}>
          <Iconify
            icon={'eva:trash-2-outline'}
            sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }}
          />
          Delete section
        </MenuItem>

        <MenuItem onClick={handleClickRename}>
          <Iconify icon={'eva:edit-fill'} sx={{ width: 20, height: 20, flexShrink: 0, mr: 1 }} />
          Rename section
        </MenuItem>
      </MenuPopover>

      <KanbanConfirmDialog
        open={openConfirm}
        onClose={onCloseConfirm}
        title={
          <Typography gutterBottom>
            Are you sure you want to delete column <strong>{columnName}</strong>?
          </Typography>
        }
        subheader={
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <strong>NOTE:</strong> All tasks related to this category will also be deleted.
          </Typography>
        }
        actions={
          <>
            <Button variant="outlined" color="inherit" onClick={onCloseConfirm}>
              Cancel
            </Button>
            <Button variant="contained" color="error" onClick={onDelete}>
              Delete
            </Button>
          </>
        }
      />
    </>
  );
}
