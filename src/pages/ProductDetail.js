import './ProductDetail.css';

import { useParams, Navigate, useNavigate } from 'react-router-dom';
import products from '../data/products';

import { Button, Container, Image } from 'react-bootstrap';

function ProductDetail(){
    const navigate = useNavigate()
    const productId = useParams().id;
    const product = getProductByID( productId );
    
    if(product === undefined)
        return <Navigate to='/404'/>;

    return(
        <>
            <Button onClick={() => navigate('/produto/' + (Number(productId)-1))}>Anterior</Button>
            <Button onClick={() => navigate('/produto/' + (Number(productId)+1))}>Próximo</Button>
            <Container fluid id='product-detail' className="d-flex flex-column flex-md-row gap-1 gap-md-3 p-3">
                <Image src={product.image} className='border border-dark' id="product-image" alt={product.name}/>
                <Container fluid className='d-flex flex-column' id="product-side">
                    <h1 className="display-5 fs-4">{product.name}</h1>
                    <Container id='product-description' className='m-0 p-0'>
                        {product.description}
                    </Container>
                    <h3>R$ {product.price.replace(".", ",")}</h3>
                    <Button>Adicionar ao carrinho</Button>
                </Container>
            </Container>
        </>
    );
}


function getProductByID( id ){
    const product = products.find( (product) => Number(product.id) === Number(id) );
    return product;
}

export default ProductDetail;