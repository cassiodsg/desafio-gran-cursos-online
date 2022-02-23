import React, { useState, useEffect } from "react";
import Paginate from "../utils/paginate";
import { IProduct } from "../model/product";

export function useFetch() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<Array<any>>([]);
  const [branding, setBranding] = useState<Array<any>>([]);
  const [list, setList] = useState<Array<any>>([]);

  const url = "http://localhost:3001/products?_limit=25";

  const getProducts = async () => {
    const response = await fetch(url);
    const products: IProduct[] = await response.json();

    const categories = products
      .map((product: IProduct) => product.category)
      .filter(
        (el: any, id: number, self: any) =>
          self.findIndex((s: any) => s === el) === id
      );

    const brand = products
      .map((product: IProduct) => product.brand)
      .filter(
        (el: any, id: number, self: any) =>
          self.findIndex((s: any) => s === el) === id
      );

    setData(Paginate(products));
    setLoading(false);

    setCategories(categories);
    setBranding(brand);

    setList(products);
  };

  useEffect(() => {
    getProducts();
    return () => {
      setData([]);
      setCategories([]);
      setBranding([]);
      setList([]);
    };
  }, []);

  return { loading, data, categories, branding, list };
}
