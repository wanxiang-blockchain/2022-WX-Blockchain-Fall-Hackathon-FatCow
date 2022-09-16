// @mui
import { Box } from '@mui/material';
// @type
import { Group } from '../../../@types/group';
// components
import { SkeletonProductItem } from '../../../components/skeleton';
//
import GroupCard from './GroupCard';

// ----------------------------------------------------------------------

type Props = {
  groups: Group[];
  loading: boolean;
};

export default function ShopProductList({ groups, loading }: Props) {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
      }}
    >
      {(loading ? [...Array(12)] : groups).map((group, index) =>
        group ? <GroupCard key={group.id} group={group} /> : <SkeletonProductItem key={index} />
      )}
    </Box>
  );
}
