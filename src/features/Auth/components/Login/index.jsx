import React from 'react';
import PropTypes from 'prop-types';
import { login } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import LoginForm from '../LoginForm';

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);

      // close dialog
      const { closeDialog } = props;
      if(closeDialog) closeDialog();
    } catch (err) {
      console.log('Failed to login', err);
      enqueueSnackbar(err.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

Login.propTypes = {
  closeDialog: PropTypes.func
};

export default Login;
