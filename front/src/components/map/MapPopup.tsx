import { PopupProps } from 'react-map-gl';
// @mui
import { Theme, SxProps } from '@mui/material/styles';
//
import { PopupStyle } from './style';

// ----------------------------------------------------------------------

interface MapControlPopupProps extends PopupProps {
  sx?: SxProps<Theme>;
}

// ----------------------------------------------------------------------

export default function MapPopup({ sx, children, ...other }: MapControlPopupProps) {
  return (
    <PopupStyle anchor="bottom" sx={sx} {...other}>
      {children}
    </PopupStyle>
  );
}
