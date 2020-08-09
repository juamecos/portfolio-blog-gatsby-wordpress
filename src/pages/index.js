import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const {
    heading,
    homeCallToAction,
    subheading,
    heroImage,
  } = data.allWpPage.edges[0].node.homePage.banner

  return (
    <Layout>
      <SEO title="Home" />
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <AniLink fade to="/page-2">
        {homeCallToAction}
      </AniLink>
      <div>
        <Img
          style={{ maxWidth: 700 }}
          fluid={heroImage.localFile.childImageSharp.fluid}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
    allWpPage(filter: { title: { eq: "Home" } }) {
      edges {
        node {
          homePage {
            banner {
              heading
              homeCallToAction
              subheading
              heroImage {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 700) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
