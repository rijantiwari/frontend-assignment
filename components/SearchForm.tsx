"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Product from "./Product";
import Form from "./Form";
import SearchedResults from "./SearchedResults";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedProducts, setSearchedProducts] = useState([]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  console.log(searchQuery);

  const handleSearchSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products?title=${searchQuery}`
      );
      const searchResults = await response.json();
      setSearchedProducts(searchResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(searchedProducts);
  return (
    <>
      <Form
        handleSearchChange={handleSearchChange}
        handleSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
      />
      <SearchedResults searchedProducts={searchedProducts} />
    </>
  );
};

export default SearchForm;
