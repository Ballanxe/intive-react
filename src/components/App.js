import React, { Component } from 'react';
import '../App.css';
import agent from '../agent';
import { connect } from 'react-redux'
import { playersLoadingSuccess } from '../actions/players'

const Promise = global.Promise;

const mapStateToProps = state => ({
  players: state.playesrSuccessPayload,
  loading: state.playersAreLoading,
  hasErroed: state.playersHasErroed,
});


const mapDispatchToProps = dispatch => ({

  onLoad: (payload) =>
    dispatch(playersLoadingSuccess(payload))

});

class App extends Component {

  componentDidMount(){
    this.props.onLoad(agent.Players.all());

  }


  render() {

    const {players} = this.props
    console.dir(players)
    return (
      <div className="container">

        <h1>Hola Mundo</h1>
{/*        {
          players.map(player => {
            return (
              <p>{player}</p>
            )
          })
        }
*/}

      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
