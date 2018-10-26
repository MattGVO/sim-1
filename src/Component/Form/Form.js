import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div>
                <form id = "form">
                
                    {this.props.imageUrl}    
                    <p>Image URL:</p>
                    <input
                        type="text"
                        name="imageUrl"
                        onChange={this.props.handleChange}
                    ></input>
                    <p>Product Name:</p>
                    <input
                        type="text"
                        name="productName"
                        onChange={this.props.handleChange}
                    ></input>
                    <p>Price:</p>
                    <input
                        type="number"
                        name="price"
                        onChange={this.props.handleChange}
                    ></input>
                    <br></br>
                    <br></br>
                    <button type= "reset"
                    >Cancel</button>
                    <button 
                    type = "button"
                    onClick ={this.props.addToInventory}
                    
                    >Add to Inventory</button>
                </form>
                
            </div>
        )

    }
}

export default Form;
