import React, { Component } from 'react';
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  Icon,
  ListItemText,
  Typography,
  Drawer,
} from '@material-ui/core';
import DirectionsTransitIcon from '@material-ui/icons/DirectionsTransit';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Link from 'next/link';

const drawerWidth = 300;

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  drawer: {
    width: drawerWidth,
  },
  mainContent: {
    paddingLeft: drawerWidth + 10,
    paddingTop: 74,
  },
  appBar: {
    paddingLeft: drawerWidth,
    justifyContent: 'space-between',
  },
  appBarColor: {
    backgroundColor: theme.palette.bw.dark,
  },
  centerVertically: {
    margin: 'auto 0',
  },
  containAppBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    margin: theme.spacing.unit,
  },
  logo: {
    width: 45,
    height: 45,
  },
});

const lines = [
  {
    name: 'Blue',
    id: 801,
    color: '#2461AA',
  },
  {
    name: 'Red',
    id: 802,
    color: '#FC1921',
  },
  { name: 'Green', id: 803, color: '#6BBD46' },
  { name: 'Gold', id: 804, color: '#FFB300' },
  { name: 'Purple', id: 805, color: '#9561A8' },
  { name: 'Expo', id: 806, color: '#50C8E8' },
];

class Layout extends Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes } = this.props;
    const selectedTab = this.state.selectedTab;

    const links = (
      <List>
        {lines.map(line => (
          <Link href={`/line/${line.id}`} key={line.id.toString()}>
            <ListItem button>
              <ListItemText primary={<span style={{ color: line.color }}>{line.name}</span>} />
            </ListItem>
          </Link>
        ))}
      </List>
    );

    return (
      <div>
        <Drawer variant="permanent" classes={{ paper: classes.drawer }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <img src="/static/images/mot-logo.svg" className={classes.logo} />
              </ListItemIcon>
              <ListItemText primary="LA Metro Monitor" />
            </ListItem>
            <ListItem button onClick={this.handleClick}>
              <DirectionsTransitIcon className={classes.icon} />
              <ListItemText inset primary="Lines" />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open} timeout="auto" unmountOnExit>
              {links}
            </Collapse>
          </List>
        </Drawer>
        <div className={classes.mainContent}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(styles)(Layout);
