import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating.jsx';
import { listProductDetails } from '../actions/productActions.js';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';

const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);

  const { loading, error, product } = productDetails;
  
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);

    const addToCartHandler = () => {
      history.push(`/cart/${match.params.id}?qty=${qty}`);
    }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">⇽ Go Back</Link>
      {loading ? <Loader />
      : error ? <Message variant="danger" />
      : (

        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush" style={{boxShadow: 'none'}}>
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              <ListGroup.Item>
                {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card variant="flush" className="shadow-none">
              <ListGroup variant="flush" className="shadow-none">
                <ListGroup.Item className="border-0">
                  <Row>
                    <Col>
                    <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong 
                        style={{color: product.countInStock > 0 ? 'green' : 'red'}}
                      >
                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control as='select' value={qty} onChange={e => setQty(e.target.value)}>
                          {[...Array(product.countInStock).keys()].map(x => (
                            <option key={x + 1} value={x + 1}>{x + 1}</option>

                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}

                <ListGroup.Item>
                  <Button
                  onClick={addToCartHandler}
                    className="btn-block" 
                    type='button'
                    disabled={product.countInStock > 0 ? false : true}
                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )
    }
    </>
  );
}

export default ProductScreen;
