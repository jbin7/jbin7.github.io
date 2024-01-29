import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import "./portfolio.scss"

const PortfolioIndex = ({ data, location }) => {
  
  return (
    <Layout location={location}>
      <div>
        portfolio
      </div>
    </Layout>
  )
}

export default PortfolioIndex