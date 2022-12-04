import {
  MapContainer,
  TileLayer,
  LayersControl,
  GeoJSON,
  ScaleControl
} from 'react-leaflet';

import tectonicPlates from './PB2002_boundaries.json';
import { mapHeight, tectonicPlatesStyle, tileLayers , fallasStyle, myStyle} from './constants';

export default function Map() {
  return (
    <MapContainer center={[30, -107]} zoom={5} style={mapHeight}>
      <LayersControl position="topright">
        {tileLayers.map(({ id, name, attribution, url, checked }) => (
          <LayersControl.BaseLayer key={id} name={name} checked={checked}>
            <TileLayer attribution={attribution} url={url} />
          </LayersControl.BaseLayer>
        ))}
        <LayersControl.Overlay name="Logs">
          <GeoJSON
            data={tectonicPlates as GeoJSON.GeoJsonObject}
            style={myStyle}
          />
        </LayersControl.Overlay>
        <LayersControl.Overlay name="Fallas">
          {/* <GeoJSON
            data={fallasResnom as GeoJSON.GeoJsonObject}
            style={fallasStyle}
          /> */}
        </LayersControl.Overlay>
      </LayersControl>
      <ScaleControl />
    </MapContainer>
  );
}
