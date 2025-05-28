import React from "react";
import style from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";

const SearchBox = () => {
  const dispatch = useDispatch()

  const handleFilter = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <label className={style.searchInput}>
      Search for contacts by name
      <input
        className={`form-control ${style.searchInput}`}
        onChange={(event) => handleFilter(event.target.value)}
      />
    </label>
  );
};

export default SearchBox;
