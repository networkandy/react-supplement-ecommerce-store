import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data/data';
import {ProductConsumer} from '../data/context';

 class ProductList extends Component {
    state={
        products: storeProducts
    }

    render() {
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                            <Title name="Your" title="Supplements"  />

                         <div className="row" > 
                            <ProductConsumer>
                                {(value)=> {
                                    console.log(value);
                                    return value.products.map(product => {
                                        return <Product key={product.id}  product={product} />;
                                        
                                    });
                                }}
                            </ProductConsumer>
                         </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProductList;