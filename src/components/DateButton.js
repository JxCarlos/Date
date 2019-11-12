import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const DateButton = (({handleButtonClick}) => (
  <div className="button-container">
    <Button
      variant="extendedFab"
      onClick={() => handleButtonClick()}
      color="primary">
      Display Date
    </Button>
  </div>
));


DateButton.propTypes = {
    onClickButton: PropTypes.func
}

export default DateButton;