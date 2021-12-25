import React from "react"
import logo from "../assets/NFT.png"
import SearchIcon from "@material-ui/icons/Search"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import "./Header.css"
function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logo} alt="" className="logo" />
      </div>
      <div className="searchBar">
        <div className="searchIconContainer">
          <div className="searchIcon">
            <SearchIcon />
          </div>
        </div>
        <input className="searchInput" placeholder="Collection Item or User" />
      </div>
      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <Brightness4Icon  className=""/>
        </div>
      </div>

      <div className="loginButton">
          GET IN
      </div>
    </div>
  )
}

export default Header
