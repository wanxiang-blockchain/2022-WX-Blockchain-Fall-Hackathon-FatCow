import { useEffect, useState } from 'react';
import orderBy from 'lodash/orderBy';
// next
import NextLink from 'next/link';
// form
import { useForm } from 'react-hook-form';
// @mui
import { Container, Typography, Stack, Button } from '@mui/material';
// redux
import { useDispatch, useSelector } from '../../../redux/store';
import { getGroups } from '../../../redux/slices/group';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// @types
import { Group } from '../../../@types/group';
// hooks
import useSettings from '../../../hooks/useSettings';
// layouts
import Layout from '../../../layouts';
// components
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import Iconify from '../../../components/Iconify';

// sections
import { GroupList, GroupSearch, GroupSort } from '../../../sections/@dashboard/group';

// ----------------------------------------------------------------------

Groups.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function Groups() {
  const { themeStretch } = useSettings();

  const dispatch = useDispatch();

  const [openFilter, setOpenFilter] = useState(false);

  const { groups, sortBy } = useSelector((state) => state.group);

  const filteredGroups = applyFilter(groups, sortBy);

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  return (
    <Page title="Group: List">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Group"
          links={[{ name: 'Group', href: PATH_DASHBOARD.group.root }, { name: 'List' }]}
          action={
            <NextLink href={PATH_DASHBOARD.group.new} passHref>
              <Button variant="contained" startIcon={<Iconify icon={'eva:plus-fill'} />}>
                New Group
              </Button>
            </NextLink>
          }
        />

        <Stack
          spacing={2}
          direction={{ xs: 'column', sm: 'row' }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <>&nbsp;</>
          <GroupSearch />
        </Stack>

        <GroupList groups={filteredGroups} loading={!groups.length} />
        {/* <CartWidget /> */}
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------

function applyFilter(products: Group[], sortBy: string | null) {
  // SORT BY
  if (sortBy === 'featured') {
    products = orderBy(products, ['sold'], ['desc']);
  }
  if (sortBy === 'newest') {
    products = orderBy(products, ['createdAt'], ['desc']);
  }
  if (sortBy === 'priceDesc') {
    products = orderBy(products, ['price'], ['desc']);
  }
  if (sortBy === 'priceAsc') {
    products = orderBy(products, ['price'], ['asc']);
  }
  return products;
}
