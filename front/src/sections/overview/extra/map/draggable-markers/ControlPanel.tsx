import { memo } from 'react';
import { LngLat } from 'react-map-gl';
// @mui
import { Typography } from '@mui/material';
// components
import { ControlPanelStyle } from '../../../../../components/map';

// ----------------------------------------------------------------------

const EVENT_NAMES = ['onDragStart', 'onDrag', 'onDragEnd'] as const;

function round5(value: number) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

// ----------------------------------------------------------------------

type Props = {
  events: Record<string, LngLat>;
};

function ControlPanel({ events = {} }: Props) {
  return (
    <ControlPanelStyle>
      {EVENT_NAMES.map((event) => {
        const lngLat = events[event];

        return (
          <div key={event}>
            <Typography variant="subtitle2" sx={{ color: 'common.white' }}>
              {event}:
            </Typography>

            {lngLat ? (
              <Typography variant="subtitle2" sx={{ color: 'primary.main' }}>
                {`${round5(lngLat.lng)}, ${round5(lngLat.lat)}`}
              </Typography>
            ) : (
              <Typography variant="body2" component="em" sx={{ color: 'red' }}>
                null
              </Typography>
            )}
          </div>
        );
      })}
    </ControlPanelStyle>
  );
}
export default memo(ControlPanel);
