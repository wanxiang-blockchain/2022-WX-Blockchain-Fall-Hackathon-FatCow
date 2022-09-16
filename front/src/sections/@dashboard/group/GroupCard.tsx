// next
import NextLink from 'next/link';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// @types
import { Group } from '../../../@types/group';
// components
import Label from '../../../components/Label';
import Image from '../../../components/Image';
import TextIconLabel from '../../../components/TextIconLabel';
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

type Props = {
  group: Group;
};

export default function GroupCard({ group }: Props) {
  const { name, cover, id, description, status, members } = group;

  const linkTo = PATH_DASHBOARD.group.view(id);

  return (
    <Card>
      <Box sx={{ position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'popular' && 'error') || 'info'}
            sx={{
              top: 16,
              right: 16,
              zIndex: 9,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
        <Image alt={name} src={cover} ratio="1/1" />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <NextLink href={linkTo} passHref>
            <Link sx={{ width: '80%' }} color="inherit">
              <Typography variant="subtitle1" noWrap>
                {name}
              </Typography>
            </Link>
          </NextLink>
          <TextIconLabel
            icon={<Iconify icon={'eva:people-fill'} sx={{ width: 16, height: 16, mr: 0.5 }} />}
            value={fShortenNumber(members.length)}
            sx={{ typography: 'caption' }}
          />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          {/* <ColorPreview colors={colors} /> */}
          <Typography
            gutterBottom
            variant="caption"
            sx={{
              opacity: 0.64,
            }}
          >
            {description}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
