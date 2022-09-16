import { useState } from 'react';
// @mui
import {
  Box,
  Grid,
  Card,
  Link,
  Avatar,
  MenuItem,
  IconButton,
  Typography,
  InputAdornment,
} from '@mui/material';
// @types
import { Member } from '../../../@types/user';
// components
import Iconify from '../../../components/Iconify';
import InputStyle from '../../../components/InputStyle';
import MenuPopover from '../../../components/MenuPopover';
import SocialsButton from '../../../components/SocialsButton';
import SearchNotFound from '../../../components/SearchNotFound';

// ----------------------------------------------------------------------

type Props = {
  members: Member[];
};

export default function EventAttendeeList({ members }: Props) {
  // const friendFiltered = applyFilter(friends, findFriends);

  // const isNotFound = friendFiltered.length === 0;

  return (
    <Box sx={{ mt: 5 }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Typography variant="h4">Attendees</Typography>
        <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
          ({members.length})
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {members.map((member) => (
          <Grid key={member.id} item xs={6} md={3}>
            <MemberCard member={member} />
          </Grid>
        ))}
      </Grid>

      {/* {isNotFound && (
        <Box sx={{ mt: 5 }}>
          <SearchNotFound searchQuery={findFriends} />
        </Box>
      )} */}
    </Box>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: Member;
};

function MemberCard({ member }: MemberCardProps) {
  const { name, description, avatarUrl } = member;

  // const [open, setOpen] = useState<HTMLElement | null>(null);

  // const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setOpen(event.currentTarget);
  // };

  // const handleCloseMenu = () => {
  //   setOpen(null);
  // };

  // const handleDelete = () => {
  //   handleCloseMenu();
  //   console.log('DELETE', name);
  // };

  // const handleEdit = () => {
  //   handleCloseMenu();
  //   console.log('EDIT', name);
  // };

  return (
    <Card
      sx={{
        py: 5,
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Avatar alt={name} src={avatarUrl} sx={{ width: 64, height: 64, mb: 3 }} />

      <Link variant="subtitle1" color="text.primary">
        {name}
      </Link>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
        {description}
      </Typography>

      {/* <SocialsButton initialColor /> */}

      {/* <MoreMenuButton
        open={open}
        onOpen={handleOpenMenu}
        onClose={handleCloseMenu}
        actions={
          <>
            <MenuItem onClick={handleDelete} sx={{ color: 'error.main' }}>
              <Iconify icon={'eva:trash-2-outline'} />
              Delete
            </MenuItem>

            <MenuItem onClick={handleEdit}>
              <Iconify icon={'eva:edit-fill'} />
              Edit
            </MenuItem>
          </>
        }
      /> */}
    </Card>
  );
}
