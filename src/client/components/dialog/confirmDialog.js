import React from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from '@material-ui/core';

import {
  Delete,
} from '@material-ui/icons';

function AlertDialog() {
  state = {
    id: '',
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios.delete(`http://localhost:3200/findeat/api/user/deleteUser/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button size="small" color="secondary" onClick={handleClickOpen}>
        Delete
        <Delete />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
            >
        <DialogTitle id="idTitle">
          {'Delete the user?'}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText id="idContentText">Delete the user</DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Disagree</Button>
          <Button onClick={handleClose} color="secondary" onSubmit={this.handleSubmit} type="submit">Agree</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;
