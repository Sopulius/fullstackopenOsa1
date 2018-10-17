import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}

const Title = (props) =>{
    return (
        <h1>{props.text}</h1>
    )
}

const Votes = (props) =>{
    return (
        <p>Has {props.state.points[props.state.selected]} votes.</p>
    )
}

const Best = (props) =>{
    const points = props.points
    var high = 0
    var best = 0
    for (var i = 0; i<points.length; i++){
        if(points[i]>high){
            high = points[i]
            best = i
        }
    }
    return (
        <div>
        <Title text="Anecdote with most votes:"/>
        {props.anecdotes[best]}
        <p>Has {high} votes.</p>
        </div>
    )
}
class App extends React.Component {
  constructor(props) {
    super(props)
    const zArr = new Array(props.anecdotes.length).fill(0)
    this.state = {
      selected: 0,
      points: zArr
    }
  }

  nextAnecdote = () =>{
    const value = Math.floor(Math.random()*this.props.anecdotes.length)
    this.setState({selected: value})
  }

  voteAnecdote = () =>{
    const copy = [...this.state.points]
    copy[this.state.selected]+=1
    this.setState({points: copy})   
  }

  render() {
    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <Votes state={this.state}/>
        <Button handleClick={this.nextAnecdote} text="next anecdote"/>
        <Button handleClick={this.voteAnecdote} text="vote"/>
        <Best anecdotes={this.props.anecdotes} points={this.state.points}/>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)