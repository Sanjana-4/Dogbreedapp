import React,{useEffect,useState}from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {fetchListImage} from '../Redux/Action'
import {Carousel} from 'react-bootstrap'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './Dogfinder.css'

function ViewLarge({DogList, fetchListData}) {
    useEffect(() =>{
        fetchListImage()
    }, [])
  
    const history = useHistory();
    function handleHistory () {
         history.push({
          pathname: '/DogList',
        });
     }
     

    return (
        <div className="background">
        <br />
        <center> <h1>Breed : Hound<br/>Sub-Breed : Afghan</h1> 
        <br />
        <button className="button" onClick={(e)=>{handleHistory(e)}}>Back</button></center>
        
        <center>
        <Carousel>
             <Carousel.Item><img className="l-image" src={DogList[0]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[2]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[3]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[4]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[5]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[6]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[7]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[8]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[9]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[10]} alt="First slide"/></Carousel.Item>
             <Carousel.Item><img className="l-image" src={DogList[11]} alt="First slide"/></Carousel.Item>
  
        </Carousel>
</center>
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
export default connect (mapStateToProps,mapDispatchToProps)(ViewLarge)