import * as React from "react"
import Layout from "../components/layout/layout"
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import { graphql } from 'gatsby';
import { SEO } from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col col-left">
            <div>
              <h2>Senior Drupal Developer</h2>
              <p>I'm Dinu, Senior Drupal Developer with over 10 years of experience, I specialize in creating robust, user-friendly websites and applications that meet the evolving needs of businesses and communities.</p>
              <p>My journey in web development began with a passion for technology and a keen interest in open-source platforms, leading me to specialize in Drupal for its versatility and strong community support.</p>

              <p>I am well-versed in all phases of the development lifecycle, from initial concept through to deployment and maintenance, ensuring that every project I undertake is scalable, secure, and SEO-friendly.</p>

              <p>What sets me apart is not just my technical expertise, but my ability to communicate effectively with clients and team members, translating complex technical challenges into manageable solutions. I am a proactive problem-solver, constantly exploring new technologies and methodologies to enhance project outcomes. My commitment to excellence and continuous learning has enabled me to contribute to the success of diverse projects, ranging from small business websites to large-scale digital platforms.</p>
              <h2>My Employment History</h2>
              <Accordion allowZeroExpanded>
                {data.allEmploymentHistory.edges.map(item => (
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <div className="title-contents">{item.node.frontmatter.title} - {item.node.frontmatter.company}<i>{item.node.frontmatter.date}</i></div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div dangerouslySetInnerHTML={{ __html: item.node.html }}></div>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
              <h2>Education</h2>
              {data.allEducation.edges.map(item => (
                <div className="title-contents">{item.node.frontmatter.title} - {item.node.frontmatter.institution}<i>, {item.node.frontmatter.date}</i></div>
              ))}

              <h2>Recent accomplishments and certifications</h2>
              <ul>
                <li>
                  <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/6UAMWLHPWZ4H">IBM Data Science Professional Certificate</a>
                </li>
              </ul>

            </div>
          </div>
          <div className="col col-right">
            <h3>Programming Skills</h3>
            <ul className="list">
              <li>Drupal - 12 years</li>
              <li>Node.js - 8 years</li>
              <li>Mysql - 12 years</li>
              <li>MongoDb - 8 years</li>
              <li>PHP - 15 years</li>
              <li>Google Cloud - 6 years</li>
            </ul>

            <h3>Industry Sectors</h3>
            <ul className="list">
              <li>Software Engineering</li>
              <li>Healthcare</li>
              <li>Recruitment</li>
              <li>News Media</li>
            </ul>

            <h3>Languages</h3>
            <ul className="list">
              <li>English</li>
              <li>Romanian</li>
              <li>Russian</li>
            </ul>

          </div>
        </div>
        <div className="footer-wrapper">
          <div className="footer">
            <h2>Get in touch</h2>
            <div>Email: <u>contact@dinu.dev</u> or <u>rodnitchi@gmail.com</u>.</div>
            <br />
            <div>Phone: <u>+37378582197</u></div>

            <form className="contact-form" name="contact" etlify-honeypot="bot-field" data-netlify="true">
              <input type="hidden" name="bot-field" />
              <div>
                <label for="name">Your Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
                <label for="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div>
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="8" required></textarea>
              </div>
              <div className="actions">
                <button type="submit">Send</button>
              </div>
            </form>

            <div className="links">
              <a href="https://www.linkedin.com/in/dinu-rodnitchi">LinkedIn</a>
              <a href="https://github.com/dinu-dev">Github</a>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <> <html lang="en" />
    <SEO />
  </>
)

export const query = graphql`
  query MyEmploymentHistory {
    allEmploymentHistory: allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "employment"}}}
      sort: {frontmatter: {order: ASC}}
      ) {
      edges {
        node {
          frontmatter {
            title
            type
            date
            company
          }
          fileAbsolutePath
          html
        }
      }
    }
    allEducation: allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "education"}}}
      sort: {frontmatter: {order: ASC}}
      ) {
      edges {
        node {
          id
          frontmatter {
            type
            title
            institution
            date
          }
        }
      }
    }
  }
`
