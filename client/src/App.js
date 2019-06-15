import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    this.callToBackend()
      .then(res => {
        console.log('res', res)
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

    return (
      <div className="App">
        <div>name: {data.name}</div>
        <div>age: {data.age}</div>
      </div>
    )
  }
}

export default App;
