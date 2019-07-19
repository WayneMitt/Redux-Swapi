import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchData } from './actions'
import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    return <CharacterListView />;
  }
}

const mapDispatchToProps = {
  fetchData,
}

export default connect(null, mapDispatchToProps)(App)
