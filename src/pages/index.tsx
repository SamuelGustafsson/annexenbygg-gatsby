import * as React from 'react'

import Page from '../components/Page'
import IndexLayout from '../layouts'
import { Jumbotron } from '../components/Jumobtron'
import { Button } from '../components/Button'
import styled from 'react-emotion'
import { Card } from '../components/Card'
import { colors, fonts } from '../styles/variables'

import { StaticQuery, graphql } from 'gatsby'
import { News } from '../components/News'

interface HomepageProject {
  title: string
  image: string
  text: string
}

const IndexPage = () => {
  return (
    <IndexLayout>
      <Jumbotron
        bgImage="https://res.cloudinary.com/annexenbygg/image/upload/v1542058384/cement-truck.jpg"
        text="Vi utmanar oss själva för att skapa en bättre morgondag med hållbara lösningar av högsta klass. Vi vill driva utvecklingen framåt, lyssna,dela idéer och samarbeta."
      >
        <Button
          text="Kontakta oss"
          onClick={() => console.log('NU TRYCKTE VI PÅ KONTAKTA OSS')}
          bgColor={colors.white}
          color={colors.black}
          size={40}
        />
      </Jumbotron>
      <Page>
        <ProjectTypesContainer>
          <StaticQuery
            query={query}
            render={data =>
              data.site.siteMetadata.homepage.projects.map((project: HomepageProject, index: number) => (
                <Card key={index} imageUrL={project.image} title={project.title} content={project.text} />
              ))
            }
          />
        </ProjectTypesContainer>
        <NewsSection>
          <NewsHeader>
            <Hr />
            <NewsTitle>NYHETER</NewsTitle>
            <Hr />
          </NewsHeader>
          <NewsContainer>
            <News
              date={'2018-09-09'}
              image={'https://res.cloudinary.com/annexenbygg/image/upload/v1542571324/annexen-bygg/bil.jpg'}
              text="Just nu jobbar vi i Brisund med utbyggnad och ombyggnad av villa + Bygger 5 nya lägenheter i Garda på sydöstra Gotland + lägenhet i Visby innerstad"
            />
            <News
              date={'2018-09-09'}
              image={'https://res.cloudinary.com/annexenbygg/image/upload/v1542571324/annexen-bygg/bil.jpg'}
              text="Just nu jobbar vi i Brisund med utbyggnad och ombyggnad av villa + Bygger 5 nya lägenheter i Garda på sydöstra Gotland + lägenhet i Visby innerstad"
            />
          </NewsContainer>
        </NewsSection>
      </Page>
    </IndexLayout>
  )
}

const NewsHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  margin-bottom: 20px;
`
const NewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  column-gap: 50px;
`
const NewsSection = styled.section``

const NewsTitle = styled.h2`
  text-align: center;
  font-family: ${fonts.sansSerif};
  font-size: 40px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.4px;
  color: ${colors.black};
  margin: 0 20px;
`

const Hr = styled.hr`
  width: 100%;
  border: solid 3px ${colors.black};
`

const ProjectTypesContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(443px, 1fr));
  grid-column-gap: 2%;
  justify-items: center;
`

export const query = graphql`
  {
    site {
      siteMetadata {
        homepage {
          projects {
            title
            image
            text
          }
        }
      }
    }
  }
`

export default IndexPage
