import React, { Component } from 'react';
import '../App.css';
import agent from '../agent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playersActions  from '../actions/players';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

    this.props.actions.updatePlayersSearch(newAttributes);

    console.log(this.props)

  }

  searchFilter = (filterObject) => {
    console.log(filterObject)
    console.log(this.props.players)

    let players = this.props.players

    let new_players = players.filter(element =>{
      return element.name.toLowerCase().includes(filterObject.players_name.toLowerCase()) &&
             element.position.includes(filterObject.position)

    })

    console.log(new_players)

    this.getAge("hola")


    // this.props.actions.playersSearchFilter(filterObject,this.props.players)
  }

  getAge = dateOfBirth => {

    console.log(dateOfBirth)

  }


  render() {

    const {players} = this.props

    console.log(players)
    
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
        <PlayersList players={players} />

      </div>
      </MuiThemeProvider>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
