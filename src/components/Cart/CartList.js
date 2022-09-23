import styled from 'styled-components/macro';
import CartItem from './CartItem';
import CartFooter from './CartFooter';
import { useCart } from 'contexts/cart';

export default function CartList() {
  const {carts} = useCart();
  return (
    <Container>
      {carts.products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <CartFooter total={carts.totalPrice} />
    </Container>
  );
}


/* -------------------------------------------------------------------------- */

const Container = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;
