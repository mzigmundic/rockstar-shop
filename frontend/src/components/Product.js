import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>
            <Card.Body className="text-center">
                <a href={`/product/${product._id}`}>
                    <Card.Title as="h4">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
                <Card.Text as="div">
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviews`}
                    />
                </Card.Text>
                <Card.Text as="h3">
                    <strong>${product.price}</strong>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
