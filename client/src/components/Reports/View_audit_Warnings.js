import React from 'react';
import { connect } from 'react-redux';
import { auditSelectors } from '../../selectors/auditSelectors';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';

const View_audit_Warnings = ({ filteredAudits, premissionLevel }) => {
  return (
    <>
      <div className='row lg'>
        <div className='search-results'>
          Search results: {filteredAudits.length.toString()}
        </div>
      </div>
      <div className='row lg'>
        <ResponsiveContainer width='100%' height={300}>
          <LineChart
            width={600}
            height={300}
            data={filteredAudits}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line type='monotone' dataKey='audit.Warnings' stroke='#8884d8' />
            <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
            <XAxis dataKey='modelId' stroke='#ccc' />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => ({
  filteredAudits: auditSelectors(state.audit),
});

export default connect(mapStateToProps)(View_audit_Warnings);
