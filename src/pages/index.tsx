// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import '../global.css'
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Img from 'gatsby-image';

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const Index = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Work" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} style={{
            marginBottom: rhythm(4),
          }}>
            <div className="grid gap-8 grid-cols-2" style={{
                  marginBottom: rhythm(1),
                }}>
              <header>
              <h3 style={{ marginBottom: rhythm(1/2),}} className="text-3xl mb-2">
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <p className="mb-0">{node.frontmatter.role}</p>
              <p className="opacity-50">{node.frontmatter.years}</p>
              </header>
              <div className="">
                <p style={{
                    marginBottom: rhythm(1),
                  }}
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
                <Link style={{
                    marginTop: rhythm(1),
                  }}
                  className="float-right hover:text-indigo-600" style={{ boxShadow: `none` }} to={node.fields.slug}>
                    Case Study →
                </Link>
              </div>
            </div>
            <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
          </article>
        )
      })}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC } filter: {fileAbsolutePath: {regex: "/work/.*\\.md$/"}}) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            years
            date(formatString: "MMMM DD, YYYY")
            title
            description
            role
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 3080, quality: 100) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  }
`
