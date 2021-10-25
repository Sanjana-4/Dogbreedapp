import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListData } from "../Redux/Action";
import './Dogfinder.css'

class DogListContainer extends Component {
  componentDidMount() {
    this.props.fetchListData();
  }
 handleChange = e => {
    e.preventDefault();
    this.props.history.push({
        pathname: '/DogList',
        
      })
}
  render() {
    return (
      <div>
      <center>
      <button onClick={(e)=>{this.handleChange(e)}}>GET IMAGES</button>
        
          <select >
            {this.props.dogsList.map((dog) => {
              return <option key={dog}>{dog}</option>;
            })}
          </select>
       
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
    dogsList: state.list.dogsList, 
    error: state.list.error, 
    fetchingDogsList: state.list.fetchingDogsList 
  };
};

export default connect(mapStateToProps, { fetchListData })(DogListContainer);