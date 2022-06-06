import PropTypes from 'prop-types';

const basePropTypes = {
  text: PropTypes.string,
};

export const Radio = ({ text }) => {
  const idd = text.replace(/ /g, '_');
  return (
    <div className="RadioButton-body">
      <input type="radio" id={idd} />
      <label htmlFor={idd}>{text}</label>
    </div>
  );
};

Radio.propTypes = {
  ...basePropTypes,
};
