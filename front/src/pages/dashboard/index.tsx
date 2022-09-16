// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Button } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// layouts
import Layout from '../../layouts';
// _mock_
import {
  _eventFeatured,
  _appAuthors,
  _appInstalled,
  _appRelated,
  _analyticPost,
} from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import { Welcome, EventFeatured, NewUpdates } from '../../sections/@dashboard/dashboard';
// assets
import { SeoIllustration } from '../../assets';

// ----------------------------------------------------------------------

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Dashboard() {
  const { user } = useAuth();

  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Welcome
              title={`Welcome back! \n ${user?.displayName}`}
              description="If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything."
              img={
                <SeoIllustration
                  sx={{
                    p: 3,
                    width: 360,
                    margin: { xs: 'auto', md: 'inherit' },
                  }}
                />
              }
              // action={<Button variant="contained">Go Now</Button>}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <EventFeatured list={_eventFeatured} />
          </Grid>

          <Grid item xs={12} lg={12}>
            <NewUpdates title="New Updates" list={_analyticPost} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
