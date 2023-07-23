import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useCart } from "../contexts/CartContext";

export type productProps = {
  price: number;
  name: string;
  description: string;
  imageUrl: string;
  id: number;
};

const Product = ({ price, name, description, imageUrl, id }: productProps) => {
  const cartContext = useCart();

  const addToCart = () => {
    if (cartContext) {
      cartContext.addToCart({name, description, imageUrl, id, price});
    }
  };

  return (
    <Card
      style={{
        width: "20rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#ffffffe8",
      }}
    >
      <h5 style={{ marginBlock: "10px" }}>{name}</h5>
      <Card.Img variant="top" src={imageUrl} /> 
      <Card.Body
        style={{
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Text>{description}</Card.Text>
        <Button
          onClick={addToCart}
          style={{
            backgroundColor: "#33ad52ee3",
            color: "black",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Comprar {price} R$
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
