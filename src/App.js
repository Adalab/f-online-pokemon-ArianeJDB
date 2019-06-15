import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
    }
    this.getPokemon = this.getPokemon.bind(this);
  }
  componentDidMount(){
    this.getPokemon();
  }
  getPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?=25&limit=25')
      .then(res => res.json())
      .then(data => {
        data.results.map(item => {
          fetch(item.url)
            .then(res => res.json())
            .then(moredata => {
              console.log('moredata', moredata);
            })
          })
          // fetch(item.url)
          //   .then(res => res.json())
          //   .then(moredata => {
          //     console.log(moredata);
          //     this.setState({
          //       pokemon: moredata
          //     })
          //   }))
        // console.log(data) ;
        // this.setState({
        //   pokemon: data
        // })
      })
  }
  render() {
    return (<p>Hola</p>);
  }
}

export default App;
