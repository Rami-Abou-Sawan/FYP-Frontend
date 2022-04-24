import React from "react";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import ActiveStocksHeader from "components/Headers/ActiveStocksHeader";

function FavoriteTickers() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  return (
    <>
      <ColorNavbar />
      <ActiveStocksHeader />

      <FooterAboutUs />
    </>
  );
}

export default FavoriteTickers;
