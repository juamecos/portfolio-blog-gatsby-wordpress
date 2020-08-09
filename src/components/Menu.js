import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  GrHome,
  GrUser,
  GrServicePlay,
  GrCode,
  GrMailOption,
} from "react-icons/gr"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allWpMenu(filter: { name: { eq: "Main Menu" } }) {
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
  const menuIcons = [
    <GrHome />,
    <GrUser />,
    <GrServicePlay />,
    <GrCode />,
    <GrMailOption />,
  ]

  return (
    <ul className="menu__list">
      {menuItems.map((item, index) => {
        return (
          <li className="menu__item" key={index}>
            <AniLink
              fade
              to={item.path}
              className="menu__link"
              activeClassName="active"
            >
              {menuIcons[index]}
              <span>{item.label}</span>
            </AniLink>
          </li>
        )
      })}
    </ul>
  )
}

export default Menu
