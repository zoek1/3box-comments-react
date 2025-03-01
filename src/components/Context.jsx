import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

import Loading from '../assets/3BoxCommentsSpinner.svg';
import './styles/Context.scss';

const Context = ({ dialogueLength, isLoading }) => (
  <div className="context">
    <span className="context_text">
      {isLoading && <SVG className="context_loading" src={Loading} alt="Loading" />}
      {!dialogueLength  && !isLoading && 'No comments'}
    </span>
  </div>
)

export default Context;

Context.propTypes = {
  dialogueLength: PropTypes.number,
  isLoading: PropTypes.bool,
};

Context.defaultProps = {
  dialogueLength: null,
  isLoading: false,
};
