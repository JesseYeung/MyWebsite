import React from "react";
import fontPrimaryNormal from "../../../static/fonts/SansSerifFLF-Demibold.woff";
import fontPrimaryBold from "../../../static/fonts/SansSerifBldFLF.woff";
import fontSecondaryNormal from "../../../static/fonts/BwGradual-Medium.ttf";

const Preload = () => (
  <>
    {/* Preload Fonts */}
    <link
      rel="preload"
      href={fontPrimaryNormal}
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={fontPrimaryBold}
      as="font"
      type="font/woff"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href={fontSecondaryNormal}
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
    />

    {/* Preload Content */}
    <link rel="preload" href={canary} as="video" type="video/mp4" />
    <link rel="preload" href={maily} as="video" type="video/mp4" />
    <link rel="preload" href={neetcode} as="video" type="video/mp4" />
    <link rel="preload" href={piston} as="video" type="video/mp4" />
    <link rel="preload" href={smh} as="video" type="video/mp4" />
  </>
);

export default Preload;
