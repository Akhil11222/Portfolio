import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useRef ,useState } from "react";
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// 

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


// 
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const form = useRef();

  useEffect(() => {
     emailjs.init("kfJAB52KrimvBwtyX");
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c3jb9wg",
        "template_47pcllk",
        form.current,
        "kfJAB52KrimvBwtyX"
      )
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            I’m currently looking for a full-time job, but I’m also open to
            freelance opportunities — especially on ambitious or large projects.
            If you have any requests or questions, feel free to get in touch
            using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Akhil Tiwari,
          <br />
          India,
          <br />
          Hisampur, Mangarh <br />
          Pratapgarh Uttar Pradesh. <br />
          <span>akhiltiwari575@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[25.7942, 82.0435]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[25.7942, 82.0435]}>
              <Popup>
                Hisampur Mangarh, Kunda, Pratapgarh — Chai pe bulaya hai :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
