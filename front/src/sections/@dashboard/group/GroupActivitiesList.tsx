// @mui
import {
  Box,
  Stack,
  Link,
  Card,
  Button,
  Divider,
  Typography,
  CardHeader,
  CardProps,
} from '@mui/material';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// utils
import { fToNow } from '../../../utils/formatTime';
// types
import { Post } from 'src/@types/event';
// components
import Image from '../../../components/Image';
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

interface Props extends CardProps {
  title?: string;
  subheader?: string;
  list: Post[];
}

export default function GroupActivitiesList({ title, subheader, list, ...other }: Props) {
  const { replace } = useRouter();
  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((activity) => (
            <ActivityItem key={activity.id} activity={activity} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      {/* <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          size="small"
          color="inherit"
          endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
          onClick={() => replace(PATH_DASHBOARD.event.root)}
        >
          View all
        </Button>
      </Box> */}
    </Card>
  );
}

// ----------------------------------------------------------------------

type ActivityItemProps = {
  activity: Post;
};

function ActivityItem({ activity }: ActivityItemProps) {
  const { id, cover, title, description, createdAt } = activity;
  const linkTo = PATH_DASHBOARD.event.view(id);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Image
        alt={title}
        src={cover}
        sx={{ width: 48, height: 48, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 240 }}>
        <NextLink href={linkTo} passHref>
          <Link color="inherit" variant="subtitle2" noWrap>
            {title}
          </Link>
        </NextLink>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fToNow(createdAt)}
      </Typography>
    </Stack>
  );
}
