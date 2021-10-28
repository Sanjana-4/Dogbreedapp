import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDogs, clearlist } from "../Redux/Action";
import './Dogfinder.css'
import {Carousel} from 'react-bootstrap'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
class ViewLarge extends Component {
  componentDidMount() {
    //this.props.fetchDogs();
  }
  handleChange = e => {
    this.props.clearlist();
    var path = ''
    var breedname = this.props.match.params.breed
    if(this.props.match.params.sub){
      var sub = this.props.match.params.sub
      path = breedname + '/' + sub
    }
    else{
      path = breedname
    }
    e.preventDefault();
    this.props.history.push({
        pathname: '/DogList/' + path,
        
      })
}
  render() {
    return (
      <div className="background">
        
          <center>
          <button onClick={(e)=>{this.handleChange(e)}}>BACK</button>
          <Carousel activeIndex={Number(this.props.match.params.i)}>
            {this.props.dogs.map((dog, i) => {
              return <Carousel.Item key={i}><img className="l-image" key={i} src={dog} alt=""/>;</Carousel.Item>
            })}
            </Carousel>
          </center>
        
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

export default connect(mapStateToProps, { fetchDogs, clearlist })(ViewLarge);