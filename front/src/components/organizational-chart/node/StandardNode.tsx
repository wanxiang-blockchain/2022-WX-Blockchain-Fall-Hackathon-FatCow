import { useState } from 'react';
// @mui
import { Theme } from '@mui/material/styles';
import { SxProps, Typography, IconButton, MenuItem, Card, Avatar } from '@mui/material';
//
import Iconify from '../../Iconify';
import MenuPopover from '../../MenuPopover';
//
import { ItemProps } from '../type';

// ----------------------------------------------------------------------

type Props = {
  node: ItemProps;
  onEdit?: VoidFunction;
  onDelete?: VoidFunction;
  sx?: SxProps<Theme>;
};

export default function StandardNode({ node, onEdit, onDelete, sx }: Props) {
  const [open, setOpen] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Card
        sx={{
          p: 2,
          minWidth: 200,
          borderRadius: 1.5,
          textAlign: 'left',
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
          textTransform: 'capitalize',
          ...sx,
        }}
      >
        <IconButton onClick={handleOpen} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <Iconify icon="eva:more-horizontal-fill" width={20} height={20} />
        </IconButton>

        <Avatar
          alt={node.name}
          src={node.avatar || ''}
          sx={{ mr: 2, mb: 1, width: 48, height: 48 }}
        />

        <Typography variant="subtitle2" noWrap>
          {node.name}
        </Typography>

        <Typography variant="caption" component="div" noWrap sx={{ color: 'text.secondary' }}>
          {node.role}
        </Typography>
      </Card>

      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        transformOrigin={{ vertical: 'center', horizontal: 'left' }}
        arrow="left-center"
        sx={{
          width: 160,
          '& .MuiMenuItem-root': {
            px: 1,
            typography: 'body2',
            borderRadius: 0.75,
            '& svg': { mr: 2, width: 20, height: 20 },
          },
        }}
      >
        {onDelete && (
          <MenuItem
            onClick={() => {
              handleClose();
              onDelete();
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon={'eva:trash-2-outline'} />
            Delete
          </MenuItem>
        )}

        {onEdit && (
          <MenuItem
            onClick={() => {
              handleClose();
              onEdit();
            }}
          >
            <Iconify icon={'eva:edit-fill'} />
            Edit
          </MenuItem>
        )}
      </MenuPopover>
    </>
  );
}
