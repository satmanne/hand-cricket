import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {
  
  const [cchoice, setCchoice] = useState()
  const [uchoice, setUchoice] = useState(0)
  const [tot, setTotal] = useState(0)
  const [comment,setComment] = useState()
  const [achievment, setAchievment] = useState()

  useEffect(()=> {score()}, [uchoice])
  function score(){
    console.log("insdie score function")
	console.log("total = ", tot)
	console.log("uchoice = ", uchoice)

	setTotal(tot+ uchoice);
	setUchoice(uchoice);
	var h = "Half Century";
	var c = "Century";

	if(tot >= 50 && tot <= 55){
		// document.getElementById('achievement').innerHTML = h;
		setAchievment("Half Century")
	}
	else if(tot >= 100 && tot <= 105){
		// document.getElementById('achievement').innerHTML = c;
		setAchievment("Century")
	}
	else{
		// document.getElementById('achievement').innerHTML = "";
		setAchievment("")
	}
}

function play1(){
  let random = Math.floor(Math.random() * 6)+ 1
  setCchoice(random)
  setUchoice(1)
	if(random === 1){
    setComment("Out!")
		setTotal(0)
	}
	else{
		setComment("A single taken")
		if(uchoice == 1) {
			score()
		}
	}
}

function play2(){
  let random = Math.floor(Math.random() * 6)+ 1
  setCchoice(random)
  setUchoice(2)
	if(random === 2){
    setComment("Out!")
		setTotal(0)
	}
	else{
		setComment("batsman looking for two runs...")
		if(uchoice == 2) {
			score()
		}
		// score();
	}
}

function play3(){
  let random = Math.floor(Math.random() * 6)+ 1
  setCchoice(random)
  setUchoice(3)
	if(random === 3){
    setComment("Out!")
		setTotal(0)
	}
	else{
		setComment("batsmen are quick between the wickets....3 runs taken...")
		if(uchoice == 3) {
			score()
		}		
		// score();
	}
}

function play4(){
  let random = Math.floor(Math.random() * 6)+ 1
  setCchoice(random)
  setUchoice(4)
	if(random === 4){
    setComment("Out!")
		setTotal(0)
	}
	else{
		setComment("ball races to the boundary line..... 4 it is....")
		if(uchoice == 4) {
			score()
		}
		// score();
	}
}

function play5(){
  let random = Math.floor(Math.random() * 6)+ 1
  setUchoice(5)
  setCchoice(random)
	if(random === 5){
    setComment("Out!")
		setTotal(0)
  }
	else{
		setComment("No ball and a boundary...")
		if(uchoice == 5) {
			score()
		}
	    // score();
	}
}

function play6(){
  let random = Math.floor(Math.random() * 6)+ 1
  setCchoice(random)
  setUchoice(6)
	if(random === 6){
    setComment("Out!")
		setTotal(0)
	}
	else{
		setComment("Over the boundary line.... 6 it is")
		if(uchoice == 6) {
			score()
		}
		// score();
	}
}
  return (
    <div className="App">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<div className="container-fluid">
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="header">
				<header><h1>Hand Cricket</h1></header>
        <h1 id="achievement">{achievment}</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="userchoice">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="usercol">
					    <h2>Your Choice:</h2>
						<h1 id="userchoiceshow">{uchoice}</h1>
					</div>
				</div>‸
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="choice">
						<button id="one" onClick={play1}>1</button>
						<button id="two" onClick={play2}>2</button>
						<button id="three" onClick={play3}>3</button>
						<button id="four" onClick={play4}>4</button>
						<button id="five" onClick={play5}>5</button>
						<button id="six" onClick={play6}>6</button>
					</div>
				</div>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="scoreboard">
			    <h1>Score:</h1>
				<h2 id="score">{tot}</h2>
			</div>
			<div className="col-lg-4 col-md-4 col-sm-4 col-xs-4" id="computerchoice">
			    <h2>Computer Choice:</h2>
				<h1 id="computerchoiceshow">{cchoice}</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="commentary">
				<h3 id="comments">{comment}</h3>
			</div>
		</div>
	</div>
    </div>
  );
}


export default App;