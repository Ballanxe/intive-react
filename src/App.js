import React, { Component } from 'react';
import './App.css';
import agent from './agent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as playersActions  from './players/actions';
import { searchedPlayersSelector } from './players/selectors';

import PlayersList from './players/components/PlayersList';
import PlayersSearch from './players/components/PlayersSearch';



const mapStateToProps = (state) => {

  const new_players = searchedPlayersSelector(state.playersReducer)

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

  searchFilter = (searchPam) => {

    this.props.actions.updatePlayersFilter(searchPam)

  }


  render() {

    const {all_players} = this.props
    const {search_players} = this.props
    
    return (
      <MuiThemeProvider data-test="main-component">
      <React.Fragment>
        <AppBar title="React Players" className="app-bar"/>
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
