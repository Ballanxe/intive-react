import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import * as playersActions  from './players/actions';
import { searchedPlayersSelector } from './players/selectors';

import PlayersList from './players/components/PlayersList';
import PlayersSearch from './players/components/PlayersSearch';



const mapStateToProps = (state) => {

  const new_players = searchedPlayersSelector(state.players)

  return {
    ...state.players,
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

    this.props.actions.playersFetchData()

  }

  searchFilter = (searchPam) => {

    this.props.actions.updatePlayersFilter(searchPam)

  }


  render() {

    const {all_players} = this.props
    const {search_players} = this.props
    
    return (
      <MuiThemeProvider data-test="main-component" >
        <React.Fragment>
          <AppBar title="React Players" className="app-bar" data-test="app-bar"/>
          <div className="container" data-test="players-container">
            <PlayersSearch
              onChangeField={this.updatePlayersSearch}
              onSubmitForm={this.searchFilter}
            />
            <PlayersList 
              allPlayers={all_players.length === 0 ? null : all_players}
              searchPlayers={search_players.length === 0 ? null : search_players} />
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
