import React from "react"
import { Link } from "gatsby"
import '../global.css'
import { rhythm, scale } from "../utils/typography"
import Header from "../components/Header"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1 className="no-underline"
        style={{
          ...scale(1),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `inherit`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
        padding: `${rhythm(1.5)} ${rhythm(1.5)}`,
      }}
    >
      <Header title={title}/>
      <main style={{
                  marginTop: rhythm(3),
                }}>{children}</main>
      <footer style={{
          marginTop: rhythm(4),
        }}>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
