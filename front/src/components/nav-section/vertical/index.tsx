// @mui
import { List, Box } from '@mui/material';
// hooks
import useLocales from '../../../hooks/useLocales';
//
import { NavSectionProps } from '../type';
import { ListSubheaderStyle } from './style';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavSectionVertical({ navConfig, isCollapse, ...other }: NavSectionProps) {
  const { translate } = useLocales();

  return (
    <Box {...other}>
      {navConfig.map((group) => (
        <List key={group.subheader} disablePadding sx={{ px: 2 }}>
          <ListSubheaderStyle
            disableGutters
            sx={{
              ...(isCollapse && {
                opacity: 0,
              }),
            }}
          >
            {translate(group.subheader)}
          </ListSubheaderStyle>

          {group.items.map((list) => (
            <NavList
              key={list.title + list.path}
              data={list}
              depth={1}
              hasChildren={!!list.children}
              isCollapse={isCollapse}
            />
          ))}
        </List>
      ))}
    </Box>
  );
}
