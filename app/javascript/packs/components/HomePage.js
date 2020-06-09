import React from 'react';
import { useDispatch } from 'react-redux';
import { updateSubAsync } from '../functions/currentSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(updateSubAsync('Home'));

  return (
    <h1>Home</h1>
  );
};

export default HomePage;
