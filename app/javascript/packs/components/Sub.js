import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateSubAsync } from '../functions/currentSlice';

const Sub = () => {
  const dispatch = useDispatch();
  const { sub } = useParams();
  dispatch(updateSubAsync(sub));
  return (
    <h1>
      {`Sub ${sub}`}
    </h1>
  );
};

export default Sub;
