import { Tree, TreeNode, TreeProps } from 'react-organizational-chart';
// @mui
import { useTheme, Theme } from '@mui/material/styles';
import { SxProps } from '@mui/material';
// utils
import flattenArray from '../../utils/flattenArray';
//
import { ListProps, SubListProps, ItemProps } from './type';
import { SimpleNode, StandardNode, GroupNode } from './node';

// ----------------------------------------------------------------------

type Props = {
  data: {
    name: string;
    children: ItemProps[];
  };
  option?: string;
  sx?: SxProps<Theme>;
};

export default function OrganizationalChart({
  data,
  option = 'simple',
  sx,
  ...other
}: Props & Partial<TreeProps>) {
  const theme = useTheme();

  return (
    <Tree
      lineWidth={'1.5px'}
      nodePadding={'4px'}
      lineBorderRadius={'24px'}
      lineColor={theme.palette.divider}
      label={
        (option === 'simple' && <SimpleNode sx={sx} node={data} />) ||
        (option === 'standard' && <StandardNode sx={sx} node={data} />) ||
        (option === 'group' && <GroupNode sx={sx} node={data} />)
      }
      {...other}
    >
      {data.children.map((list) => (
        <List key={list.name} depth={1} data={list} option={option} sx={sx} />
      ))}
    </Tree>
  );
}

// ----------------------------------------------------------------------

export function List({ data, depth, option, sx }: ListProps) {
  const hasChildren = data.children && !!data.children;

  return (
    <TreeNode
      label={
        (option === 'simple' && <SimpleNode sx={sx} node={data} />) ||
        (option === 'standard' && (
          <StandardNode
            sx={sx}
            node={data}
            onEdit={() => console.log('EDIT', data.name)}
            onDelete={() => console.log('DELETE', data.name)}
          />
        )) ||
        (option === 'group' && (
          <GroupNode
            sx={sx}
            node={data}
            depth={depth}
            length={flattenArray(data.children, 'children')?.length}
          />
        ))
      }
    >
      {hasChildren && <SubList data={data.children} depth={depth} option={option} sx={sx} />}
    </TreeNode>
  );
}

// ----------------------------------------------------------------------

function SubList({ data, depth, option, sx }: SubListProps) {
  return (
    <>
      {data.map((list) => (
        <List key={list.name} data={list} depth={depth + 1} option={option} sx={sx} />
      ))}
    </>
  );
}
