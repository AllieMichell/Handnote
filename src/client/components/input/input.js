import React from 'react';
import TextField from '@material-ui/core/TextField';

class Input extends React.Component {
  render() {
    return (
      <TextField
        placeholder={this.props.place}
        label={this.props.label}
        style={{ margin: 8 }}
        // helperText="Full width!"
        fullWidth
        type={this.props.type}
        margin="normal"
            />
    );
  }
}

export default Input;
