import React from 'react';
import { ApplyPage } from '../components/ApplyPage';
import { mentorshipAPI } from '../clients/index';
import Footer from '../components/footer';
import checkingDataError from '../helper/checkingDataError';
import checkSeoData from '../helper/checkSeoData';
import Head from 'next/head';

const Apply = ({
  websiteUrl,
  metaData,
  data,
  data: { topBarData, footerData, pagesData }
}) => {
  return (
    <>
      <Head>{checkSeoData(metaData, websiteUrl)}</Head>
      <ApplyPage data={data} topBarData={topBarData} pagesData={pagesData} />
      <Footer data={footerData} />
    </>
  );
};

export async function getStaticProps() {
  const endPoints = [
    mentorshipAPI('/apply-page-intro-section'),
    mentorshipAPI('/apply-page-form'),
    mentorshipAPI('/top-bar'),
    mentorshipAPI('/footer'),
    mentorshipAPI('/pages-seos?page_name=apply'),
    mentorshipAPI('/setting'),
    mentorshipAPI('/pages')
  ];
  return Promise.all(checkingDataError(endPoints)).then(
    ([
      { data: headerSectionData },
      { data: formData },
      { data: topBarData },
      { data: footerData },
      { data: metaData },
      { data: websiteUrl },
      { data: pagesData }
    ]) => {
      return {
        props: {
          data: {
            headerSectionData,
            formData,
            topBarData,
            footerData,
            pagesData
          },
          metaData,
          websiteUrl
        },
        revalidate: 1
      };
    }
  );
}

export default Apply;
