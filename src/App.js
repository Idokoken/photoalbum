import styled from "styled-components"
import Gallery from "./components/Gallery"

const Wrapper = styled.div`
margin: 0;
padding: 0;

h1, h2{
	text-align: center;
}
`

function App() {
  return (
    <Wrapper>
      <h1>Image Gallery</h1>
      <h2>Please Subscribe code with Fphotos</h2>
      <Gallery />
    </Wrapper>
  );
}

export default App;