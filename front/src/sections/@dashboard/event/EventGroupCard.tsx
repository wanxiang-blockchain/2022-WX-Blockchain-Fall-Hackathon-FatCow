import { useState } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { Box, Card, Avatar, Typography, Link } from '@mui/material'; // @types
// @types
import { Group } from '../../../@types/group';
// components
import Iconify from '../../../components/Iconify';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

type EventGroupCardProps = {
  group: Group;
};

export default function EventGroupCard({ group }: EventGroupCardProps) {
  const { name, description, cover, id } = group;

  const linkTo = PATH_DASHBOARD.group.view(id);

  // const [toggle, setToogle] = useState(isFollowed);

  return (
    <Card sx={{ display: 'flex', alignItems: 'center', p: 3 }}>
      <Avatar alt={name} src={cover} sx={{ width: 48, height: 48 }} />

      <Box sx={{ flexGrow: 1, minWidth: 0, pl: 2, pr: 1 }}>
        <NextLink href={linkTo} passHref>
          <Link sx={{ width: '80%' }} color="inherit">
            <Typography variant="subtitle2" noWrap>
              {name}
            </Typography>
          </Link>
        </NextLink>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* <Iconify icon={'eva:pin-fill'} sx={{ width: 16, height: 16, mr: 0.5, flexShrink: 0 }} /> */}
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {description}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}
