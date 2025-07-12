import './ProductDetail.css';

import { useParams, Navigate, useNavigate } from 'react-router-dom';
import products from '../data/products';

import { Button, Container, Image } from 'react-bootstrap';

function ProductDetail(){
    const navigate = useNavigate();
    const productId = useParams().id;
    const product = getProductByID( productId );
    
    if(product === undefined)
        return <Navigate to='/404'/>;

    return(
        <Container>
            {product.name} <br/>
            {product.image} <br/>
            <Image src={product.image} height={500}/> <br/>
            <Button onClick={()=>navigate("/produto/"+(Number(productId)-1))}>Anterior</Button>
            <Button onClick={()=>navigate("/produto/"+(Number(productId)+1))}>Próximo</Button>
        </Container>
    );
}


function getProductByID( id ){
    const product = products.find( (product) => product.id == id );
    return product;
}

export default ProductDetail;