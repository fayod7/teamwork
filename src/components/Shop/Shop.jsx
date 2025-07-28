import React, { useState, useMemo } from "react";
import Reusable from "../reusable-hero/Reusable";
import ShopProducts from "../ShopProducts/ShopProducts";
import Services from "../customer-services/Services";
import { useFetch } from "../../hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import Skeleton from "../products/Skeleton";

const PRODUCTS_PER_PAGE = 16;

const ShopContent = () => {
  window.scrollTo(0, 316);
  const { data, error, loading } = useFetch("/products");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");

  const products = data?.products || [];

  // Unique brands/types for select
  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products]
  );
  const types = useMemo(
    () => [...new Set(products.map((p) => p.type).filter(Boolean))],
    [products]
  );

  // Filtering
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch = p.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesBrand = brand ? p.brand === brand : true;
      const matchesType = type ? p.type === type : true;
      const matchesMin = minPrice ? p.price >= Number(minPrice) : true;
      const matchesMax = maxPrice ? p.price <= Number(maxPrice) : true;
      return (
        matchesSearch && matchesBrand && matchesType && matchesMin && matchesMax
      );
    });
  }, [products, search, brand, type, minPrice, maxPrice]);

  // Sorting
  const sorted = useMemo(() => {
    let arr = [...filtered];
    if (sort === "az") arr.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "za") arr.sort((a, b) => b.title.localeCompare(a.title));
    if (sort === "price-low") arr.sort((a, b) => a.price - b.price);
    if (sort === "price-high") arr.sort((a, b) => b.price - a.price);
    return arr;
  }, [filtered, sort]);

  // Pagination
  const pageCount = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = sorted.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  // Reset page on filter/sort change
  React.useEffect(() => {
    setPage(1);
  }, [search, brand, type, minPrice, maxPrice, sort]);

  return (
    <>
      <Reusable title="Shop" link="Shop" />
      <div className="w-full bg-[#F9F1E7] py-[10px] mb-[67px]">
        <div
          className="container flex flex-wrap items-center gap-4  px-6"
          style={{ minHeight: 100, borderRadius: 12 }}
        >
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 bg-white focus:outline-none focus:ring w-40"
          />
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 bg-white"
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          {types.length > 0 && (
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300 bg-white"
            >
              <option value="">All Types</option>
              {types.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          )}
          <input
            type="number"
            placeholder="Min price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 bg-white w-24"
          />
          <input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 bg-white w-24"
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 bg-white"
          >
            <option value="">Sort by</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
          <span className="ml-auto text-gray-700 text-sm">
            Showing{" "}
            {sorted.length === 0 ? 0 : (page - 1) * PRODUCTS_PER_PAGE + 1}–
            {Math.min(page * PRODUCTS_PER_PAGE, sorted.length)} of{" "}
            {sorted.length} results
          </span>
        </div>
      </div>
      <div className="container">
        {loading ? <Skeleton /> : <ShopProducts data={paginatedProducts} />}
      </div>
      <div className="flex justify-center my-8">
        <Pagination
          count={pageCount}
          page={page}
          onChange={(_, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
        />
      </div>
      <div className="mt-[85px] mb-0">
        <Services />
      </div>
    </>
  );
};

export default ShopContent;
