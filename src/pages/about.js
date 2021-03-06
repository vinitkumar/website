import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const AboutIndex  = (props) => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      avatar: file(absolutePath: { regex: "/vinit_kumar.jpg/" }) {
        childImageSharp {
          fixed(width: 200, height: 200, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <Layout location={props.location}>
    <SEO title="About - Vinit Kumar"></SEO>
    <h1>About</h1>
    <p>
      Hi there,
    </p>
    <Image
      fixed={data.avatar.childImageSharp.fixed}
      alt={author}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
        float: `right`,
      }}
      imgStyle={{
        borderRadius: `50%`,
      }}
    />
    <p>
      My name is <strong>Vinit Kumar</strong> and I'm a Software Engineer <span role="img" aria-label="engineer">👨‍💻</span>.
      I am mainly interested in designing scalable systems in Python, Node.js, and Go. I like Vim and good coffee. In this website, you will find my writing on a wide variety of topics.
    </p>

    <p>Currently, I lead the development  and architecture of multi-tenant & distributed CMS system at Socialschools B.V <span role="img" aria-label="dutch">🇳🇱</span> . I have 8 years of experience writing backend in Django for a successful product and numerous client projects. You can download my <a target='_blank'  rel="noopener noreferrer"  href="https://vinitkumar.github.io/vinit_kumar.pdf"> resume</a> here. My biggest strength is in coming up with simple solutions for difficult problems.
    </p>
    <p>I specially enjoy reading books, and <strong><i>spending time</i></strong> with my family. I live in Pune with my family. My wife <a target='_blank'  rel="noopener noreferrer"  href="https://rituparnadey.com">Rituparna Dey</a> is the founder of a Digital Marketing Company <a href="https://scoophubs.com" target="_blank" rel="noopener noreferrer">ScoopHubs.com</a></p>
    <p>I contribute to some open source software and you can browse them at my github profile <a href="https://github.com/vinitkumar" target="_blank" rel="noopener noreferrer">vinitkumar</a>.
      If you use twitter, you can follow me <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/vinitkme">@vinitkme</a> on twitter.
    I am on LinkedIn, connect with <a target="_blank"  rel="noopener noreferrer" href="https://www.linkedin.com/in/vinitatlinkedin/">vinitatlinkedin</a> at LinkedIn.
    </p>
    <a href="https://www.buymeacoffee.com/z3KSrCwn4" target="_blank" rel="noopener noreferrer"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{height: `60px !important`, width: `217px !important`}} ></img></a>
    </Layout>
  );
}



export default AboutIndex;
