import React from "react";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="h4">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="p">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>
                </Card.Text>
                <Card.Text as="h3">
                    <strong>${product.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
