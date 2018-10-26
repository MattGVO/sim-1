import React from 'react';

function Product(props) {
    return (
        <div>
            <p key={props.i}>{props.imageUrl}</p>

            <p key={props.i}>{props.productName}</p>

            <p key={props.i}>{props.price}</p>

            <button>Edit</button>

            <button>Delete</button>
        
        </div>
    )
}

export default Product;