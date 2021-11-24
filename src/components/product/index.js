import { useState, useEffect } from "react";
import { ExpandMore } from "@mui/icons-material";
import AOS from 'aos'
import 'aos/dist/aos.css';
import ProductCard from "./ProductCard";
import Grid from "../grid";
function Product(props) {
  const { data, limit = 10, grid={},aos = "fade-up" } = props;
  
  const [counterExpand, setCounterExpand] = useState(1);

  const totalExpand = Math.ceil(data.length / limit);
  const [listItems, setListItems] = useState([]);
  useEffect(()=>{
    AOS.init({duration:1200})
  },[])
  useEffect(() => {
    const list = () => {
      const end = counterExpand * limit;
      const result = data.slice(0, end);
      setListItems(result);
    };
    list();
  }, [data, counterExpand,limit]);

  const expandClickHandler = () => {
    setCounterExpand(counterExpand + 1);
  };

  return (
    <div className="product">
      <div className="container">
        <div>
          <Grid {...grid}>
            {listItems.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  item={item}
                  aos={aos}
                ></ProductCard>
              );
            })}
          </Grid>
        </div>
        {counterExpand < totalExpand && (
          <button className="expandMore" onClick={expandClickHandler}>
            Xem Thêm
            <ExpandMore />
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
