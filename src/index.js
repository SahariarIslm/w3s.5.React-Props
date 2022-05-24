import React from 'react';
import ReactDOM from 'react-dom/client';

// passing string
function Car(props){
    return <h2>It's a {props.brnad}</h2>
}
function Garage(){
    return(
        <>
            <h1>What's in my garage?</h1>
            <Car brnad="Ford"/>
        </>
    )
}

// passing variables
function Car2(props){
    return <h2>It's a {props.brand}</h2>
}
function Garage2(){
    const carName = "Ford";
    return(
        <>
            <h1>What's in my garage?</h1>
            <Car2 brand={carName} />
        </>
    );
}

// passing object

function Car3(props){
    return <h3>It's a {props.brand.model}</h3>
}

function Garage3(){
    const carInfo = {name:'Ford',model:'Mustang'};
    return(
        <>
            <h1>What's in my garage?</h1>
            <Car3 brand={carInfo}/>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Garage3/>);