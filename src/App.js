import React, { Component } from 'react'
import './App.css'
import Square from './components/Square.js'
import PlayAgain from './components/PlayAgain.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["?", "?", "?", "?", "?", "?", "?", "?", "?"], 
      treasureLocation: null,
      bombLocation: null,
      guessesLeft: 9,
      winOrLose: ""
    }
    
  }

  resetValues = () => {
    let squares2 = ["?", "?", "?", "?", "?", "?", "?", "?", "?"]
    let treasureLocation2 = null
    let bombLocation2 = null
     let  guessesLeft2 = 9
     let  winOrLose2 = ""
    this.setState({squares: squares2, bombLocation: bombLocation2, guessesLeft: guessesLeft2, winOrLose: winOrLose2, treasureLocation: treasureLocation2})
    this.componentDidMount()
    }
  
  handleLocation = (indexLocation) => {
    // alert( indexLocation)
    let {squares, treasureLocation, bombLocation, guessesLeft} = this.state
    if(indexLocation === treasureLocation){
      squares[indexLocation] = "💰"
      guessesLeft = guessesLeft -1
      let win = "You Win!"
      this.setState({squares: squares, guessesLeft: guessesLeft, winOrLose: win})
      //alert (win) 
    } else if (indexLocation === bombLocation) {
      squares[indexLocation] = "💣"
      guessesLeft = guessesLeft -1
      let lose = "You Lose!"
      this.setState({squares: squares, guessesLeft: guessesLeft, winOrLose: lose})
      //this.setState({squares: squares})
      //alert ("You Are DEAD")
    } else {
      squares[indexLocation] = "🌴"
      guessesLeft = guessesLeft - 1
      this.setState({squares: squares, guessesLeft: guessesLeft})
      this.setState({squares: squares})
    }
  }

  componentDidMount () {
    const {squares} = this.state
    let treasure = Math.floor(Math.random()*squares.length)
    let bomb = Math.floor(Math.random()*squares.length)
    if (treasure === bomb) {
      if (treasure === squares.length -1) {
        bomb = 0
      } else {
        bomb = bomb + 1
      }
    } 
    this.setState({treasureLocation: treasure, bombLocation: bomb})
  }

  render() {
    console.log(this.state.treasureLocation, this.state.bombLocation, this.state.guessesLeft)
    let square = this.state.squares.map((value, index) => {
      return(
        <Square
        value={ value}
        index={ index}
        handleLocation={ this.handleLocation}
        />
      )
    })
    return(
      <React.Fragment>
        <h1>Treasure Hunt App</h1>
        <div id = "board">
        {square}
        </div>
      <div>
        <p>
          Guesses Left: {this.state.guessesLeft}
          </p>
        <p>
        {this.state.winOrLose}
        </p>
      </div>
        <PlayAgain
        resetValues = {this.resetValues}/>
      </React.Fragment>
    )
  }
}
export default App
