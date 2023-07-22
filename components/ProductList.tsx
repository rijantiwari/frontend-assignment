// ProductListPage.tsx

import React, { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import Product from "./Product";

type Props = {
  product: Product;
};

const ProductListPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <SearchForm setSearchResults={setSearchResults} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(searchResults.length > 0 ? searchResults : products).map(
          (product) => (
            <Product key={product.id} product={product} />
          )
        )}
      </div>
    </main>
  );
};

export default ProductListPage;
