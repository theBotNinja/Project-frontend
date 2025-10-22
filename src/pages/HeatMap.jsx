import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import "leaflet.heat";

export default function Heatmap() {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const HeatmapLayer = ({ points }) => {
    const map = useMap();
    if (points) {
      L.heatLayer(points, {
        radius: 30,
        blur: 15,
        maxZoom: 17,
      }).addTo(map);
    }
    map.flyTo([lat, long], 17);
    L.marker([lat, long]).addTo(map);
    return null;
  };
  const [auth, setAuth] = useAuth();
  const [heatPoints, setHeatPoints] = useState([[0, 0, 0.8]]);
  const showPosition = async (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLat(latitude);
    setLong(longitude);
    console.log(latitude);
    console.log(longitude);
  };
  const options = {
    enableHighAccuracy: true, // This is the key!
    timeout: 5000, // Don't wait forever
    maximumAge: 0, // Don't use a cached location
  };

  function error(err) {
    toast.error("Can't get location of the device!");
    // err.code 1 = PERMISSION_DENIED
    // err.code 2 = POSITION_UNAVAILABLE (e.g., no GPS, no Wi-Fi)
    // err.code 3 = TIMEOUT
  }
  useEffect(
    () =>
      navigator.geolocation.getCurrentPosition(showPosition, error, options),
    []
  );
  // sumbit locations to server and wait for data
  const handleSubmit = async (e) => {
    try {
      navigator.geolocation.getCurrentPosition(showPosition, error, options);
      let toastID = toast.loading("updating info ...");
      const payload = {
        userId: auth?.user._id,
        lat,
        long,
      };
      const res = await axios.post(
        "https://project-wsb.vercel.app/api/v1/map",
        payload
      );
      toast.dismiss(toastID);
      if (res.status === 200) {
        // success
        setHeatPoints(res.data.points);
        toast.success("updated info successfully");
      }
    } catch (e) {
      console.log(e);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100%",
          fontSize: "25px",
          marginTop: "5%",
          paddingLeft: "1%",
          paddingRight: "1%",
          borderRadius: "7px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MapContainer
          center={[0, 0]}
          zoom={14}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <HeatmapLayer points={heatPoints} />
        </MapContainer>
        <button
          onClick={handleSubmit}
          style={{
            width: "10%",
            margin: "7px",
            borderRadius: "7px",
            padding: "7px",
          }}
          className="clickbtn"
        >
          {" "}
          update info
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}
