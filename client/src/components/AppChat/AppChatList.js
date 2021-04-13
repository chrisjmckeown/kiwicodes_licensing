import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../Alert';
import Breadcrumb from '../Breadcrumb';
import PageHeader from '../PageHeader';
import { getAppChats } from '../../actions/appChatActions';
import { filter } from '../../selectors/appChatSelectors';
import AppChatItem from './AppChatItem';
import Spinner from '../Spinner';
import AppChatForm from './AppChatForm';

export const AppChatList = ({
  getAppChats,
  chat: { loading },
  filteredChats,
  filteredApp,
  ...props
}) => {
  useEffect(() => {
    getAppChats();
  }, [getAppChats]);
  return (
    <>
      <Breadcrumb breadCrumbs={['Products']} endPage={'App Chat'} />
      <PageHeader pageName={'App Chat'} />
      {loading ? (
        <Spinner />
      ) : (
        <>
          <AppChatForm app={filteredApp[0]} />
          <div className='row lg'>
            <div className='col12 lg'>
              <div className='list-header'>
                <div>
                  App chat history for {filteredApp && filteredApp[0].name}
                </div>
              </div>
              <div className='list-body'>
                {filteredChats.length > 0 ? (
                  filteredChats.map((chat) => (
                    <AppChatItem key={chat.id} chat={chat} />
                  ))
                ) : (
                  <div className='list-item list-item--message'>
                    No chat history found...
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
      <Alert />
    </>
  );
};

AppChatList.propTypes = {
  chat: PropTypes.object.isRequired,
  getAppChats: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  chat: state.appChat,
  filteredChats: filter(state.appChat.appChats, props.match.params.id),
  filteredApp: state.app.apps.filter(
    (app) => app.id.toString() === props.match.params.id.toString()
  ),
});
export default connect(mapStateToProps, { getAppChats })(AppChatList);
