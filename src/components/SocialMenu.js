import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GrFacebookOption, GrTwitter, GrGithub } from "react-icons/gr"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query SocialMenuQuery {
      allWpMenu(filter: { name: { eq: "Social Menu" } }) {
        edges {
          node {
            menuItems {
              nodes {
                path
                label
              }
            }
          }
        }
      }
    }
  `)

  const menuItems = data.allWpMenu.edges[0].node.menuItems.nodes
  const menuIcons = [<GrFacebookOption />, <GrTwitter />, <GrGithub />]

  return (
    <ul className="social-menu">
      {menuItems.map((item, index) => {
        return (
          <li className="social-menu__item" key={index}>
            <a
              href={item.path}
              className="social-menu__link"
              target="_blank"
              title={`Contact Juan at ${item.label}`}
              rel="noopener noreferrer"
            >
              {menuIcons[index]}
              <span>{item.label}</span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
