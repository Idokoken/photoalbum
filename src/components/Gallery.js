import React, {useState} from 'react'
import {data} from "../components/data"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  
  img{
  	width: 100%;
  	transition: all 350ms ease;
  	cursor: pointer;
  }
  img:hover{
  	filter: opacity(0.8);
  }
  .model{
  	width: 100%;
  	height: 100vh;
  	position: fixed;
  	top: 0;
  	left: 0;
  	display: flex;
  	justify-content: center;
  	align-items: center;
  	background: #000000;
  	transition: opacity 0.4s ease, visibility 0.4s ease transform 0.5s ease-in-out;
  	visibility: hidden;
  	opacity: 0;
  	transform: scale(0);
  	overflow: hidden;
  	z-index: 99;
  }
  
  .model.open{
  	visibility: visible;
  	opacity: 1;
  	transform: scale(1);
  }
  
  .model img{
  	width: auto;
  	max-width: 100%;
  	height: auto;
  	max-height: 100%;
  	display: block;
  	line-height: 0;
  	padding: 20px 0;
  	box-sizing: border-box;
  	margin: 0 auto;
  }
  .model.open svg{
  	position: fixed;
  	top: 10px;
  	right: 10px;
  	width: 2rem;
  	height: 2rem;
  	padding: 5px;
  	background-color: rgba(0, 0, 0, 0.4);
  	color: #ffffff;
  	cursor: pointer;
  }
`


function Gallery() {	
const [model, setModel] = useState(false)
const [tempImgsrc, setTempImgsrc] = useState('')

const getImg = (src) => {
	setTempImgsrc(src)
	setModel(true)
}
	
	const photos = data.map((a, i) =>   <div key={a.id} onClick={() => getImg(a.img)}>
	  <img src={a.img} alt={a.title} />
	</div>)
	
	return (
	 <Wrapper>
	   <div className={model ? "open model" : "model"}>
	     <img src={tempImgsrc} alt="cover"/>
	     <div onClick={() => setModel(false)}><i className="fa fa-close"></i></div>
	   </div>
	   {photos}
	 </Wrapper>
	)
}

export default Gallery