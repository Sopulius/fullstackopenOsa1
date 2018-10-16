import React from 'react'
import ReactDOM from 'react-dom'
const Otsikko =  (props) => {
    return (       
        fdiv(<h1>{props.kurssi}</h1>)     
    )
}

const Sisalto = (props) => {
    var rows = [];
    props.osat.forEach((osa) => {
        rows.push(<Osa osa={osa.nimi} tehtavia={osa.tehtavia}/>);
    })
    return fdiv(rows)
}

const Osa = (props) => {
    return (<p>{props.osa} {props.tehtavia}</p>)
}

const Yhteensa = (props) => {
    var sum = 0;
    props.osat.forEach((osa) =>{
        sum+=osa.tehtavia;
    })
    return fdiv(<p>yhteensä {sum} tehtävää</p>)
}

const fdiv = (props) =>{
    return (
        <div>{props}</div>
    )
}
const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
   
  const osat = [osa1,osa2,osa3];
 
  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osat={osat}/>
      <Yhteensa osat={osat}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)