import React from 'react'
import ReactDOM from 'react-dom'
const Otsikko =  (props) => {
    return (       
        fdiv(<h1>{props.kurssi}</h1>)     
    )
}

const Sisalto = (props) => {
    var rows = [];
    for (var i = 0; i<props.osat.length; i++){
        rows.push(<Osa osa={props.osat[i]} tehtavia={props.tehtavat[i]}/>);
    }
    return fdiv(rows)
}

const Osa = (props) => {
    return (<p>{props.osa} {props.tehtavia}</p>)
}

const Yhteensa = (props) => {
    var sum = 0;
    for (var i = 0; i<props.tehtavat.length; i++){
        sum+=props.tehtavat[i];
    }
    return fdiv(<p>yhteensä {sum} tehtävää</p>)
}

const fdiv = (props) =>{
    return (
        <div>{props}</div>
    )
}
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14
   
  const osat = [osa1,osa2,osa3];
  const tehtavat = [tehtavia1,tehtavia2,tehtavia3];
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osat={osat} tehtavat={tehtavat}/>
      <Yhteensa tehtavat={tehtavat}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)