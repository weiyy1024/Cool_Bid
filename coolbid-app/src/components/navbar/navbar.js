/* eslint-disable space-before-function-paren */
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
// logo
import logo from '../../coolbid.svg'
// icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import SearchBar1 from 'material-ui-search-bar'
// import Tooltip from '@material-ui/core/Tooltip'
// country
import DialogSelect from './components/Country'
// bidding
import Bidding from './components/Bidding'
// cart
import ShoppingCart from './components/Cart'
// notification
import Note from './components/Note'
// dorp down
import DropDown from './components/Dropdown'
import AuctionDropDown from './components/AuctionDropDown'
import MemberDropDown from './components/member'
// Theme switch
const theme = {
  light: {
    backgroundColor: 'rgb(255, 255, 255)',
    textColor: 'rgb(17, 17, 49)',
    searchBorder: 'solid rgba(28, 28, 51, 0.548) .3rem',
    ball: '0.5rem',
    bg: '#eeeeee',
    toggle: 'rgb(17, 17, 49)',
    icon: 'goldenrod'
  },
  dark: {
    backgroundColor: '#000',
    textColor: 'aliceblue',
    searchBorder: 'none',
    ball: '3.5rem',
    bg: '#313235',
    toggle: '#ffc400',
    icon: '#c27e00'
  }
}
const ToggleItem = styled.div`
  position: fixed;
  top: 0;
  height: 30px;
  width: 100%;
  background-color: #222327;
  z-index: 99;
  img {
    position: relative;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 50%;
    cursor: pointer;
  }
`
const Toggle = styled.div`
  background: #ffc400;
  color: #c27e00;
  border-radius: 50px;
  padding: 1px 3px;
  position: absolute;
  cursor: pointer;
  width: 5rem;
  height: 2rem;
  top: 4px;
  right: 60px;
  display: inline-block;
`
const MoonIcon = styled(Brightness2Icon)`
  position: absolute;
  left: 0.5rem;
  top: 0.4rem;
`
const SunnyIcon = styled(WbSunnyIcon)`
  position: absolute;
  right: 0.5rem;
  top: 0.4rem;
`
const Ball = styled.div`
  height: 1.8rem;
  width: 1.8rem;
  position: absolute;
  background-color: #fafafa;
  border-radius: 50%;
  top: 0.2rem;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 300ms linear;
  transition: all 300ms linear;
  left: ${({ theme }) => theme.ball};
`
// Theme switch--End

// Navbar
const Navbar = styled.div`
  box-shadow: 0 1rem 1rem -1rem rgba(17, 17, 49, 0.171);
  background-color: ${({ theme }) => {
    return theme.backgroundColor
  }};
  top: 30px;
  width: 100%;
  height: 90px;
  display: flex;
  position: fixed;
`

const LogoBox = styled(NavLink)`
  background: url(${logo}) no-repeat center;
  font-size: 4rem;
  width: 200px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`
const NavLeft = styled.div`
  margin: 15px 0 60px 30px;
  display: flex;
`
const Title = styled(NavLink)`
  font-size: 2rem;
  color: ${({ theme }) => theme.textColor};
  padding: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #ffae19;
    dl {
      visibility: visible;
    }
  }
`
const Member = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    dl {
      visibility: visible;
    }
  }
`

// SearchBar
const SearchDiv = styled.div`
  margin: 22px auto;
  width: 40rem;
  transform: translateX(-20rem);
`
const SearchBar = styled(SearchBar1)`
  width: 50rem;
  height: 3rem;
  background-color: white;
  border: ${({ theme }) => theme.searchBorder};
  input {
    font-size: 2rem;
  }
`
// SearchBar--End

const ThreeIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 0.5rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
`
// Navbar--End

export default function NavBar() {
  const [currentTheme, setCurrentTheme] = useState('light')
  const userinfo = JSON.parse(window.sessionStorage.getItem('userinfo'))
  // Dark Mode function
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      setCurrentTheme('light')
      document.body.style.backgroundColor = theme.light.bg
    } else {
      setCurrentTheme('dark')
      document.body.style.backgroundColor = theme.dark.bg
    }
  }

  // search data
  const [search, setSearch] = useState('')
  const handleSearch = () => {
    window.location.href = 'http://localhost:3000/Ahomepage/search/' + search
  }

  const iconStye = {
    fontSize: '3.5rem',
    paddingBottom: '.5rem',
    paddingRight: '2rem'
  }

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ToggleItem>
        <DialogSelect />
        <Toggle onClick={toggleTheme}>
          <SunnyIcon />
          <MoonIcon />
          <Ball />
        </Toggle>
      </ToggleItem>
      <Navbar style={{ zIndex: '1000' }}>
        <LogoBox to="/" className="logo" />
        <NavLeft>
          <Title className="Ahomepage" to="/Ahomepage">
            競標區
            <DropDown />
          </Title>
          <Title className="Chomepage" to="/Chomepage">
            拍賣會
            <AuctionDropDown />
          </Title>
        </NavLeft>
        <SearchDiv>
          <SearchBar
            value={search}
            onChange={(e) => {
              setSearch(e)
            }}
            onRequestSearch={() => {
              if (search) handleSearch()
            }}
            style={{ borderRadius: '30px' }}
          ></SearchBar>
        </SearchDiv>
        <ThreeIcons>
          <Note />
          <Member className="Chomepage" to="/member/signin">
            <AccountCircleIcon style={iconStye} />
            <MemberDropDown />
          </Member>
          <Bidding userinfo={userinfo} />
          <ShoppingCart />
        </ThreeIcons>
      </Navbar>
    </ThemeProvider>
  )
}
