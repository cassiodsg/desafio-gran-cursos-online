import React, { useState, useEffect } from "react";
import Paginate from "../utils/paginate";
import { IProducts } from "../model/products";

export function useFetch() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IProducts[]>([]);

  const url = "http://localhost:3001/products?_limit=25";

  const getProducts = async () => {
    const response = await fetch(url);
    const products: IProducts[] = await response.json();

    setData(Paginate(products));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
    return () => {
      setData([]);
    };
  }, []);

  return { loading, data };
}
