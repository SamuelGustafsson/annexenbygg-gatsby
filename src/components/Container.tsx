import * as React from 'react'
import styled from 'react-emotion'

import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'

interface ContainerProps {
  className?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  max-width: ${getEmSize(widths.lg)}em;
`

export default Container
