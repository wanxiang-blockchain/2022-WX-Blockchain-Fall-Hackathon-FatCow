import { useState } from 'react';
// @mui
import { Box, Grid, Card, Button, Avatar, Typography } from '@mui/material'; // @types
// @types
import { Member } from '../../../@types/user';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  members: Member[];
};

export default function GroupMembers({ members }: Props) {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Members
      </Typography>

      <Grid container spacing={2}>
        {members.map((member) => (
          <Grid key={member.id} item xs={12} md={3}>
            <MemberCard member={member} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// ----------------------------------------------------------------------

type MemberCardProps = {
  member: Member;
};

function MemberCard({ member }: MemberCardProps) {
  const { name, description, avatarUrl } = member;

  // const [toggle, setToogle] = useState(isFollowed);

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />

      <Box sx={{ flexGrow: 1, minWidth: 0, pl: 2, pr: 1 }}>
        <Typography variant="subtitle2" noWrap>
          {name}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <Iconify icon={'eva:pin-fill'} sx={{ width: 16, height: 16, mr: 0.5, flexShrink: 0 }} /> */}
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {description}
          </Typography>
        </Box>
      </Box>

      {/* <Button
        size="small"
        onClick={() => setToogle(!toggle)}
        variant={toggle ? 'text' : 'outlined'}
        color={toggle ? 'primary' : 'inherit'}
        startIcon={toggle && <Iconify icon={'eva:checkmark-fill'} />}
        sx={{ flexShrink: 0 }}
      >
        {toggle ? 'Followed' : 'Follow'}
      </Button> */}
    </Card>
  );
}
