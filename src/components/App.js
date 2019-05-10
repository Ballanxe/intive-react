import React, { Component } from 'react';
import '../App.css';
import agent from '../agent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playersActions  from '../actions/players';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {searchedPlayersSelector} from '../reducers'

import PlayersList from './PlayersList';
import PlayersSearch from './PlayersSearch';



const mapStateToProps = (state) => {

  const new_players = searchedPlayersSelector(state)

  return {
    ...state.playersReducer,
    search_players: new_players
  }

}

function mapDispatchToProps(dispatch) {
  return { 
    actions: bindActionCreators(playersActions, dispatch),
    
  }
}

class App extends Component {

  componentDidMount(){

    this.props.actions.playersFetchData(agent.Players.all())

  }

  updatePlayersSearch = (newAttributes) => {

    this.props.actions.updatePlayersSearch(newAttributes);

  }

  searchFilter = (searchPam) => {

    this.props.actions.updatePlayersFilter(searchPam)

  }


  render() {

    const {all_players} = this.props
    const {search_players} = this.props
    
    return (
      <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="React Players" />
      </React.Fragment>
      <div className="container">
        <PlayersSearch
          onChangeField={this.updatePlayersSearch}
          onSubmitForm={this.searchFilter}
        />
        <PlayersList 
          allPlayers={all_players}
          searchPlayers={search_players.length === 0 ? null : search_players} />
      </div>
      </MuiThemeProvider>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
