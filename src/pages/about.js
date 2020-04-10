import React from "react"

import profilePic from "../images/your-home-security-expert.com.png"
import signature from "../images/signature.png"

import Layout from "../components/Layout"

import "../styles/pages/about.scss"

const About = () => {
  return (
    <Layout>
      <div className="container" id="about">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2>
              Hi, I'm Ben and I am here to help you find the right security
              system for your home
            </h2>
            <p id="about-intro">
              I have worked in the home security industry for over 5 years now.
              On this website I give you the inside scoop on all the security
              companies.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <p>
              Searching for the right security system can be a daunting task.
              Home security systems have been around for a while now and as a
              result there are too many options. My goal is to make deciding the
              best home security system for your home an easier task. With my
              five years in the industry, I have categorized all the options
              into three simple categories. This will serve as a good starting
              place because what may be a good fit for your neighbor may not be
              a good fit for you.
            </p>
            <p>
              I have reviews, comparisons, and help insider tips on this website
              to make sure you are making the right decision. I shoot it
              straight. You will not find any fluff in my articles. I try my
              best to make complicated concepts easy to understand.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <img
              src={profilePic}
              alt="ben from yourhomesecurityexpert.com"
              style={{ width: 326 }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              My work is supported through affiliate links. When someone clicks
              on a link and uses the service I recommended, I receive a
              commission. However, I do not let the size of the commission
              influence my over grade. My commitment to towards honesty and
              being as straight forward as possible.
            </p>
            <p>
              When I'm not working on this site, you can find me going to the
              movies, flying my drone, and watching the next UFC fight. If you
              feel like you need some extra help you can email me directly at
              ben@yourhomesecurityexpert.com.
            </p>
            <p>
              Thanks
              <br />
              -Ben Smith
            </p>
            <img src={signature} alt="signature ben smith" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
