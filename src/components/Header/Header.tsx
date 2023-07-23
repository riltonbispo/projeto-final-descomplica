import { Link } from "react-router-dom";
import { HeaderStyle } from "./Header.style";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useCart } from "../../contexts/CartContext";

const Header = () => {
  const cartContext = useCart();
  let hasProduct
  
  if (cartContext) {
    hasProduct = cartContext?.cartItems?.length > 0;
  }

  return (
    <HeaderStyle hasProducts={hasProduct}>
      <h4>My Shop</h4>

      <Link to={"cart"} className="cart">
        <span>Carrinho</span>
        <i>
          <RiShoppingCart2Line />
        </i>
      </Link>
    </HeaderStyle>
  );
};

export default Header;
