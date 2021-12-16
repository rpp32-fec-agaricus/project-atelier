import React from 'react';
import Overview from './Components/Overview/Overview.jsx';
import token from '../../config.js';
import Related from './Components/Related/Related.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 59553
    }
    this.apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'
  }
  render() {
    return (
      <div>
        <Overview/>
        <Related apiUrl={this.apiUrl}/>
      </div>
    )
  }
}

export default App;