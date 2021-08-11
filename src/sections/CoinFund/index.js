import React,{useState} from "react"
//import { Link } from "gatsby"
//import CountdownTimer from "react-component-countdown-timer"

import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { SectionTitle, SectionBackground } from "reusecore/SectionTitle"
import { useDispatch, useSelector } from 'react-redux';
import {
  FaBitcoin,
  FaCcMastercard,
  FaCcVisa,
  FaCcDiscover,
} from "react-icons/fa"
import { BuyFunction } from "../../state/ui";

import CoinFundWrapper from "./coinFund.style"
import Timer from "./Timer";

const CoinFund = () => {
  const [Puramount,setPurAmount] = useState()
  const dispatch = useDispatch()
  const timer = useSelector((state)=>{
    return Number(state.adoptReducer.balance);
  });
  
  const reached = useSelector((state)=>{
    return Number(state.adoptReducer.reached);
  });

  const target = useSelector((state)=>{
    return Number(state.adoptReducer.target);
  });


  
  const settings = {
    count: timer/1000, 
    showTitle: true,
    size: 60,
    labelSize: 14,
    backgroundColor: "transparent",
    color: "#fff",
    dayTitle: "Days",
    hourTitle: "Hours",
    minuteTitle: "Minutes",
    secondTitle: "Seconds",
    id: "countdownwrap"
  }



  const setValue = (e) => {
    e.preventDefault()
    dispatch(BuyFunction({value: Puramount}))
    setPurAmount("")
    };

  return (
    <CoinFundWrapper id="token">
      <Container>
        <Row>
          <Col className="lg-6 md-12 ">
            <Box className="coin-fund-content-left">
              <SectionTitle>
                <SectionBackground>
                  <Heading>
                    Powering Data for the new equity blockchain.
                  </Heading>
                </SectionBackground>
                <Text>
                  The highly the not having with lively. Our up with ran go her
                  it gloomy the back, though however projected not for six with
                  then, trusted as concepts belt.
                </Text>
              </SectionTitle>

              <Box className="btn-wrapper">
              <label> Amount of BNBs <br/>
                <input style={{height:"50px", margin:"0 0 20px 0"}} value={Puramount} type="value"            
                  onChange={({ target }) => {setPurAmount(target.value)}}/></label><br/>
                <button  onClick={setValue} className="btn btn-fill">
                  Buy Token
                </button>
              </Box>
            </Box>
          </Col>
          <Col className="lg-6 md-12 countdown-wrap">
            <Box className="countdown-wrapper">
              <Text> Last moment to grab the token </Text>
               {/* <CountdownTimer {...settings} />  */}
              <Timer time={timer}></Timer>
            </Box>
            <Box className="progressbar-wrapper">
              <Box className="progressbar">
                <Text as="span">${reached}</Text>
              </Box>
              <Text as="span">${target}</Text>
            </Box>

            <Box className="payment-getway">
              <Text as="span">
                {" "}
                <FaBitcoin />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcMastercard />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcVisa />{" "}
              </Text>
              <Text as="span">
                {" "}
                <FaCcDiscover />{" "}
              </Text>
            </Box>
          </Col>
        </Row>
      </Container>
    </CoinFundWrapper>
  )
}

export default CoinFund
