import React from "react";
import { useLocation } from "react-router-dom";

const BookSearch = () => {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("searchBy");

  return <div>{query}</div>;
};

export default BookSearch;
