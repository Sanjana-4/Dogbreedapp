import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogs, clearlist } from "../Redux/Action";
import './Dogfinder.css'

class DogListContainer extends Component {
  componentDidMount() {
    // this.props.fetchDogs();
    this.props.clearlist();
    var breedname = this.props.match.params.breed
    if(this.props.match.params.sub){
      var sub = this.props.match.params.sub
      this.props.fetchDogs(true, breedname, sub)
    }
    else{
      this.props.fetchDogs(false, breedname)
    }
  }
  async handleChange(e) {
    // TODO clear state 
    await this.props.clearlist();
    e.preventDefault();
    this.props.history.push({
        pathname: '/',
      })
}
viewLarge(e, i) {
    var path = ''
    var breedname = this.props.match.params.breed
    if(this.props.match.params.sub){
      var sub = this.props.match.params.sub
      path = String(i) + '/' + breedname + '/' + sub
    }
    else{
      path = String(i) + '/' + breedname
    }
    e.preventDefault();
    this.props.history.push({
        pathname: '/large/' + path,
        
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
            {this.props.dogs.map((dog, i) => {
              return <img onClick={(e)=>{this.viewLarge(e, i)}} className="image" key={i} src={dog} alt=""/>;
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

export default connect(mapStateToProps, { fetchDogs, clearlist })(DogListContainer);