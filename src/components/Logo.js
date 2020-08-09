import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Logo = () => {
  const logoData = useStaticQuery(graphql`
    query LogoQuery {
      wpMediaItem(id: { eq: "cG9zdDoyMDM=" }) {
        localFile {
          childImageSharp {
            fluid(maxHeight: 120) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
    }
  `)
  const logoFluid = logoData.wpMediaItem.localFile.childImageSharp.fluid
  const logoAlt = logoData.wpMediaItem.title
  console.log(logoData)

  return (
    <AniLink fade to="/" alt="Link to home page and Logo">
      <Img
        fluid={logoFluid}
        alt={logoAlt}
        style={{ maxWidth: 40 }}
        className="logo"
      />
    </AniLink>
  )
}

export default Logo
