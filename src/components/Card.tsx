import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../styles/variables'
import { Button } from './Button'
import * as changeCase from 'change-case'

interface Props {
  imageUrL: string
  title: string
  content: string
}

const Card: React.SFC<Props> = ({ imageUrL, title, content }) => (
  <Container>
    <Image imageUrl={imageUrL} />
    <Title>{changeCase.upperCase(title)}</Title>
    <Hr />
    <Content>{content}</Content>
    <Button text="SE MER" onClick={() => console.log('SE MER')} bgColor={colors.accent.color} color={colors.white} size={27} />
  </Container>
)

const Container = styled.div`
  position: relative;
  top: -86px;
  background-color: ${colors.white};
  padding: 29px 23px 39px 23px;
  width: 100%;
  margin-bottom: 30px;
`

const Image = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});
  width: 100%;
  height: 365px;
  background-repeat: no-repeat;
  background-size: cover;
`

const Title = styled.h3`
  font-family: Roboto;
  font-size: 35px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: ${colors.black};
  margin-top: 30px;
  text-align: center;
`

const Hr = styled.hr`
  margin-top: 30px;
  width: 160px;
  border: solid 1px ${colors.accent.color};
  margin-left: auto;
  margin-right: auto;
`

const Content = styled.p`
  margin-top: 30px;
  margin-bottom: 50px;
  font-family: Roboto;
  font-size: 27px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.3px;
  color: ${colors.gray.dark};
`
export { Card }
