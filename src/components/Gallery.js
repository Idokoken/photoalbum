import React, {useState} from 'react'
import {data} from "./data"
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
	   <div className={model ? "open modrl" : "model"}>
	     <img src={tempImgsrc} />
	   </div>
	   {photos}
	 </Wrapper>
	)
}

export default Gallery