// import { APIProvider, Map } from "@vis.gl/react-google-maps";
// import { Linter } from "eslint";
// import { useState } from "react";

import axios from "axios";
import { useState } from "react";

// let lat=0;
// let long=0;

// AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8

const ProfileBio = ({ currentProfile }) => {
  const [lat, setlat] = useState();
  const [long, setlong] = useState();
  const [address, setaddress] = useState();

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    // Show a map centered at latitude / longitude.
    setlat(latitude);
    setlong(longitude);
  });

  const options = {
    method: "GET",
    url: "https://opencage-geocoder.p.rapidapi.com/geocode/v1/json",
    params: {
      q: `${lat},${long}`,
      key: "c10983e7157c4d2280d21a2d680011df",
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "004dd0c57fmsh9ba5d0268eaa795p18f035jsna4c955f35665",
      "X-RapidAPI-Host": "opencage-geocoder.p.rapidapi.com",
    },
  };

  const fetchFromAPI = async (url) => {
    const { data } = await axios.request(options);
    console.log(data.results[0]);
    setaddress(data.results[0].formatted);
    console.log("add", address);
    return data;
  };

  fetchFromAPI();

  // function getAddressFromCoordinates(latitude, longitude, apiKey) {
  //   const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  //   // Make the API request using fetch
  //   return fetch(apiUrl)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       if (data.status === "OK") {
  //         // Extract the formatted address
  //         const address = data.results[0].formatted_address;
  //         return address;
  //       } else {
  //         throw new Error(
  //           `Geocoding request failed with status: ${data.status}`
  //         );
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error during geocoding request:", error);
  //       return null;
  //     });
  // }

  // // Example usage
  // const latitude1 = 37.7749;
  // const longitude1 = -122.4194;
  // const apiKey = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";

  // getAddressFromCoordinates(latitude1, longitude1, apiKey).then((address) => {
  //   if (address) {
  //     console.log(`The address is: ${address}`);
  //   } else {
  //     console.log("Unable to retrieve the address.");
  //   }
  // });

  return (
    <div>
      <div>
        {currentProfile?.tags.length !== 0 ? (
          <>
            <h4>Tags watched</h4>
            {currentProfile?.tags.map((tag) => (
              <p key={tag}>{tag}</p>
            ))}
          </>
        ) : (
          <p>0 tags watched</p>
        )}
      </div>
      <div>
        {currentProfile?.about ? (
          <>
            <h4>About</h4>
            <p>{currentProfile?.about}</p>
          </>
        ) : (
          <p>No bio found</p>
        )}
      </div>
      {/* Google maps api */}
      <>
        <div
          style={{
            maxWidth: "100%",
            listStyle: "none",
            transition: "none",
            overflow: "hidden",
            width: 600,
            height: 600,
          }}
        >
          <div
            id="google-maps-display"
            style={{ height: "100%", width: "100%", maxWidth: "100%" }}
          >
            {/* <iframe
              style={{ height: "100%", width: "100%", border: 0 }}
              frameBorder={0}
              src="https://www.google.com/maps/embed/v1/place?q=Irinjalakuda,+Kerala,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            /> */}

            <iframe
              style={{ height: "100%", width: "100%", border: 0 }}
              frameBorder={0}
              src={`https://www.google.com/maps/embed/v1/place?q=${address},+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
            />
          </div>
          <a
            className="from-embedmap-code"
            href="https://www.bootstrapskins.com/themes"
            id="get-data-for-embed-map"
          >
            premium bootstrap themes
          </a>
          <style
            dangerouslySetInnerHTML={{
              __html:
                "#google-maps-display img{max-width:none!important;background:none!important;font-size: inherit;font-weight:inherit;}",
            }}
          />
        </div>
      </>
    </div>
  );
};

export default ProfileBio;
