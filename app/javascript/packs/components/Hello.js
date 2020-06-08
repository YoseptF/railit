import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Hello = () => {
  const { name } = useParams() || { name: 'world' };
  console.log(name);
  return (

    <h1>
      {`Hello ${name}`}
    </h1>
  );
};

Hello.defaultProps = {
  name: 'World',
};

Hello.propTypes = {
  name: PropTypes.string,
};

export default Hello;
