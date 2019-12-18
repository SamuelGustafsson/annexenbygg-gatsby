import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../styles/variables'

interface Props {
  date: string
  image: string
  text: string
}

const News: React.SFC<Props> = ({ date, image, text }) => (
  <Container>
    <Date>
      <span>{date}</span>
    </Date>
    <Image src={image} />
    <TextContainer>
      <Text>{text}</Text>
    </TextContainer>
  </Container>
)

const Text = styled.p`
  font-family: Roboto;
  font-size: 23px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  color: ${colors.black};
`

const TextContainer = styled.div`
  width: 100%;
  background-color: ${colors.white};
  padding: 40px 40px;
`

const Image = styled.div<{ src: string }>`
  height: 441.2px;
  max-width: 100%;
  background-image: url("${props => props.src}");
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 2px solid ${colors.accent.color};
`

const Date = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 25px;
  left: -15px;
  width: 180.7px;
  height: 50px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: ${colors.white};
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
export { News }
