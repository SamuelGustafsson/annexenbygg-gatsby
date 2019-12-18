import * as React from 'react'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { heights, dimensions, colors } from '../styles/variables'
const Logo = require('../images/annexen-logo.svg')

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = () => (
  <StyledHeader>
    <img src={Logo} />
    <FontAwesomeIcon icon={faBars} size="4x" />
  </StyledHeader>
)

export default Header
