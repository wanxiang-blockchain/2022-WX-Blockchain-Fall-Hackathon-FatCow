import { useState } from 'react';
// @mui
import { Box, Grid, Card, Button, Avatar, Typography } from '@mui/material'; // @types
// @types
import { Member } from '../../../@types/user';
// components
import Iconify from '../../../components/Iconify';
import GroupMembers from './GroupMembers';

// ----------------------------------------------------------------------

type Props = {
  members: Member[];
};

export default function GroupHome({ members }: Props) {
  return <GroupMembers members={members} />;
}
