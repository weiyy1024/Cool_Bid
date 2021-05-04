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
import Tooltip from '@material-ui/core/Tooltip'
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
    backgroundColor: '#123',
    textColor: 'aliceblue',
    searchBorder: 'none',
    ball: '3.5rem',
    bg: '#1e1f26',
    toggle: '#ffc400',
    icon: '#c27e00;'
  }
}
const ToggleItem = styled.div`
  position: absolute;
  padding-top: 1rem;
  top: 0;
  width: 100%;
  position: fixed;
  z-index: 99;
  background-color: ${({ theme }) => theme.bg};
  img {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 50%;
    top: 1rem;
    right: 8rem;
    position: fixed;
    cursor: pointer;
  }
`
const Toggle = styled.div`
  background: ${({ theme }) => theme.toggle};
  color: ${({ theme }) => theme.icon};
  border-radius: 50px;
  padding: 1px 5px;
  position: relative;
  cursor: pointer;
  margin-bottom: 2rem;
  width: 5rem;
  height: 2.5rem;
  display: inline-block;
  float: right;
  right: 1rem;
`
const MoonIcon = styled(Brightness2Icon)`
  position: absolute;
  left: 0.5rem;
  top: 0.6rem;
`
const SunnyIcon = styled(WbSunnyIcon)`
  position: absolute;
  right: 0.5rem;
  top: 0.6rem;
`
const Ball = styled.div`
  height: 2rem;
  width: 2rem;
  position: absolute;
  background-color: #fafafa;
  border-radius: 50%;
  top: 0.3rem;
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
  top: 4.5rem;
  width: 100%;
  height: 12rem;
  display: flex;
  position: fixed;
`

const LogoBox = styled(NavLink)`
  background: url(${logo}) no-repeat center;
  font-size: 4rem;
  width:200px;
  color: ${({ theme }) => theme.textColor};
  text-decoration: none;
`
const NavLeft = styled.div`
  margin: 6rem 0rem 6rem 3rem;
  display: flex;
`
const Title = styled(NavLink)`
  font-size: 2.5rem;
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

// SearchBar
const SearchDiv = styled.div`
  margin: 5rem auto;
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
  bottom: 0.5rem;
  right: 0.5rem;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
`
// Navbar--End

export default function NavBar() {
  const [currentTheme, setCurrentTheme] = useState('dark')

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
    // window.location.href = 'http://localhost:3000/Ahomepage/search?keyword=全新'
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
        &nbsp;&nbsp;
        <NavLeft>
          <Title className="Ahomepage" to="/Ahomepage">
            競標區
            <DropDown />
          </Title>
          &nbsp;&nbsp;
          <Title className="Chomepage" to="/Chomepage">
            拍賣會
            <AuctionDropDown />
          </Title>
          &nbsp;&nbsp;
        </NavLeft>
        <SearchDiv>
          <SearchBar
            value={search}
            onChange={(e) => {
              setSearch(e)
            }}
            onRequestSearch={handleSearch}
          ></SearchBar>
        </SearchDiv>
        <ThreeIcons>
          <Note />
          <Tooltip title="Account" arrow>
            <AccountCircleIcon style={iconStye} />
          </Tooltip>
          <Bidding />
          <ShoppingCart />
        </ThreeIcons>
      </Navbar>
    </ThemeProvider>
  )
}
