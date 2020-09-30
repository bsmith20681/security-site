import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const Index = () => {
  const data = useStaticQuery(graphql`
    query images {
      image: file(
        relativePath: { eq: "images/your-home-security-expert.com.png" }
      ) {
        childImageSharp {
          fixed(width: 350, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO />
      <div className="container pt-large">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
            <h1>Finding the Right Home Security System is.... Confusing</h1>
            <p>
              My name is Ben and I'm here to help. I've been in the home
              security industry for over 5 years now. I review the best home
              security companies in the industry. I'm here to give you the
              <strong> insider scoop</strong> so you can choose the
              <strong> right home security system</strong> for your home.
            </p>
            <div className="row">
              <Link>
                <button
                  style={{ marginRight: 20 }}
                  className="btn btnGreenText"
                >
                  Get Started
                </button>
              </Link>
              <Link to="/about">
                <button className="btn btnWhite">About Me</button>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <Img fixed={data.image.childImageSharp.fixed} />
          </div>
        </div>
        <hr />
      </div>
      <div className="container pt-large">
        <div className="row text-center">
          <div className="col-md-12">
            <h2>Stop the Endless Searching Today</h2>
            <p>
              Let's face it shopping for the right security system is time
              consuming and exhausting! There are so many options which is why
              it makes it so difficult to decide.
            </p>
            <p>
              I have organized the majority of home security options into three
              simple categories to get you started.
            </p>
          </div>
        </div>
        <div className="row cardContainer">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 card">
            <h4>Smart Home Security</h4>
            <p>
              Lights, cameras, thermostats, garage door, voice control, and
              security monitoring. This is what I recommend.
            </p>
            <p>
              <em>Examples: Vivint, ADT</em>
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 card">
            <h4>Standard Home Security</h4>
            <p>
              No fancy bells and whistles. Just affordable, and reliable home
              security with professional installation. This is what I recommend.
            </p>
            <p>
              <em>Examples: CPI Security, Protect America, Monotronics</em>
            </p>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 card">
            <h4>DIY Security</h4>
            <p>
              The do-it-yourself security system. Save money by installing it on
              your own. This is what I recommend.
            </p>
            <p>
              <em>Examples: Simplisafe, Frontpoint, Ring Alarm System</em>
            </p>
          </div>
        </div>
        <div className="row text-center pt-large">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <h2>What if I only want Cameras?</h2>
            <p>
              Some people don't want the monthly fee. They just want something
              they can monitor from their phone from any where.
            </p>
            <p>
              Cameras are a great option to capture what happens and have solid
              video evidence that can be shown to the police.
            </p>
            <p>
              Click on the button below to see what options I recommend for best
              outside security cameras.
            </p>
            <Link>
              <button className="btn btnGreenText">
                See All Camera Options
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
