/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter, faGitkraken } from '@fortawesome/free-brands-svg-icons'

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter,
            github,
            linkedin,
            gitkraken
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),        
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author.name}</strong>. {author.summary}
        {` `}
        <br />
      
          <a className="social-media-icons twitter" rel="noreferrer" target="_blank" href={`https://twitter.com/${social.twitter}` }>  <FontAwesomeIcon icon={faTwitter} /> </a>
          <a className="social-media-icons github" rel="noreferrer" target="_blank" href={`https://github.com/${social.github}` }>  <FontAwesomeIcon icon={faGithub} /> </a>
          <a className="social-media-icons linkedin" rel="noreferrer" target="_blank" href={`https://linkedin.com/in/${social.linkedin}` }>  <FontAwesomeIcon icon={faLinkedin} /> </a>
          <a className="social-media-icons gitkraken" rel="noreferrer" target="_blank" href={`https://www.gitkraken.com/invite/${social.gitkraken}`}>  <FontAwesomeIcon icon={faGitkraken} /> </a>
        
      
      </p>
    </div>
  )
}

export default Bio