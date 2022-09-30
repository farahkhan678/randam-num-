// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onClickNumber = () => Math.ceil(Math.random() * 100)

  onClickNumberButton = () => {
    const ranNum = this.onClickNumber()
    this.setState(prevState => ({count: prevState.count + ranNum}))
  }

  render() {
    const {count} = this.state
    const stage = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-cont">
        <div className="bg-cont-min">
          <h1 className="head"> Count {count}</h1>
          <p className="headMin"> Count is {stage} </p>
          <button
            className="buttonClass"
            type="button"
            onClick={this.onClickNumberButton}
          >
            {' '}
            Increment{' '}
          </button>
          <p className="para"> *Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
