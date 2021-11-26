import dataProduct from "../assets/fake-data/Product";
import dataSlider from "../assets/fake-data/HeroSlider";
import dataService from "../assets/fake-data/Service";

import Helmet from "../components/Helmet";
import Hero from "../components/hero";
import Product from "../components/product";
import ServiceBox from "../components/serviceBox";

function Home() {
  const gridProduct = { lg: 3, md: 2, sm: 1, gap: 20 };
  const gridServiceBox = { lg: 3, md: 2, sm: 1, gap: 40 };
  return (
    <Helmet title="Trang Chủ">
      <Hero data={dataSlider} />
      <Product data={dataProduct} grid={gridProduct} limit={10} />
      <ServiceBox data={dataService} grid={gridServiceBox}></ServiceBox>
    </Helmet>
  );
}

export default Home;
