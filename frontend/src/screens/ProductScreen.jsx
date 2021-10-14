import React, { useEffect } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Rating from '../components/Rating.jsx';
import { listProductDetails } from '../actions/productActions.js';
import Loader from '../components/Loader.jsx';
import Message from '../components/Message.jsx';

const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector(state => state.productDetails);

  const { loading, error, product } = productDetails;
  
  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match]);


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
                    {/* <Col>
                      Price:
                    </Col> */}
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
                <ListGroup.Item>
                  <Button 
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
