import React from 'react';
import Grid from '@material-ui/core/Grid';

// Components
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '../input/input';
import Button from '../button/button';

// Styles
import '../../css/form.css';

// eslint-disable-next-line react/prefer-stateless-function
class FormUser extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={8} className="bgF" />
          <Grid item xs={4}>
            <Grid item xs={11}>
              <h1 className="titleF">Create account</h1>
              <form>
                <Input place="John" label="Name" />
                <br />
                <Input place="Alias" label="Username" />
                <br />
                <Input place="example@email.com" label="Emal" />
                <br />
                <Input place="Password" label="Password" type="password" />
                <br />
                <br />
                <Button name="Register" link="http://localhost:3000" />
              </form>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default FormUser;
