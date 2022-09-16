import { capitalCase } from 'change-case';
import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { styled } from '@mui/material/styles';
import { Tab, Box, Card, Tabs, Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useTabs from '../../../hooks/useTabs';
import useSettings from '../../../hooks/useSettings';
// @types
import { Group } from '../../../@types/group';
// _mock_
import { _userMembers, _groupList, _activityList } from '../../../_mock';

// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import Iconify from '../../../components/Iconify';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
// sections
import { Profile, ProfileCover, ProfileGallery } from '../../../sections/@dashboard/user/profile';
import { GroupHome, GroupActivities, GroupCover } from '../../../sections/@dashboard/group';

// ----------------------------------------------------------------------

const TabsWrapperStyle = styled('div')(({ theme }) => ({
  zIndex: 9,
  bottom: 0,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'center',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-end',
    paddingRight: theme.spacing(3),
  },
}));

// ----------------------------------------------------------------------

UserProfile.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function UserProfile() {
  const { themeStretch } = useSettings();

  const { query } = useRouter();

  const { id } = query;

  const group: Group = _groupList.find((item) => item.id === id) as unknown as Group;

  const { currentTab, onChangeTab } = useTabs('Home');

  const PROFILE_TABS = [
    {
      value: 'Home',
      icon: <Iconify icon={'eva:people-fill'} width={20} height={20} />,
      component: <GroupHome members={group.members} />,
    },
    {
      value: 'Activities',
      icon: <Iconify icon={'ic:round-perm-media'} width={20} height={20} />,
      component: <GroupActivities list={_activityList} />,
    },
  ];

  return (
    <Page title="Group: Detail">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Group"
          links={[{ name: 'Group', href: PATH_DASHBOARD.group.root }, { name: group?.name || '' }]}
        />
        <Card
          sx={{
            mb: 3,
            height: 280,
            position: 'relative',
          }}
        >
          <GroupCover group={group} />

          <TabsWrapperStyle>
            <Tabs
              allowScrollButtonsMobile
              variant="scrollable"
              scrollButtons="auto"
              value={currentTab}
              onChange={onChangeTab}
            >
              {PROFILE_TABS.map((tab) => (
                <Tab
                  disableRipple
                  key={tab.value}
                  value={tab.value}
                  icon={tab.icon}
                  label={capitalCase(tab.value)}
                />
              ))}
            </Tabs>
          </TabsWrapperStyle>
        </Card>

        {PROFILE_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Container>
    </Page>
  );
}
