import { useCart } from "../contexts/CartContext";
import { productType } from "../types/allTypes";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Cart = () => {
  const cartContext = useCart();

  const addToCart = (product: productType) => {
    cartContext?.addToCart(product);
  };

  const removeFromCart = (id: number) => {
    cartContext?.removeToCart(id);
  };

  const calculateTotal = () => {
    let total = 0;
    cartContext?.cartItems.forEach((product) => {
      total += product.quantity * product.price;
    });
    return total;
  };

  return (
    <div>
      <Link to={"/"}>
        <Button variant="primary" style={{margin: '20px'}}>
          Voltar
        </Button>
      </Link>
      <h1 style={{ textAlign: "center" }}>Carrinho</h1>
      <h2 style={{ textAlign: "center" }}>Total: {calculateTotal()} R$</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {cartContext?.cartItems.map((product) => (
          <div
            key={product.id}
            style={{
              border: "2px solid gray",
              borderRadius: "10px",
              overflow: "hidden",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name}</p>
            <div>
              <Button variant="primary" onClick={() => addToCart(product)}>
                Adicionar
              </Button>
              <span>{product.quantity}x </span>
              <span>{product.quantity * product.price} R$</span>
              <Button
                variant="danger"
                onClick={() => removeFromCart(product.id)}
              >
                Remover
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
