/** @jsxImportSource @emotion/react */
import Image from "./Image";
import "./reset.css";
import Spinner from './Spinner';

import { css } from "@emotion/react";

function App() {
  return (
    <div
      className="App"
      css={css`!
        max-width: 1024px;!
        margin: 0 auto;
        padding-top: 1rem;
      `}
    >
      <h1
        css={css`
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 2rem;
        `}
      >
        Image Gallery
      </h1>

      <Image
        src="https://apod.nasa.gov/apod/image/2206/Arp286-202203-CDK24-FLIPL9000-LRGB_NicolasROLLAND_signature_LD1024.jpg"
        alt="Image 1"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image
        src="https://apod.nasa.gov/apod/image/2206/CygWideHa-OIIIBiColorImage2_crop2_1024.jpg"
        alt="Image 2"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image
        src="https://apod.nasa.gov/apod/image/2206/Ngc6188_Robertson_2000.jpg"
        alt="Image 3"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image
        src="https://apod.nasa.gov/apod/image/2206/M31MwBang_NASA_1280.jpg"
        alt="Image 4"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image
        src="https://apod.nasa.gov/apod/image/2205/Needle_Galaxy_4-7-22.jpg"
        alt="Image 5"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image
        src="https://apod.nasa.gov/apod/image/2205/LagoonCenter_HubbleOzsarac_960.jpg"
        alt="Image 6"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image
        src="https://apod.nasa.gov/apod/image/2205/M31_HubbleSubaruGendler_960.jpg"
        alt="Image 7"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image
        src="https://apod.nasa.gov/apod/image/2205/DiamondMoonWSMALL1024.jpg"
        alt="Image 8"
        threshold={0.9}
        loadingIcon={<Spinner />}
      />

      <Image src="https://apod.nasa.gov/apod/image/2205/CatsPaw_Bemmerl_960.jpg" threshold={0.9}
        loadingIcon={<Spinner />} />
    </div>
  );
}

export default App;
