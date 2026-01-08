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

    {/* Preload Content - Videos removed due to missing files */}
  </>
);

export default Preload;
