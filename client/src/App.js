import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.callToBackend()
      .then(res => {
        this.setState({ data: res })})
      .catch(err => console.log(err))
  }

  callToBackend = async () => {
    const response = await fetch('/dev')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }


  render() {

    const { data } = this.state
    
    if (!data) return <div>Loading</div>
    
    const { name, age, job } = data

    return (
      <div className="App">
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Job: {job}</div>
      </div>
    )
  }
}

export default App;
