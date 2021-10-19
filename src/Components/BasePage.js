import React,{useEffect}from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {fetchListData} from '../Redux/Action'
import './Dogfinder.css'
import {Image} from 'react-bootstrap'

function DogListContainer({DogList, fetchListData}) {
    useEffect(() =>{
        fetchListData()
    }, [])
  
    const history = useHistory();
    function handleHistory () {
         history.push({
          pathname: '/DogList',
        });
     }
   
    return (
        <div>
        <div>
        <br/>
        <center> <h1>DOG BREED APP</h1> 
        </center>
        </div>
        <br/>
        <div>
        <center>
       <select>
       <option>{DogList[0]}</option>
       <option>{DogList[1]}</option>
       <option>{DogList[2]}</option>
       <option>{DogList[3]}</option>
       <option>{DogList[4]}</option>
       <option>{DogList[5]}</option>
       <option>{DogList[6]}</option>
       </select>
       <br/>
       <br/>
       <button className="button" onClick={(e)=>{handleHistory(e)}}>Get Images</button>
       </center>
        </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        DogList: state.data
    }
}
const mapDispatchToProps = dispatch => {
    return{
        fetchListData:() => dispatch(fetchListData())
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(DogListContainer)