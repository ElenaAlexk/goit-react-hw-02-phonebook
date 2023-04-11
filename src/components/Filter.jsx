import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const filterId = nanoid();

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label htmlFor={filterId}>Find contacts by name</label>
      <input type="text" id={filterId} value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
