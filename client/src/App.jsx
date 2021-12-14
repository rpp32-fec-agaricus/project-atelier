import React from 'react';
import Overview from './Components/Overview/Overview.jsx';
// import token from '../../config.js';
import ProductList from './Components/Related/ProductList.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'
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