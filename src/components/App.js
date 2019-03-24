import React, { Component } from 'react';
import '../App.css';
import agent from '../agent';
import { connect } from 'react-redux'
import { playersFetchData } from '../actions/players'


const Promise = global.Promise;


const mapStateToProps = state => ({
  ...state.playersHasErroed,
  players: state.playesrSuccessPayload,
  loading: state.playersAreLoading,
  
});


const mapDispatchToProps = dispatch => ({

    onLoad: (payload) => 

      dispatch(playersFetchData(payload))
  
})




class App extends Component {

  componentDidMount(){

    this.props.onLoad(agent.getAllPlayers())

  }

  renderPlayers = array_object => {
    Array.prototype.map.call(array_object, (player)=>{
      return <p>{player.name}</p>
    })
  }


  render() {

    const {players} = this.props
    
    // const players_list = Array.prototype.map.call(players, function(player){
    //   return player.name
    // });

    console.log(players)

    return (
      <div className="container">

        <h1>Hola Mundo</h1>
        {
          Array.prototype.map.call(players, (player, i)=>{
            return <p key={i}>Nombre:{player.name}, Pais: {player.nationality}, Numero de camiseta: {player.jerseyNumber}</p>
          })
        }

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
