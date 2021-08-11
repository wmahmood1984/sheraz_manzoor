import React from "react"
import { Link } from "gatsby"

import { SectionTitle } from "reusecore/SectionTitle"
import { Container, Row, Col } from "reusecore/Layout"
import Box from "reusecore/Box"
import Heading from "reusecore/Heading"
import Text from "reusecore/Text"

import data from "assets/data/stack"
import StackSectionWrapper from "./stack.style"

const Stack = () => {
  return (
    <StackSectionWrapper>
      <Container>
        <Row>
          <Col className="offset-lg-3 offset-md-1 lg-6 md-10  sm-12">
            <SectionTitle>
              <Heading> Technology we use</Heading>
              <Text>
                Attention in when in just something bread not hundred well, muff
                value emerge on the known officers.
              </Text>
            </SectionTitle>
          </Col>
        </Row>
        <Row>
          <Col className="md-8 offset-md-2 xs-12">
            <Box className="language-image">
              {data.stack.map((item, index) => (
                <Link to={item.url} key={index}>
                  <img src={item.imageSrc} alt={item.name} />
                </Link>
              ))}
            </Box>
          </Col>
        </Row>
      </Container>
    </StackSectionWrapper>
  )
}

export default Stack
