import React, { Component } from 'react';
import './App.scss';
import DevInfo from './DevInfo'


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
    const response = await fetch('/devInformation')
    const body = await response.json()

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  }

  render() {

    const { data } = this.state
    
    if (!data) return <div>Loading</div>
    
    const { name, age, job, portfolioUrl } = data

    console.log(portfolioUrl)

    return (
      <div className="App">
        <DevInfo
          name={name}
          age={age}
          job={job}
          portfolioUrl={portfolioUrl}
        >
        </DevInfo>
      </div>
    )
  }
}

export default App;
