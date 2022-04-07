import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
        <Menu> 
          <a href="#">Model S</a>
          <a href="#">Model 3</a>
          <a href="#">Model X</a>
          <a href="#">Model X</a>
        </Menu>
        <RightMenu>
          <a href="#" >Shop</a>
          <a href="#" >Tesla Account</a>
          <CustomMenu />

        </RightMenu>
    </Container>
  )
}

export default Header


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0; //making the header full width

`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media(max-width: 768){
    display: none;
  }
`
 
const RightMenu = styled.div`
  display:felx;
  align-items:center;
a{
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px

}

`

const CustomMenu =styled(MenuIcon)`
  cursor : pointer;


`