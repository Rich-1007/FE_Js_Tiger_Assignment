import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { getLocations } from "../data";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";
import mark from "../../public/Location_Icon.png";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  const [locationsData, setLocationsData] = useState();
  const [initialPosition, setInitialPosition] = useState();

  console.log(initialPosition);
  const shipmentFetch = async () => {
    const fetchShipmentsData = await getLocations();
    setLocationsData(fetchShipmentsData.data);
    setInitialPosition([
      fetchShipmentsData.data[0].lat,
      fetchShipmentsData.data[0].long,
    ]);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  const customIcon = new Icon({
    iconUrl: mark,
    iconSize: [30, 30],
  });

  return (
    <div className="">
      <MapContainer center={[22.5590503, 114.2324407]} zoom={4}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locationsData?.map((marker) => (
          <Marker
            key={marker?.id}
            position={[marker.lat, marker.long]}
            icon={customIcon}
          >
            <Popup>{marker.location}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Maps;
