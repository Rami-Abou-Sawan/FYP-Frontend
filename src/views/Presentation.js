import React from "react";

// reactstrap components

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import PresentationHeader from "components/Headers/PresentationHeader.js";
// sections for this page
import SectionComponents from "./presentation-sections/SectionComponents.js";
import SectionCards from "./presentation-sections/SectionCards.js";
import SectionOverview from "./presentation-sections/SectionOverview.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";

function Presentation() {
  document.documentElement.classList.remove("nav-open");
  // function that is being called on scroll of the page
  const checkScroll = () => {
    // it takes all the elements that have the .add-animation class on them
    const componentPosition = document.getElementsByClassName("add-animation");
    const scrollPosition = window.pageYOffset;
    for (var i = 0; i < componentPosition.length; i++) {
      var rec =
        componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      // when the element with the .add-animation is in the scroll view,
      // the .animated class gets added to it, so it creates a nice fade in animation
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add("animated");
        // when the element with the .add-animation is not in the scroll view,
        // the .animated class gets removed from it, so it creates a nice fade out animation
      } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
        componentPosition[i].classList.remove("animated");
      }
    }
  };

  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.addEventListener("scroll", checkScroll);
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("presentation-page");
      window.removeEventListener("scroll", checkScroll);
    };
  });
  return (
    <>
      <ColorNavbar />
      <PresentationHeader />
      <SectionComponents />
      <SectionCards />
      <SectionOverview />
      <FooterAboutUs />
    </>
  );
}

export default Presentation;
