import React from 'react';
import styled from '@emotion/styled'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const StyledBox = styled(Box)`
margin: 20px 0;
`
const StyledContainer = styled(Container)`
background-color: #F5F5F5;
height: auto;
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
padding: 10px 0;
@media screen and (max-width: 819px) {
justify-content: start;

   }
`
const Card = styled.div`
width: 200px;
height: 150px;
margin: 20px;
@media screen and (max-width: 560px) {
  width: 100%;
  height: 15rem;
   }
`
const Img = styled.img`
width: 100%;
height: 100%;
`
const StyledP = styled.p`
margin-top: 0;
text-align: start;
color:gray;
align-items: start;
font-size: 0.7rem;
`

const ProductList = () => {
  return (
    <StyledBox >
     <StyledContainer>
      <Card>
        <Img src='../images/img1.avif' />
       <StyledP>Logos</StyledP>
      </Card>
      <Card>
      <Img src='../images/img2.avif' />
       <StyledP>Flyers</StyledP>
      </Card>
      <Card>
      <Img src='../images/img3.avif' />
       <StyledP>Email</StyledP>
      </Card>
      <Card>
      <Img src='../images/img4.avif' />
       <StyledP>Cartel or poster</StyledP>
      </Card>
      <Card>
      <Img src='../images/img5.avif' />
       <StyledP>Book cover</StyledP>
      </Card>
      <Card>
      <Img src='../images/img6.avif' />
       <StyledP>Infographics</StyledP>
      </Card>
      <Card>
      <Img src='../images/img7.avif' />
       <StyledP>Menu</StyledP>
      </Card>
      <Card>
      <Img src='../images/img8.avif' />
       <StyledP>Packing</StyledP>
      </Card>
     </StyledContainer>
    </StyledBox>
  )
}

export default ProductList