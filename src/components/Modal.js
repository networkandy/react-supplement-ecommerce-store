import React, { Component } from 'react';
import { Jumbotron, Button, Nav } from 'react-bootstrap';
import {ProductConsumer} from '../data/context';
import {Link} from 'react-router-dom';

 class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price } = value.modalProduct;

                    if(!modalOpen){
                        return null;
                    } else {
                        return (
                        <div id="modal">
                            <div  className=" container">
                                <div className="row">
                                    <div id="inner-modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5 className="item-added">Item added to the cart</h5>
                                        <img src={img} className="img-fluid" alt="pop up supplement" />
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price: ${price}</h5>
                                        <Link to="/" >
                                            <Button variant="outline-success" className="pop-btn" onClick={()=> {
                                                closeModal();
                                            }}>
                                                Store
                                            </Button>
                                        </Link>

                                        <Link to="/cart" >
                                            <Button variant="outline-warning" className="pop-btn"  onClick={()=> {
                                                closeModal();
                                            }}>
                                               Go To Cart
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }

                }}
            </ProductConsumer>
        )
    }
}


export default Modal;