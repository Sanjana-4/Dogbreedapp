import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogs } from "../Redux/Action";
import './Dogfinder.css'

class DogListContainer extends Component {
  componentDidMount() {
    this.props.fetchDogs();
  }
  handleChange = e => {
    e.preventDefault();
    this.props.history.push({
        pathname: '/',
        
      })
}
viewLarge = e => {
    e.preventDefault();
    this.props.history.push({
        pathname: '/large',
        
      })
}
  render() {
    return (
      <div>
      <button onClick={(e)=>{this.handleChange(e)}}>BACK</button>
        {this.props.fetchingDogs ? (
          <h3>LOADING...</h3>
        ) : (
          <div >
            {this.props.dogs.map((dog) => {
              return <img onClick={(e)=>{this.viewLarge(e)}} className="image" key={dog} src={dog} alt=""/>;
            })}
          </div>
        )}
        {this.props.error !== "" ? <h4>{this.props.error}</h4> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // our state machine is working for us based on fetching, success, and error. lets make sure our component knows about the state machine
    dogs: state.dogs.dogs, // dogs for when we have the data!
    error: state.dogs.error, // error for when we mispell something!
    fetchingDogs: state.dogs.fetchingDogs // pending state, the fetching spinner or loading message etc. for when we're fetching!
  };
};

export default connect(mapStateToProps, { fetchDogs })(DogListContainer);
