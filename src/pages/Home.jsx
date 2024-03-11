import React, { useEffect } from "react";
import Hero from "../components/Hero";
import HomePageData from "../data/HomePageData.json";
import Blob from "../components/Blob";
import BackgroundContainer from "../components/BackgroundContainer";
import BlobSmall from "../components/BlobSmall";
import AmbiencePink from "../components/AmbiencePink";
import AmbienceGreen from "../components/AmbienceGreen";
export default function Home() {
  const { hero, socialBtns } = HomePageData;
  return (
    <>
      <BackgroundContainer>
        <div className="ambienceBL">
          <AmbienceGreen />
        </div>
        <div className="ambienceTR">
          <AmbiencePink />
        </div>
        <div className="ambienceTC">
          <AmbienceGreen />
        </div>
        <div className="blob3d">
          <Blob />
        </div>
        <div className="blob3dSmall">
          <BlobSmall />
        </div>
      </BackgroundContainer>
      <Hero data={hero} />
      {/* <Brands data={brands} />
      <About data={about} />
      <Projects data={projects} />
      <Service data={service} />
      <Experience data={experience} />
      <Testimonial data={testimonial} />
      <Contact data={contact} socialData={socialBtns} /> */}
    </>
  );
}