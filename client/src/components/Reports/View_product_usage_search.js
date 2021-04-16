import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from '../Form/formControls';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';

import {
  setFilterStartDate,
  setFilterEndDate,
  setFilterName,
  setFilterMember,
  setFilterCompany,
} from '../../actions/productActivationActions';

const View_product_usage_search = ({
  setFilterStartDate,
  setFilterEndDate,
  setFilterName,
  setFilterMember,
  setFilterCompany,
  productActivations: {
    filterStartDate: startDate,
    filterEndDate: endDate,
    filterName,
    filterMember,
    filterCompany,
  },
  premissionLevel,
}) => {
  const [details, setDetails] = useState({
    focusedInput: null,
  });
  const { focusedInput } = details;

  return (
    <>
      <div className='row lg'>
        <h3>Search</h3>
      </div>
      <div className='row lg'>
        <Input
          className='search'
          name='filterName'
          placeholder='Product Name'
          value={filterName}
          onChange={(e) => setFilterName(e.target.value)}
        />
        {(premissionLevel === 'kiwicodes' || premissionLevel === 'admin') && (
          <Input
            className='search'
            name='filterMember'
            value={filterMember}
            placeholder='Member Name'
            onChange={(e) => setFilterMember(e.target.value)}
          />
        )}
        {premissionLevel === 'kiwicodes' && (
          <Input
            className='search'
            placeholder='Company Name'
            name='filterCompany'
            value={filterCompany}
            onChange={(e) => setFilterCompany(e.target.value)}
          />
        )}
        <div className='search-date'>
          <DateRangePicker
            startDate={startDate}
            startDateId='start_date_id'
            endDate={endDate}
            endDateId='end_date_id'
            onDatesChange={({ startDate, endDate }) => {
              setFilterStartDate(startDate);
              setFilterEndDate(endDate);
            }}
            focusedInput={focusedInput}
            onFocusChange={(focusedInput) => setDetails({ focusedInput })}
            isOutsideRange={() => false}
            numberOfMonths={2}
          />
        </div>
      </div>
    </>
  );
};

View_product_usage_search.propTypes = {
  productActivations: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  productActivations: state.productActivation,
});

const mapDispatchToProps = (dispatch) => ({
  setFilterStartDate: (startDate) => dispatch(setFilterStartDate(startDate)),
  setFilterEndDate: (endDate) => dispatch(setFilterEndDate(endDate)),
  setFilterName: (text) => dispatch(setFilterName(text)),
  setFilterMember: (text) => dispatch(setFilterMember(text)),
  setFilterCompany: (text) => dispatch(setFilterCompany(text)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View_product_usage_search);
