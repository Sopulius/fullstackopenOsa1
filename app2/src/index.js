import React from 'react'
import ReactDOM from 'react-dom'

const Title =  (props) => {
    return (       
        <h1>{props.name}</h1> 
    )
}

const Feedback = (props) => {
    const state = props.state
    const setValue = props.setValue
    return (
        <div>
        <Title name="Anna palautetta" />
        <Button name="Hyvä" field='hyva' state={state.hyva} setValue={setValue}/>
        <Button name="Neutraali" field='neutraali' state={state.neutraali} setValue={setValue}/>
        <Button name="Huono" field='huono' state={state.huono} setValue={setValue}/>
        </div>
    )
}

const Button = (props) => {
    const name = props.name
    const field = props.field
    const state = props.state
    const setValue = props.setValue
    return (
        <button onClick={setValue(field,state+1)}>{name}</button>
    )
}

const Statistics = (props) => {
    function average(state){
        var sum = count(state)
        if(sum === 0){
            return 0
        }
        return (-1*state.huono+state.hyva)/sum
    }
    function positive(state){
        var sum = count(state)
        if(sum === 0){
            return '-'
        }
        return ((state.hyva/sum)*100)+'%'
    }
    function count(state) {
        return state.hyva+state.neutraali+state.huono
    }

    const state = props.state
    if(count(state) === 0){
        return(
            <div>
            <Title name="Statistiikka"/>
            <p>Ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>
            <Title name="Statistiikka"/>
            <table>
                <tbody>
                <Statistic name="Hyvä" state={state.hyva}/>
                <Statistic name="Neutraali" state={state.neutraali}/>
                <Statistic name="Huono" state={state.huono}/>
                <Statistic name="Keskiarvo" state={average(state)}/>
                <Statistic name="Positiivisia" state={positive(state)}/>
                </tbody>
            </table>
        </div>
    )

    
}

const Statistic = (props) => {
    const name = props.name
    const state = props.state
    return (
        <tr>
            <td>{name}</td> 
            <td>{state}</td>
        </tr>
    )
}



class App extends React.Component {

  constructor(props){
      super(props)
      this.state = {
          hyva: 0,
          neutraali: 0,
          huono: 0
      }
  }

  setValue = (field,value) => {
      return () => {
        this.setState({[field]: value})
      }   
  }

  render(){
      return (
    <div>
      <Feedback state={this.state} setValue={this.setValue}/>
      <Statistics state={this.state}/>
    </div>)
    }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)