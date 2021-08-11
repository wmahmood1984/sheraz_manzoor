import React from "react"
import { Link } from "gatsby"

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import Subscribe from "sections/Subscribe"
import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"
import { List, ListItem } from "reusecore/List"

import cryptikFooterLogo from "assets/images/logo-white.png"
import data from "assets/data/footer"
import FooterWrapper from "./footer.style"

const Footer = () => {
  return (
    <FooterWrapper>
      <Box className="footer-content-wrapper">
        <Subscribe />
        <Container>
          <Row>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets company-desc">
                <img src={cryptikFooterLogo} alt="cryptik footer logo" />
                <Text>
                  Attention in when in just something bread not hundred well,
                  muff value emerge on the known officers.
                </Text>

                <Box className="contact-info">
                  <Link to="#">
                    {" "}
                    <FaPhoneAlt /> contact@cryptik.com{" "}
                  </Link>
                  <Link to="#">
                    {" "}
                    <FaEnvelope /> +88 12345 697858{" "}
                  </Link>
                </Box>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">Service</Heading>
                <List>
                  <ListItem>
                    <Link to="#">Web Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Web Development</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">UXUI Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Graphics Design</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Software development</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Content</Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets">
                <Heading as="h2">About Us</Heading>
                <List>
                  <ListItem>
                    <Link to="#">About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Work Portfolio</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Team</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Plan & Pricing</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Content</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Company News</Link>
                  </ListItem>
                </List>
              </Box>
            </Col>
            <Col className="lg-3 sm-6">
              <Box className="footer-widgets address">
                <Heading as="h2">Our Address</Heading>
                <Text>
                  1370 Roosevelt Street, Little York City, New Jersey 08834
                </Text>
              </Box>
            </Col>
          </Row>
          <Row>
            <Col className="xs-12">
              <Box className="footer-social-links">
                {data.links.map((item, index) => (
                  <Link to={item.url} key={index}>
                    {item.icon}
                  </Link>
                ))}
              </Box>

              <Box className="copyright-text">
                <Text>&copy; Cryptik | All right rserved 2020</Text>
                <Text as="span">
                  Designed By <Link to="#">Devscorn</Link>
                </Text>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </FooterWrapper>
  )
}

export default Footer;
