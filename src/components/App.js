import React, { Component } from 'react';
import '../App.css';
import agent from '../agent';
import { connect } from 'react-redux';
import { playersFetchData } from '../actions/players';

import PlayersList from './PlayersList';
import PlayersSearch from './PlayersSearch';


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
    
    return (
      <div className="container">

        <PlayersSearch/>
        <PlayersList players={players} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
