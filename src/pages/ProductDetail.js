import "../styles/ProductDetail.css";

import { useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../contexts/CartContext";

import { ButtonGroup, Button, Container, Image } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";

const notifySuccess = (Mensagem) =>
  toast.info(Mensagem, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const productId = useParams().id;
  const product = getProductByID(productId);

  const { addToCart } = useCart();

  // Funções para modificar a quantidade
  const incrementQuantity = () =>
    setQuantity(quantity < 99 ? quantity + 1 : quantity);
  const decrementQuantity = () =>
    setQuantity(quantity > 1 ? quantity - 1 : quantity);

  // Se o produtor especificador não for encontado, redireciona
  if (product === undefined) return <Navigate to="/404" />;

  return (
    <>
      <Container
        fluid
        id="product-detail"
        className="d-flex flex-column flex-md-row gap-1 gap-md-3 p-3"
      >
        <ToastContainer />
        <Container fluid className="m-0 p-0 w-100 d-flex flex-column justify-content-center align-items-center">
          <div className="w-100 d-flex justify-content-end">
          <div id="product-category-tag"><Link to={`/produtos/${product.category}`} style={{ textDecoration: 'none', color: 'inherit' }}>{product.category}</Link></div>
          </div>
          <Image
            src={product.image}
            className="border border-dark"
            id="product-image"
            alt={product.name}
          />
        </Container>

        <Container fluid className="d-flex flex-column" id="product-side">
          <h1 className="display-5 fs-4" id="product-title">
            {product.name}
          </h1>

          <Container id="product-description" className="m-0 p-0">
            {product.description}
          </Container>

          <Container
            fluid
            className="m-auto text-center d-flex flex-column gap-2 mt-4 mt-md-0"
            id="shopping-info"
          >
            <h3 className="product-price">
              R$ {String(Number(product.price).toFixed(2)).replace(".", ",")}
            </h3>

            <Container
              flex
              className="d-flex flex-row justify-content-center gap-3"
            >
              <ButtonGroup aria-label="Quantity Control" id="control-quantity">
                <Button variant="light" onClick={decrementQuantity}>
                  -
                </Button>
                <span>{String(quantity).padStart(2, "0")}</span>
                <Button variant="light" onClick={incrementQuantity}>
                  +
                </Button>
              </ButtonGroup>

              <Button
                className="fs-5"
                onClick={() => { addToCart(product, quantity); setQuantity(1); notifySuccess("Item adicionado ao carrinho.") }}
              >
                Adicionar ao carrinho
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </>
  );
}

function getProductByID(id) {
  const product = products.find((product) => Number(product.id) === Number(id));
  return product;
}

export default ProductDetail;
