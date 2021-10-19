import React,{useEffect}from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {fetchListImage} from '../Redux/Action'
import './Dogfinder.css'

function DogListContainer({DogList, fetchListImage}) {
    useEffect(() =>{
        fetchListImage()
    }, [])
  
    const history = useHistory();
    function handleHistory () {
         history.push({
          pathname: '/large',
        });
     }
     function BasePage () {
        history.push({
         pathname: '/',
       });
    }
    
    return (
        <div>
        <div>
        <center> <h1>Breed : Hound<br/>Sub-Breed : Afghan</h1> 
        <button className="button" onClick={(e)=>{handleHistory(e)}}>View Full Screen Image</button>
        <br/>
        <button className="button" onClick={(e)=>{BasePage(e)}}>Select Another Breed</button></center>
        </div>
        <div>
        <img src={DogList[0]} className="image" alt="logo" />
        <img src={DogList[1]} className="image" alt="logo" />
        <img src={DogList[2]} className="image" alt="logo" />
        <img src={DogList[3]} className="image" alt="logo" />
        <img src={DogList[4]} className="image" alt="logo" />
        <img src={DogList[5]} className="image" alt="logo" />
        <img src={DogList[6]} className="image" alt="logo" />
        <img src={DogList[7]} className="image" alt="logo" />
        <img src={DogList[8]} className="image" alt="logo" />
        <img src={DogList[9]} className="image" alt="logo" />
        <img src={DogList[10]} className="image" alt="logo"/>
        <img src={DogList[11]} className="image" alt="logo"/>
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
        fetchListImage:() => dispatch(fetchListImage())
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(DogListContainer)