import { memo } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Switch, InputBase, Typography } from '@mui/material';
// components
import { MapSettingKeys, MapSettings, ControlPanelStyle } from '../../../../../components/map';

// ----------------------------------------------------------------------

const RowStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textTransform: 'capitalize',
  justifyContent: 'space-between',
  color: theme.palette.common.white,
  '&:not(:last-of-type)': {
    marginBottom: theme.spacing(1),
  },
}));

// ----------------------------------------------------------------------

const camelPattern = /(^|[A-Z])[a-z]*/g;

function formatSettingName(name: string) {
  return name.match(camelPattern)?.join(' ');
}

type Props = {
  settings: MapSettings;
  onChange: (name: MapSettingKeys, value: boolean | number) => void;
};

function ControlPanel({ settings, onChange }: Props) {
  const renderSetting = (name: MapSettingKeys, value: boolean | number) => {
    switch (typeof value) {
      case 'boolean':
        return (
          <RowStyle key={name}>
            <Typography variant="body2">{formatSettingName(name)}</Typography>
            <Switch
              size="small"
              checked={value}
              onChange={(event) => onChange(name, event.target.checked)}
            />
          </RowStyle>
        );
      case 'number':
        return (
          <RowStyle key={name}>
            <Typography variant="body2">{formatSettingName(name)}</Typography>
            <InputBase
              value={value}
              onChange={(event) => onChange(name, Number(event.target.value))}
              inputProps={{ type: 'number' }}
              sx={{
                '& input': {
                  py: 0.25,
                  width: 40,
                  fontSize: 14,
                  borderRadius: 0.5,
                  textAlign: 'center',
                  bgcolor: 'grey.50012',
                  color: 'common.white',
                },
              }}
            />
          </RowStyle>
        );
      default:
        return null;
    }
  };

  return (
    <ControlPanelStyle>
      {Object.keys(settings).map((name) =>
        renderSetting(name as MapSettingKeys, settings[name as MapSettingKeys])
      )}
    </ControlPanelStyle>
  );
}

export default memo(ControlPanel);
