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
  age_error: state.playersAgeError,
  name_error: state.playersNameError,
  form_valid: state.searchFormValid

});


const mapDispatchToProps = dispatch => ({

    onLoad: (payload) => 
      dispatch(playersFetchData(payload)),
    onNameError: (error) =>
      dispatch({ type: 'NAME_ERROR', error}),
    onAgeError: (error) =>
      dispatch({ type: 'AGE_ERROR', error}),
    onChangeField: (value, key) =>
      dispatch({ type: 'UPDATE_FIELD_EDITOR', key, value })

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

        <PlayersSearch
          onChangeField
        />
        <PlayersList players={players} />
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
