import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';

import MenuIcon from '@material-ui/icons/Menu';

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <ToolBar>
            {/* <MenuIcon />   */}
            <h2> handbook</h2>
          </ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default NavBar;
