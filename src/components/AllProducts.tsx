import { products } from "../data/products";
import Product from "./Product";

const AllProducts = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        rowGap: '80px',
        justifyContent: "center",
        marginTop: '80px',
      }}
    >
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          imageUrl={product.imageUrl}
          price={product.price}
          description={product.description}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default AllProducts;
