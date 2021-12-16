import React, { Component } from 'react';
import ProductList from './ProductList.jsx';
import axios from 'axios'
import token from '../../../../config.js';



export default class Related extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = token
    axios.get(this.props.apiUrl + '/products' )
    .then((results) => { this.setState({products: results.data})});

  }

  render() {
    console.log(this.state.products)
    return (
      <div>
        <ProductList products={this.state.products}/>
      </div>
    )
  }
}
