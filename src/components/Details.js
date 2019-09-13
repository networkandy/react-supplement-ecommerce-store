import React, { Component } from 'react';
import { ProductConsumer } from '../data/context';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

 class Details extends Component {
    render() {
        return (
        <ProductConsumer>
            {(value) => {
                console.log(value.detailProduct);
                const {id, company , img, title, price, info, inCart} = value.detailProduct;

                return (
                    <div className="container py-5" >
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1 style={{color: "gold"}}>{title}</h1>
                            </div>
                        </div>
                        {/* end title */}
                        {/* product info */}
                        <div className="row">
                            <div className="col-10 mx-auto col-md-6 my-3 ">
                                <img src={img} className="img-fluid" alt="supplement" />
                            </div>

                            {/* product text */}
                            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                <h4>By: {company}</h4>
                                <h5>price: ${price}</h5>
                                <p className="text-capitalize font-weight-bold mt-3">
                                    Product Info
                                </p>
                                <p className="text-muted">
                                {info}
                                </p>
                                {/* buttons */}
                                <div>
                                    <Link to="/">
                                    <Button variant="outline-success">Back To Products
                                    </Button>
                                    </Link>
                                    
                                    <Button variant="outline-warning"
                                        disabled={inCart ? true : false}
                                        style={{marginLeft: "30px"}}  
                                        onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                        }}>
                                    {inCart ? "In Cart" : "Add To Cart"}
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
        )
    }
}


export default Details;