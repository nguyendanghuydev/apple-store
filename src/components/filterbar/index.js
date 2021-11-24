import { useState, useRef } from "react";
import { Rating } from "@mui/material";

import Grid from "../grid";

function FilterBar(props) {
  const { onSubmit, grid = {} } = props;

  const [searchTitle, setSearchTitle] = useState("");
  const [selectPrice, setSelectPrice] = useState("");
  const [selectSort, setSelectSort] = useState("");
  const [rating, setRating] = useState(null);
  const [filter, setFilter] = useState({
    selectPrice,
    searchTitle,
    selectSort,
    rating,
  });

  const timeOutSearchRef = useRef();

  const searchChangeHandler = (e) => {
    const value = e.target.value;
    setSearchTitle(value);
    if (!onSubmit) return;
    if (timeOutSearchRef.current) {
      clearTimeout(timeOutSearchRef.current);
    }
    timeOutSearchRef.current = setTimeout(() => {
      setFilter((prev) => {
        return {
          ...prev,
          searchTitle: value,
        };
      });
      onSubmit({ ...filter, searchTitle: value });
    }, 300);
  };
  const selectPriceChangeHandler = (e) => {
    const value = e.target.value;
    setSelectPrice(value);
    setFilter((prev) => {
      return {
        ...prev,
        selectPrice: value,
      };
    });
    onSubmit({ ...filter, selectPrice: value });
  };
  const selectSortChangeHandler = (e) => {
    const value = e.target.value;
    setSelectSort(value);
    setFilter((prev) => {
      return {
        ...prev,
        selectSort: value,
      };
    });
    onSubmit({ ...filter, selectSort: value });
  };
  const ratingChangeHandler = (event, newValue) => {
    setRating(newValue);
    setFilter((prev) => {
      return { ...prev, rating: newValue };
    });
    onSubmit({ ...filter, rating: newValue });
  };
  return (
    <div className="filter-bar">
      <div className="container">
        <Grid {...grid}>
          <div className="filter-bar__search-box">
            <h4>Tìm Kiếm</h4>
            <input
              type="text"
              value={searchTitle}
              onChange={searchChangeHandler}
            />
          </div>
          <div className="filter-bar__select-price">
            <h4>Theo Giá</h4>
            <select onChange={selectPriceChangeHandler}>
              <option value="10000000">nhỏ hơn 10 triệu</option>
              <option value="20000000">nhỏ hơn 20 triệu</option>
              <option value="30000000">nhỏ hơn 30 triệu</option>
            </select>
          </div>
          <div className="filter-bar__select-sort">
            <h4>Theo Thứ Tự</h4>
            <select onChange={selectSortChangeHandler}>
              <option value="asc">từ nhỏ đến lớn</option>
              <option value="desc">từ lớn đến nhỏ</option>
            </select>
          </div>
          <div className="filter-bar__select-rating">
            <h4>Theo Rating</h4>
            <Rating
              style={{fontSize:'2.3rem'}}
              name="simple-controlled"
              value={rating}
              onChange={ratingChangeHandler}
            />
          </div>
        </Grid>
      </div>
    </div>
  );
}

export default FilterBar;
