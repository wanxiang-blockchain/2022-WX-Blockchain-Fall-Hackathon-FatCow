// @mui
import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';

// ----------------------------------------------------------------------

export type ItemProps = {
  name: string;
  group?: string;
  role?: string | null;
  avatar?: string | null;
  children?: any;
};

export type ListProps = {
  data: ItemProps;
  depth: number;
  option?: string;
  sx?: SxProps<Theme>;
};

export type SubListProps = {
  data: ItemProps[];
  depth: number;
  option?: string;
  sx?: SxProps<Theme>;
};
