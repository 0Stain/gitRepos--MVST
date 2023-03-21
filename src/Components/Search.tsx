import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs';
import classes from './Search.module.css';

type SearchProps = {
    onSearch: (query: string) => void;
  };
const Search = ({ onSearch }: SearchProps) => {
  const [query, setQuery] = useState("");


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
        onSearch(query);
    }
    };

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={classes.search}>
      <h2>Search by username :</h2>
    <div className={classes.search_container}>
      <input placeholder="Search GitHub users" onChange={handleQueryChange} onKeyDown={handleKeyDown} />
      <button onClick={handleSearch}>
      <BsSearch/>
      </button>
    </div></div>
  );
};

export default Search;
