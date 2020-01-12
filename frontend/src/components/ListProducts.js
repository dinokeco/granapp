import React, { Component } from 'react'

/* Asynchronous HTTP library */
import Axios from 'axios';
import { ListGroup, Card, ListGroupItem, CardColumns, Button, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import config from './../config';

/* Actions */
import { connect } from 'react-redux';
import { getAllProducts } from '../actions/productActions';

class ListProducts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [ ],
            isLoading: true
        };
    }

    /* Use the lifecycle method to fetch relevant data */
    componentDidMount = () => {
        this.props.getAllProducts();
    }

    /* Set props from the Redux store */
    componentDidUpdate = (prevProps) => {
        if (prevProps.products !== this.props.products) {
            this.setState({
                products: this.props.products,
                isLoading: false
            });
        }
    }

    render() {
        return (
            <div>
                <h2>Product list</h2>
                {
                    this.state.isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    ) : (
                        <div>
                            {
                                this.state.products && this.state.products.length > 0 && 
                                <CardColumns>
                                    {
                                        this.state.products.map(product => (
                                            <Card style={{ width: '18rem', margin: '1rem' }}>
                                                <Card.Img variant="top" src={product.image} />
                                                <Card.Body>
                                                    <Card.Title>{product.name}</Card.Title>
                                                    <Card.Text>
                                                        {product.description}
                                                    </Card.Text>
                                                </Card.Body>
                                                <ListGroup className="list-group-flush">
                                                    <ListGroupItem><b>Category: </b>{product.category}</ListGroupItem>
                                                    <ListGroupItem><b>Subcategory: </b>{product.subcategory}</ListGroupItem>
                                                    <ListGroupItem><b>Producer: </b>{product.producer}</ListGroupItem>
                                                </ListGroup>
                                                <Card.Footer>
                                                    <Button variant='primary' as={NavLink} exact to={'/products/' + product._id}>View product</Button>
                                                </Card.Footer>
                                            </Card>
                                        ))
                                    }
                                </CardColumns>
                            }
                            {/* Display if no products are available */}
                            {
                                !this.state.products.length && <p className='text-muted'>There are no available products.</p>
                            }
                        </div>
                    )
                }
            </div>
        )
    }
}

/* Extracting data from the state */
const mapStateToProps = (state) => {
    /* Return the data which the component needs */
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllProducts: () => { dispatch(getAllProducts()) }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListProducts);