import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../styles/variables'

interface Props {
  bgImage: string
  text: string
}

const Jumbotron: React.SFC<Props> = ({ bgImage, text, children }) => (
  <Wrapper imageURL={bgImage}>
    <Content>
      <Text>{text}</Text>
      {children}
    </Content>
  </Wrapper>
)

const Wrapper = styled.section<{ imageURL: string }>`
  background-image: url(${props => props.imageURL});
  width: 100%;
  height: 947px;
  background-color: rgba(47, 180, 158, 0.2);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 72px;
  padding-left: 44px;
  padding-right: 44px;
  padding-bottom: 31px;
  width: 681px;
  height: 533px;
  background-color: rgba(47, 180, 158, 0.7);
  position: relative;
  top: 138px;
  left: 143px;
`

const Text = styled.p`
  font-family: Roboto;
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: ${colors.white};
`

export { Jumbotron }
