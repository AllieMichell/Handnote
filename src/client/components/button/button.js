import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/icons/Input';

class Btn extends React.Component {
  render() {
    return (
      <Button variant="contained" color="primary" href={this.props.link}>
        <Icon />
        {this.props.name}
      </Button>
    );
  }
}

export default Btn;
