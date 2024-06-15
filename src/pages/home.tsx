import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
function Home() {
  const addToCartHandler = () => {

  }
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="1233"
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
          price={234}
          name="macbook"
          handler={addToCartHandler}
          stock={23}
        />
      </main>
    </div>
  );
}

export default Home;
