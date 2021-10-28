import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListData, fetchListAll } from "../Redux/Action";
import './Dogfinder.css'
import './BasePage.css'

class DogListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'select'};
    
        this.onSelect = this.onSelect.bind(this);
      }
  componentDidMount() {
    this.props.fetchListAll();
    //this.props.fetchListData(this.state.value);
  }
onSelect(event) {
    this.setState({value: event.target.value});
  }
 handleChange = e => {
    e.preventDefault();
    this.props.history.push({
        pathname: '/DogList',
        
      })
}
  render() {
    return (
      <div className="dog">
      <center>
          <h2>DOG BREED APP 🐕 </h2>
     
          <select value={this.state.value} className="select" onChange={this.onSelect}>
              <option hidden value="select">Select breed</option>
            {this.props.allist.map((dog) => {
              return <option key={dog}>{dog}</option>;
            })}
          </select>
          <br/>
          <button className="button" onClick={(e)=>{this.handleChange(e)}}>GET IMAGES</button>
        
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    
    dogsList: state.list.dogsList, 
    error: state.list.error, 
    fetchingDogsList: state.list.fetchingDogsList,
    allist: state.list.allist
  };
};

export default connect(mapStateToProps, { fetchListData, fetchListAll })(DogListContainer);