import React from 'react';
import Context from './context';
export default class GlobalState extends React.Component {
  state = {
    location: {},
  }

  setLocation = (location) => {
    this.setState(location);
  };

  render() {
    return (
      <Context.Provider
        value={{
          location: this.state.location,
          setLocation: this.setLocation,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}