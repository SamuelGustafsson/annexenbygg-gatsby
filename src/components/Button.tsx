import * as React from 'react'
import styled from 'react-emotion'

interface Props extends InjectedDispatchProps, InjectedStateProps {}

interface InjectedDispatchProps {
  onClick: () => void
}

interface InjectedStateProps {
  text: string
  bgColor: string
  color: string
  size: number
}

const Button: React.SFC<Props> = ({ onClick, text, bgColor, color, size }) => (
  <StyledButton onClick={onClick} bgColor={bgColor}>
    <Text size={size} color={color}>
      {text}
    </Text>
  </StyledButton>
)

const StyledButton = styled.button<{ bgColor: string }>`
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 82px;
  background-color: ${props => props.bgColor};
`

const Text = styled.span<{ size: number; color: string }>`
  font-family: Roboto;
  font-size: ${props => props.size}px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: ${props => props.color};
`

export { Button, StyledButton }
