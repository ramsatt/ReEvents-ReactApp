import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal, closeModal } from "../modals/modalActions";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal,
  closeModal
};

class TestComponent extends Component {
  state = {
    latlng: { lat: 59.95, lng: 30.33 }
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({ latlng: latLng }))
      .catch(error => console.error("Error", error));
  };
  render() {
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <div>
        <h1>Test Component</h1>
        <h2>The answer is {data}</h2>
        <Button
          onClick={incrementCounter}
          positive
          content="Increment"
        ></Button>
        <Button
          onClick={decrementCounter}
          negative
          content="Decrement"
        ></Button>
        <Button
          onClick={closeModal}
          negative
          content="Close Modal"
          color="red"
        ></Button>
        <Button
          onClick={() => openModal("Test Modal", { data: 42 })}
          negative
          content="Open Modal"
          color="teal"
        ></Button>
        <TestPlaceInput selectAddress={this.handleSelect} />
        <SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
      </div>
    );
  }
}

export default connect(mapState, actions)(TestComponent);
