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
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
          {
            nimi: 'Reactin perusteet',
            tehtavia: 10
          },
          {
            nimi: 'Tiedonvälitys propseilla',
            tehtavia: 7
          },
          {
            nimi: 'Komponenttien tila',
            tehtavia: 14
          }
        ]
      }
 
  return (
    <div>
      <Otsikko kurssi={kurssi.nimi}/>
      <Sisalto osat={kurssi.osat}/>
      <Yhteensa osat={kurssi.osat}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)