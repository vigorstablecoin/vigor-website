import { NextPage } from 'next';
import React from 'react'
import Router from 'next/router'
import Layout from '../components/Layout';
import RedirectMessage from '../components/Redirect';

// even for redirects we need to have a client-side page because of IPFS deployments
const url = `https://vigor.ai`
const Community: NextPage = (props) => (
  <Layout>
    <RedirectMessage />
  </Layout>
);

Community.getInitialProps = async ({ res }) => {
    if (res) {
      res.writeHead(302, {
        Location: url
      })
      res.end()
    } else {
      window.location.assign(url)
    }
    return {}
  }


export default Community;