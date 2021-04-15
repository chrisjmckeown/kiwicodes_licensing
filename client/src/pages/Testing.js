import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../components/Alert';
import Breadcrumb from '../components/Breadcrumb';
import PageHeader from '../components/PageHeader';
import { getProducts } from '../actions/productActions';
import Spinner from '../components/Spinner';
import ProductItem from '../components/Testing/ProductItem';
import { addAudit } from '../actions/auditActions';
import Moment from 'moment';

const Testing = ({
  getProducts,
  addAudit,
  product: { products, loading: productLoading },
  auth: { member, loading: authLoading },
}) => {
  useEffect(() => {
    !authLoading && getProducts(member.id);
  }, [getProducts, member, authLoading]);

  const onClick = async () => {
    const audit = {
      audit: {
        'Angle to True North': '5.63741348394167',
        'Project Point': 'N/S: -7531.35491 E/W: -29057.72697 ELE: 0',
        'Survey Point': 'N/S: -28586.77055 EW: -27014.91091 ELE: 0',
        'Keynote File': 'RevitKeynotes_Metric.txt',
        'Shared Parameter File': 'Shared Parameter File not found.',
        'File Size': '18',
        Warnings: '4',
        'Fill Patterns': '97',
        'Line Patterns': '33',
        'Line Styles': '19',
        'Duplicate CADs': '0',
        'Imported CADs': '0',
        'Linked DGN': '0',
        'Linked DWG': '0',
        'Linked Images': '0',
        'Linked PDF Instances': '0',
        'Linked PDFs': '0',
        'Linked Revit': '0',
        'Not Enclosed Areas': '0',
        'Not Enclosed Rooms': '0',
        'Not Place Areas': '0',
        'Not Place Rooms': '0',
        'Placed Areas': '0',
        'Placed Rooms': '14',
        'Door Mark Duplicated': '0',
        'Room Number Duplicated': '0',
        'Window Mark Duplicated': '0',
        'Dimensions Overriden': '0',
        Filters: '2',
        'In Place Families': '4',
        Materials: '173',
        'Model Groups': '4',
        'Modelled Elements': '403',
        'Purgable Items': '17',
        'Reference Planes': '56',
        Worksets: '1',
        'Detail Groups': '0',
        'Detail Lines': '2',
        'Filled Regions': '0',
        'Masking Regions': '0',
        'Detail Group Array Types': '0',
        'Detail Group Types': '0',
        'Detail Groups Not Named': '0',
        'Detail Groups Not Placed': '0',
        'Model Group Array Types': '4',
        'Model Group Types': '0',
        'Model Groups Not Named': '4',
        'Schedules Total': '8',
        'Sheets Total': '6',
        'Views Copy': '0',
        'View Templates Unused': '9',
        'Views Total': '27',
        'Views Unused': '7',
        'Design Option Sets Not Named': '0',
        'Design Option Sets': '0',
        'Design Options Not Named': '0',
        'Design Options': '0',
        'Project Parameters': '1',
        'Shared Parameters': '1',
      },
      date: Moment().format('yyyy-MM-DDThh:mm:ss.SSS'),
      memberId: member.id,
      modelId: 'extractedFromRevit',
      clientId: member.clientId,
    };

    await addAudit(audit);
  };
  return (
    <>
      <Breadcrumb breadCrumbs={[]} endPage={'Testing'} />
      <PageHeader pageName={'Testing'} />
      <>
        <h2>
          Allows members to test checking out their license and activating a
          Product, activating an App, and running a generic Model audit.
        </h2>
        <br></br>
        <>
          <div className='row lg'>
            <div className='col12 lg'>
              <div className='list-header'>
                <div>Product assigned to - click to activate</div>
              </div>
              {productLoading ? (
                <Spinner />
              ) : (
                <div className='list-body'>
                  {products.length > 0 ? (
                    products.map((product, index) => (
                      <div key={index}>
                        <div className='list-header'>
                          <div>{product.name}</div>
                        </div>
                        <ProductItem key={product.id} product={product} />
                      </div>
                    ))
                  ) : (
                    <div className='list-item list-item--message'>
                      No products found...
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
        <h2>Model Audit</h2>
        <br />
        <button className='btn' onClick={onClick}>
          Create Audit
        </button>
      </>
      <Alert />
    </>
  );
};

Testing.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addAudit: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state, props) => ({
  product: state.product,
  auth: state.auth,
});
export default connect(mapStateToProps, { getProducts, addAudit })(Testing);
