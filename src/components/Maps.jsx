import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { getLocations } from "../data";
import { useEffect, useState } from "react";
import { Icon } from "leaflet";
import mark from "../../public/Location_Icon.png";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  const [locationsData, setLocationsData] = useState();

  const shipmentFetch = async () => {
    const fetchShipmentsData = await getLocations();
    setLocationsData(fetchShipmentsData.data);
    // console.log(fetchShipmentsData.data);
  };

  useEffect(() => {
    shipmentFetch();
  }, []);

  const customIcon = new Icon({
    iconUrl: mark,
    iconSize: [21, 27],
  });

  return (
    <div className="">
      <MapContainer center={[22.5590503, 114.2324407]} zoom={1}>
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
