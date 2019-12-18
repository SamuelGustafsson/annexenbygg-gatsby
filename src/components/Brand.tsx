import * as React from 'react'
import styled from 'react-emotion'
import { transparentize } from 'polished'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { colors } from '../styles/variables'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconProp
  title: string
  subTitle: string
}

const Brand: React.SFC<Props> = ({ icon, title, subTitle }) => (
  <Wrapper>
    <Icon icon={icon} size="5x" />
    <TextContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </TextContainer>
  </Wrapper>
)

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* color: ${transparentize(0.5, colors.white)}; */
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* color: ${transparentize(0.5, colors.white)}; */
`

const Title = styled.h1`
  font-family: Roboto;
  font-size: 60px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.6px;
  color: ${colors.brand};
  margin: 0;
`
const SubTitle = styled.h1`
  font-family: Roboto;
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${colors.brand};
  margin: 0;
  position: relative;
  top: -12px;
`

const Icon = styled(FontAwesomeIcon)`
  /* width: 82px;
  height: 65px; */
  color: ${colors.brand};
  margin-right: 20px;
`
export default Brand
