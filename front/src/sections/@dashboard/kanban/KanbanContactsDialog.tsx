import { useState } from 'react';
// @mui
import {
  Stack,
  Avatar,
  Dialog,
  MenuItem,
  TextField,
  Typography,
  ListItemText,
  ListItemAvatar,
  InputAdornment,
} from '@mui/material';
// _mock_
import { _contacts } from '../../../_mock';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

// ----------------------------------------------------------------------

const ITEM_HEIGHT = 64;

// ----------------------------------------------------------------------

type Props = {
  open: boolean;
  onClose: VoidFunction;
};

export default function KanbanContactsDialog({ open, onClose }: Props) {
  const [filterName, setFilterName] = useState('');

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterName(event.target.value);
  };

  const dataFiltered = applySortFilter({
    listData: _contacts,
    filterName,
  });

  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
      <Stack spacing={2} sx={{ p: 2.5, pb: 1 }}>
        <Typography variant="h6">
          Contacts <Typography component="span">({_contacts.length})</Typography>
        </Typography>

        <TextField
          fullWidth
          value={filterName}
          onChange={handleSearchQuery}
          placeholder="Search..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Iconify
                  icon={'eva:search-fill'}
                  sx={{ color: 'text.disabled', width: 20, height: 20 }}
                />
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Scrollbar
        sx={{
          height: ITEM_HEIGHT * 6,
          p: 1,
          '& .MuiMenuItem-root': {
            px: 1.5,
            height: ITEM_HEIGHT,
            borderRadius: 0.75,
          },
        }}
      >
        {dataFiltered.map((contact) => (
          <MenuItem key={contact.id} onClick={onClose}>
            <ListItemAvatar sx={{ position: 'relative' }}>
              <Avatar src={contact.avatar} />
            </ListItemAvatar>

            <ListItemText
              primaryTypographyProps={{ typography: 'subtitle2', mb: 0.25 }}
              secondaryTypographyProps={{ typography: 'caption' }}
              primary={contact.name}
              secondary={contact.email}
            />
          </MenuItem>
        ))}
      </Scrollbar>
    </Dialog>
  );
}

// ----------------------------------------------------------------------

function applySortFilter<T>({ listData, filterName }: { listData: T[]; filterName: string }) {
  if (filterName) {
    listData = listData.filter(
      (item: Record<string, any>) =>
        item.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1 ||
        item.email.toLowerCase().indexOf(filterName.toLowerCase()) !== -1
    );
  }

  return listData;
}
