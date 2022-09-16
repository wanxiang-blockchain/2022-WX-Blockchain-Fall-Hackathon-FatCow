// @mui
import { Container, Grid, Stack, Button } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
import useSettings from '../../../hooks/useSettings';
// types
import { Post } from 'src/@types/event';
// components
// sections
import GroupActivitiesList from './GroupActivitiesList';
// assets

// ----------------------------------------------------------------------

interface Props {
  list: Post[];
}

export default function GroupActivities({ list }: Props) {
  const { themeStretch } = useSettings();

  return (
    <GroupActivitiesList title="Activities" list={list} />

    // // <Container maxWidth={themeStretch ? false : 'xl'}>

    //   {/* <Grid container spacing={3}>
    //     <Grid item xs={12} lg={12}>
    //     </Grid>
    //   </Grid> */}
    // </Container>
  );
}
