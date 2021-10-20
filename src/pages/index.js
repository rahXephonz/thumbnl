import React from "react"
import Layout from "../components/layout"
import InfoSection from "../components/InfoSection/InfoSection"
import AboutSection from "../components/AboutSection/AboutSection"
import Seo from "../components/seo"
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/Data/Data"
import LookupSection from "../components/LookupSection/LookupSection"
import Footers from "../Footer/Footer"
import Services from "../components/Services/Services"

const IndexPage = () => (
  <Layout>
    <Seo title="Thumbnl" />
    <InfoSection {...homeObjOne} />
    <AboutSection {...homeObjTwo} />
    <Services />
    <LookupSection {...homeObjThree} />
    <Footers/>
  </Layout>
)

export default IndexPage
