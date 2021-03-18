import React from 'react';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import ContactDetails from '../components/Contact/ContactDetail';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Contact'} />
      <PageHeader pageName={'Contact'} />
      <ContactDetails />
      <div className='row lg'>
        <div className='col6 lg'>
          <ContactForm />
        </div>
      </div>
      <Alert />
    </>
  );
};
export default Contact;
