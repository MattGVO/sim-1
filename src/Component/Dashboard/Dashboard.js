import React, { Component } from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    

    render() {
        return (
            <div>
                {this.props.inventory.map((val,i) => {
                    return <div key={i}>
                        <Product
                        key={i}
                        imageUrl = {val.imageurl}
                        productName = {val.productname}
                        price = {val.price}
                        />
                    </div>
                })

                }
                  
            </div>

        )
    }
}

export default Dashboard;