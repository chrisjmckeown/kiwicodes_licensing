import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const NotFoundPage = () => (
  <>
    <Breadcrumb breadCrumbs={[]} endPage={'404'} />
    404 - <Link to='/'>Go home</Link>
  </>
);

export default NotFoundPage;
