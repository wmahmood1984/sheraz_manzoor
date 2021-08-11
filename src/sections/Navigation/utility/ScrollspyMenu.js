import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { Link as OnepageLink } from "react-scroll"
import { useDispatch, useSelector } from 'react-redux';
import { initWeb3,ClickFunction,toggle } from "../../../state/ui";
import Web3 from 'web3'

import {List, ListItem} from 'reusecore/List'

const ScrollspyMenu = ({ menuItems, ...props }) => {

  const [selectedAddress,setSelectedAddress] = useState()
  const [toggle2,setToggle] = useState()
  const dispatch = useDispatch()
  const toggle = useSelector((state)=>{
    return state.adoptReducer.toggle;
  });

  const address = useSelector((state)=>{
    return state.adoptReducer.address;
  });

  const clicked = useSelector((state)=>{
    return state.adoptReducer.clicked;
  });




  useEffect(() => {
    setSelectedAddress(window.ethereum.selectedAddress)
    dispatch(initWeb3())
    var interval = setInterval(() => {
      setToggle(!toggle2)
    }, 5000);



return ()=>{clearInterval(interval)}

    return ()=>{}
  }, [toggle,toggle2])


  const addAllClasses = [""]
  if (props.className) {
    addAllClasses.push(props.className)
  }



  async function handleConnect(e){
    e.preventDefault()
    dispatch(ClickFunction())
    window.ethereum.request({
      method: 'wallet_requestPermissions',
      params: [{
        eth_accounts: {},
      }]
    }); 
   }
  

  return (
    <List className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <ListItem
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
          <OnepageLink
            activeClass="nav-active"
            to={menu.path}
            spy={true}
            smooth={true}
            offset={parseInt(menu.offset)}
            duration={700}
          >
            {menu.name}
          </OnepageLink>
          {menu.subItems !== undefined && (
            <List key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                <ListItem key={i}>
                  <Link to={subItem.path}>{subItem.name}</Link>
                </ListItem>
              ))}
            </List>
          )}
        </ListItem>
      ))}
      <ListItem>
        <button className="nav__button" onClick={handleConnect}>{clicked && address? `${address.slice(0,3)}...${address.slice(38,42)}` :"Get in Touch"}</button>
      </ListItem>
    </List>
  )
}

export default ScrollspyMenu
