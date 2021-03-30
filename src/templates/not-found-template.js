// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';



const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  let url = "https://miro.medium.com/max/441/1*9EBHIOzhE1XfMYoKz1JcsQ.gif";
  fetch('https://random-xkcd-img.herokuapp.com/')
    .then((response) => response.json())
    .then((responseJson) => {
      url=responseJson.url;
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="404: NOT FOUND">
        <p>It appears that this route doesn't exist... but enjoy a random XKCD:</p>
        <img src={url} alt="hopefully an xkcd comic" /> 
      </Page>
    </Layout>
  );
};


export default NotFoundTemplate;
