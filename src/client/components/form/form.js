import React from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

// Components
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '../input/input';
import Button from '../button/button';

// Styles
import '../../css/form.css';

// eslint-disable-next-line react/prefer-stateless-function
class FormUser extends React.Component {
  state = {
    name: '',
    username: '',
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
    this.setState({ username: event.target.value });
    this.setState({ email: event.target.value });
    this.setState({ password: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:3200/findeat/api/user/newUser', { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8} className="bgF" />
          <Grid item xs={4}>
            <Grid item xs={11}>
              <h1 className="titleF">Create account</h1>
              <form onSubmit={this.handleSubmit}>
                <Input place="John" label="Name" name="name" change={this.handleChange} />
                {/* <input type="text" name="name" onChange={this.handleChange} /> */}
                <br />
                <Input place="Alias" label="Username" name="username" change={this.handleChange} />
                {/* <input type="text" name="username" onChange={this.handleChange} /> */}
                <br />
                {/* <input type="text" name="email" onChange={this.handleChange} /> */}
                <Input place="example@email.com" label="Emal" name="email" change={this.handleChange} />
                <br />
                {/* <input type="password" name="password" onChange={this.handleChange} /> */}
                <Input place="Password" label="Password" type="password" name="password" change={this.handleChange} />
                <br />
                <br />
                <Button name="Register" type="submit" />
                {/* <button type="submit">Add</button> */}
              </form>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FormUser;
