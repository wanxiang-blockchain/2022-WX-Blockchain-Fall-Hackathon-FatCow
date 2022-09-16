import { useRef, memo } from 'react';
import Map, { MapboxStyle, MapRef, MapLayerMouseEvent } from 'react-map-gl';
import bbox from '@turf/bbox';
// components
import { MapBoxProps } from '../../../../../components/map';
//
import MAP_STYLE from './map-style';

// ----------------------------------------------------------------------

function MapZoomToBounds({ ...other }: MapBoxProps) {
  const mapRef = useRef<MapRef>(null);

  const onClick = (event: MapLayerMouseEvent) => {
    const feature = event.features?.[0];

    if (feature) {
      const [minLng, minLat, maxLng, maxLat] = bbox(feature);

      mapRef.current?.fitBounds(
        [
          [minLng, minLat],
          [maxLng, maxLat],
        ],
        { padding: 40, duration: 1000 }
      );
    }
  };

  return (
    <Map
      ref={mapRef}
      initialViewState={{
        latitude: 37.78,
        longitude: -122.4,
        zoom: 11,
      }}
      mapStyle={MAP_STYLE as MapboxStyle}
      interactiveLayerIds={['sf-neighborhoods-fill']}
      onClick={onClick}
      {...other}
    />
  );
}

export default memo(MapZoomToBounds);
