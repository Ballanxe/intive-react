import React, { Component } from 'react';
import '../App.css';
import agent from '../agent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playersActions  from '../actions/players';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {searchedPlayersSelector} from '../reducers/players'

import PlayersList from './PlayersList';
import PlayersSearch from './PlayersSearch';



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

    this.props.actions.playersFetchData(agent.getAllPlayers())

  }

  updatePlayersSearch = (newAttributes) => {

    this.props.actions.updatePlayersSearch(newAttributes);
    console.log(this.props)

  }

  // searchFilter = () => {

  //   this.props.actions.playersSearchFilter(new_players)
  // }


  render() {

    const {all_players} = this.props
    const {search_players} = this.props

    console.log(all_players)
    
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
        <PlayersList players={search_players ? search_players : all_players} />

      </div>
      </MuiThemeProvider>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
