// pages/index.tsx
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "@/components/Product";
import Header from "@/components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <main className="min-h-screen max-w-7xl mx-auto px-8 xl:px-0 mt-48">
      <Header products={products} setProducts={setProducts} />

      <section className="flex flex-col space-y-12 pb-44">
        <h1 className="text-7xl font-bold text-center blue_gradient ">
          Products
        </h1>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
