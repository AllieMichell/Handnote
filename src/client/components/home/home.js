import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Components
import MenuButton from './drawer';

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <ToolBar>
            <MenuButton />
            <Typography variant="h5">handnote</Typography>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
