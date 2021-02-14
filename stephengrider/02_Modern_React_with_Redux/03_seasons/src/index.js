import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // Old way of creating state
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  // New way of intializing state:
  state = { latitude: null, errorMessage: '' };

  // When the component loads on the screen
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }
  
  // setState triggers:
  // Good place to call an API every time a users presses a button.
  // Get new props from a parent component
  componentDidUpdate() {
    console.log('My component was just updated & rerendered...')

  }

  // Cleanup after component is no longer shown
  // componentWillUnmount() {}

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay latitude={this.state.latitude} />
    }

    return <Spinner message="Please accept location request" />
  }
  // React says we have to define render!!
  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
