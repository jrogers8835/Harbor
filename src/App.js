import React, { Component } from 'react';
import logo from './logo.svg';
import Add from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import './App.css';

var dock_ports = [1,2,3,4,5];
class App extends Component {
  render() {
    var dock_port_divs = dock_ports.map((item) => {
      return (
        <div class="port_post">
          <div class="dock divider"></div>
          <div class="dock spacer">{item}</div>
        </div>
      );
    });
    return (
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Harbor</h1>
              <IconMenu
                iconButtonElement={<IconButton><MoreVertIcon color='white' /></IconButton>}
                anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
              >
                <MenuItem value="newHarbor" primaryText="New Harbor" />
                <MenuItem value="exportHarbor" primaryText="Export" />
              </IconMenu>
            </header>
            <div class="dock top-dock"></div>
            <div class="ports">
              {dock_port_divs}
              <div class="dock divider"></div>
            </div>
            <div class="ocean">
              <IconMenu iconButtonElement ={<IconButton class="addMenuIconBound"><div><Add className="addMenuIcon" /></div></IconButton>}
                    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}>
                <MenuItem value="addDocker" primaryText="Add Docker Project" />
                <MenuItem value="imoprtDocker" primaryText="Import from Dockerfile" />
              </IconMenu>
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

export default App;
