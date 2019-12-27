/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import './layout.css'
import '../components/header.css'
import '../components/footer.css'
import '../components/styles.css'
import Typography from "typography"
import moragaTheme from "typography-theme-moraga"
import { Provider as GridProvider } from "griding"
import Footer from './Footer'
import Header from "./header"
import '../pages/main.css'
import { Container } from "react-bootstrap"
// import * as S from "../components/styles.css"

const typography = new Typography(moragaTheme)
typography.injectStyles()

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <GridProvider>
        <>
        <Header />
          {/* <main>{children}</main> */}
          <main>{children}</main>
        <Footer />
          {/* <S.Footer>
            See the original article:{" "}
            <a href="https://blog.significa.pt/advanced-blog-system-in-gatsby-16e0cd6b85ad" target="_blank" rel="noopener noreferrer">
              Advanced blog system in Gatsby
            </a>
            , by{" "}
            <a
              href="https://github.com/danilowoz"
              target="_blank"
              rel="noopener noreferrer"
            >
              @danilowoz
            </a>
          </S.Footer> */}
        </>
      </GridProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
