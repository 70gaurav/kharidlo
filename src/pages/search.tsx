import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price (Low to High)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            value={maxPrice}
            min={100}
            max={100000}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          ></input>
        </div>

        <div>
          <h4>category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="asc">Sample 1</option>
            <option value="dsc">sample 2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </main>
    </div>
  );
}

export default Search;
