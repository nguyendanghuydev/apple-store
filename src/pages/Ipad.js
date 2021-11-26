import { useEffect, useState } from "react";
import dataProduct from "../assets/fake-data/Product";

import FilterBar from "../components/filterbar";
import Product from "../components/product";
import Helmet from "../components/Helmet";


function Ipad() {
  const [dataIpad, setDataIpad] = useState([]);
  const gridProduct = { lg: 3, md: 2, sm: 1, gap: 20 };
  const gridFilterBar = { lg: 4, md: 2, sm: 1, gap: 30 };

  useEffect(() => {
    const data = dataProduct.filter((item) => {
      return item.categorySlug === "ipad";
    });
    setDataIpad(data);
  }, []);

  const filterBarHandler = (filter) => {
    const { searchTitle, selectPrice, selectSort, rating } = filter;
    console.log(rating);
    let data = dataProduct.filter((item) => {
      return item.categorySlug === "ipad";
    });
    data = data.filter((item) => {
      return item.title.toUpperCase().includes(searchTitle.toUpperCase());
    });
    if (selectPrice) {
      data = data.filter((item) => {
        return Number(item.price) < Number(selectPrice);
      });
    }
    if (selectSort === "asc") {
      data.sort((a, b) => {
        if (Number(a.price) > Number(b.price)) return 1;
        return -1;
      });
    }
    if (selectSort === "desc") {
      data.sort((a, b) => {
        if (Number(a.price) > Number(b.price)) return -1;
        return 1;
      });
    }
    if (rating) {
      data = data.filter((item) => {
        return item.star === Number(rating);
      });
    }

    setDataIpad(data);
  };

  return (
    <Helmet title="Ipad">
      <FilterBar grid={gridFilterBar} onSubmit={filterBarHandler} />
      <Product data={dataIpad} grid={gridProduct}></Product>
    </Helmet>
  );
}

export default Ipad;
