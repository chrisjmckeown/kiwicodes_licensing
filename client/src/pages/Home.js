import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';

const Home = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} />
      <PageHeader pageName={'Home'} />
      <Alert />
    </>
  );
};
export default Home;
