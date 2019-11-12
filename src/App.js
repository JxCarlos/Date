import React, { Component } from "react";
import API from "./services/dateAPI";
import DateButton from "./components/DateButton";
import DateDisplay from "./components/DateDisplay";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apiResponse: ""
    };
		this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = () => {
	 	API.getAPIResponse().then(({data})  => this.setState({ apiResponse: data }) );
  };

  render() {
	
    return (
      <div>
        <center>
          <h1>Date API</h1>
        </center>
        <center>
          <DateButton handleButtonClick={this.handleButtonClick}></DateButton>
        </center>
        <DateDisplay apiResponse = {this.state.apiResponse.date}></DateDisplay>
      </div>
    );
  }
}

export default App;
