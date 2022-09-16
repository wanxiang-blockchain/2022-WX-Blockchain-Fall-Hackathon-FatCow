import { memo } from 'react';
import DeckGL, { ArcLayer } from 'deck.gl';
import Map from 'react-map-gl';
// components
import { MapControl, MapBoxProps } from '../../../../components/map';

// ----------------------------------------------------------------------

function MapDeckglOverlay({ ...other }: MapBoxProps) {
  const arcLayer = new ArcLayer({
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-segments.json',
    getSourcePosition: (d: { from: { coordinates: number } }) => d.from.coordinates,
    getTargetPosition: (d: { to: { coordinates: number } }) => d.to.coordinates,
    getSourceColor: [91, 229, 132],
    getTargetColor: [24, 144, 255],
    getWidth: 1.5,
  });

  return (
    <DeckGL
      initialViewState={{
        longitude: -122.45,
        latitude: 37.75,
        zoom: 11,
        bearing: 0,
        pitch: 60,
      }}
      controller={true}
      layers={[arcLayer]}
    >
      <Map {...other}>
        <MapControl />
      </Map>
    </DeckGL>
  );
}

export default memo(MapDeckglOverlay);
