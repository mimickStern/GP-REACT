import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import Rating from './Rating';


const Product = (props) => {
    const {product} = props;
  return (
    <Card key={product.slug}>
    <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt="" className='card-img-top'></img>
                </Link>
                <Card.Body>
                <Link to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                  </Link>
                  <Rating rating={product.rating} numReviews={product.numReviews} />
                  <Card.Text>
                    {product.price}
                  </Card.Text>
                  <Button>Add To Cart</Button>
                </Card.Body>
                
              </div>
              </Card>
  )
}

export default Product