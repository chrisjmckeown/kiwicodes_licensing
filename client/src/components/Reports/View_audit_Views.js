import React from 'react';
import { connect } from 'react-redux';
import { auditSelectors } from '../../selectors/auditSelectors';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Text,
  ResponsiveContainer,
} from 'recharts';

const View_audit_Views = ({ filteredAudits, premissionLevel }) => {
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
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='modelId'
              // angle={315}
              dy={5}
              dx={0}
              // height={100}
              // width={10}
              label={<Text width={30} />}
            />
            <YAxis />
            <Tooltip />
            <Legend
            // width={200}
            // wrapperStyle={{
            //   top: 40,
            //   right: 20,
            //   backgroundColor: '#f5f5f5',
            //   border: '1px solid #d5d5d5',
            //   borderRadius: 3,
            //   lineHeight: '40px',
            // }}
            />
            <Line
              type='monotone'
              dataKey='audit.Views Total'
              stroke='#8884d8'
              activeDot={{ r: 8 }}
            />
            <Line
              type='monotone'
              dataKey='audit.Views Unused'
              stroke='#82ca9d'
            />
            <Line
              type='monotone'
              dataKey='audit.View Templates Unused'
              stroke='#82ca9d'
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => ({
  filteredAudits: auditSelectors(state.audit),
});

export default connect(mapStateToProps)(View_audit_Views);
