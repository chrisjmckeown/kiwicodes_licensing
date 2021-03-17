import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import HomeContents from '../components/Home/HomeContents';

const Home = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} />
      <PageHeader pageName={'Home'} />
      <HomeContents />
      <Alert />
    </>
  );
};
export default Home;
