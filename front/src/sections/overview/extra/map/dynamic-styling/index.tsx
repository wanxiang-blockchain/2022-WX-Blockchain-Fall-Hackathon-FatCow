import { useState, memo } from 'react';
import Map from 'react-map-gl';
// components
import { MapControl, MapBoxProps } from '../../../../../components/map';
//
import ControlPanel from './ControlPanel';

// ----------------------------------------------------------------------

function MapDynamicStyling({ ...other }: MapBoxProps) {
  const [mapStyle, setMapStyle] = useState<any>(null);

  return (
    <>
      <Map
        initialViewState={{
          latitude: 37.805,
          longitude: -122.447,
          zoom: 15.5,
        }}
        mapStyle={mapStyle && mapStyle.toJS()}
        styleDiffing
        {...other}
      >
        <MapControl />
      </Map>

      <ControlPanel onChange={setMapStyle} />
    </>
  );
}

export default memo(MapDynamicStyling);
