import React from 'react';
import Overview from './Components/Overview/Overview.jsx';
// import token from '../../config.js';
import ProductList from './Components/Related/ProductList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Overview/>
        <ProductList sebData={this.props.sebData}/>
      </div>
    )
  }
}

export default App;