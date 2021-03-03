import { useContext } from "react";
import ProductsContext from "../contexts";

function Header() {
  const sorts = [
    "Featured",
    "Best Selling",
    "Alphabetically, A-Z",
    "Alphabetically, Z-A",
    "Price, low to high",
    "Price, high to low",
    "Date, new to old",
    "Date, old to new",
  ];
  const { filters, setFilter } = useContext(ProductsContext);

  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>
          <select onChange={(e) => setFilter(e.target.value)}>
            {filters.map((filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            ))}
          </select>
        </div>
        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            {sorts.map((sort) => (
              <option key={sort} value="/">
                {sort}
              </option>
            ))}
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Header;
