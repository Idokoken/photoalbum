import React from "react"
import styled from "styled-components"
import Gallery from '../components/Gallery'

const Wrapper = styled.div`
margin: 0;
padding: 0;
min-hieght: 50vh;
`

function Home() {
	
	return (
	<Wrapper>
	   <h1>Image Gallery</h1>
    <h2>Please Subscribe with IfyPhotos</h2>
    <Gallery />
	</Wrapper>
	)
}

export default Home
