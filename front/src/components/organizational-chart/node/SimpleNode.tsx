// @mui
import { alpha, Theme } from '@mui/material/styles';
import { SxProps, Typography, Card } from '@mui/material';
//
import { ItemProps } from '../type';

// ----------------------------------------------------------------------

type Props = {
  node: ItemProps;
  sx?: SxProps<Theme>;
};

export default function SimpleNode({ node, sx }: Props) {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: 0,
        borderRadius: 1.5,
        display: 'inline-flex',
        color: 'primary.darker',
        textTransform: 'capitalize',
        bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
        border: (theme) => `1px solid ${alpha(theme.palette.primary.main, 0.24)}`,
        ...sx,
      }}
    >
      <Typography variant="subtitle2">{node.name}</Typography>
    </Card>
  );
}
