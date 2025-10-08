import React, { useState,useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import "leaflet.heat";

const HeatmapLayer = ({ points }) => {
  const map = useMap();
  L.heatLayer(points, {
    radius: 25,
    blur: 15,
    maxZoom: 17,
  }).addTo(map);
  return null;
};

export default function Heatmap() {
  const [long, setLong] = useState("");
  const [lat, setLat] = useState("");
  const [auth, setAuth] = useAuth();
  const [heatPoints, setHeatPoints] = useState([
    [0, 0, 0.8]
  ]);
  useEffect(() => getLocation(), []);
  const showPosition = async (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    setLat(latitude);
    setLong(longitude);
  };
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Error");
      toast.error("Can't get location of the device!");
    }
  };
  // sumbit locations to server and wait for data
  const handleSubmit = async (e) => {
    try {
      const payload = {
        userId: auth?.user._id,
        lat,
        long,
      };
      console.log(payload);
      const res = await axios.post(
        "https://project-wsb.vercel.app/api/v1/map",
        payload
      );
      if (res.status === 200) {
        // success
        console.log(res.body)
        setHeatPoints(res.body.points)
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
        }}
      >
        <MapContainer
          center={[26.728464, 83.437183]}
          zoom={14}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <HeatmapLayer points={heatPoints} />
        </MapContainer>
      <button onClick={handleSubmit}> update info</button>
      </div>
      <Footer></Footer>
    </>
  );
}
