import Faq from "../components/faq";
import Hero from "../components/hero";

import Newsletter from "../components/newsletter";
import ProductLayout from "../components/productLayout";
import Accessories from "../components/accessories";
import SecondAds from "../components/secondAds";
import Location from "../components/otherstores/location";

// import MapLayout from "../googlemap/mapLayout"

const Otherstores = () => {
  return (
    <>
      <div className="overflow-x-hidden relative w-[100%]">
        <Hero />
        <Location />
        <Accessories />
        <ProductLayout />
        <SecondAds />
        <Faq />
        <Newsletter />
      </div>
    </>
  );
};

export default Otherstores;
