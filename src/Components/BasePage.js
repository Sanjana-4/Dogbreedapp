import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchListData, fetchListAll, clearlist } from "../Redux/Action";
import './Dogfinder.css'
import './BasePage.css'

class DogListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 'select', subBreads: [], SelectedSubBreed: 'select'};
    
        this.onSelect = this.onSelect.bind(this);
        this.onSelectSubBreed = this.onSelectSubBreed.bind(this);
      }
  componentDidMount() {
    this.props.fetchListAll();
    this.props.clearlist();
  }

async onSelect(event) {
    this.setState({value: event.target.value});
    var array = [];
    if(this.props.breedList[event.target.value] < 1){
      console.log("No sub Bread")
    }
    else{
      this.props.breedList[event.target.value].forEach(element => {
        console.log(element)
        array.push(element);
      });
    }
    await this.setState({ subBreads: [...this.state.subBreads, ...array ] })
    console.log(typeof(this.state.subBreads))
    console.log(this.state); 
  }
  onSelectSubBreed(event) {
    this.setState({SelectedSubBreed: event.target.value})
  }
 handleChange = e => {
   var path = this.state.value + '/' + this.state.SelectedSubBreed
   if(this.state.SelectedSubBreed === 'select'){
    path = this.state.value
   }
    e.preventDefault();
    this.props.history.push({
        pathname: '/DogList/' + path,
        
  })
}
  render() {
    return (
      <div className="dog">
      <center>
          <h2>DOG BREED APP 🐕 </h2>
     
          <select value={this.state.value} className="select" onChange={this.onSelect}>
              <option hidden value="select">Select breed</option>
            {this.props.allist.map((dog, i) => {
              return <option key={i}>{dog}</option>;
            })}
          </select>
          <br/>
          {this.state.subBreads.length > 0 && (
            <><select value={this.state.SelectedSubBreed} className="select" onChange={this.onSelectSubBreed}>
              <option hidden value="select">Select SubBreed</option>
              {this.state.subBreads.map((dog, i) => {
                return <option key={i}>{dog}</option>;
              })}
            </select><br /></>
          )
          }
          
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
    allist: state.list.allist,
    breedList: state.list.breedList,
  };
};

export default connect(mapStateToProps, { fetchListData, fetchListAll, clearlist })(DogListContainer);