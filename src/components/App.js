import React, { Component } from 'react';
import '../App.css';
import agent from '../agent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playersActions  from '../actions/players';

import PlayersList from './PlayersList';
import PlayersSearch from './PlayersSearch';


const Promise = global.Promise;


const mapStateToProps = state => ({
  ...state.playersReducer,

})

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(playersActions, dispatch) }
}


class App extends Component {

  componentDidMount(){

    this.props.actions.playersFetchData(agent.getAllPlayers())

  }

  updatePlayersSearch = (newAttributes) => {

    this.props.actions.updatePlayersSearch(newAttributes)

  } 


  render() {

    const {players} = this.props
    
    return (
      <div className="container">

        <PlayersSearch
          onChangeField={this.updatePlayersSearch}
        />
        <div>Hola {this.props.number}</div>
        <PlayersList players={players} />

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
