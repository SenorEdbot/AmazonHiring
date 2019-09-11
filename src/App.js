import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
// import logo from './logo.svg';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Apply from "./pages/Apply"
import Info from "./pages/Info"
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

const styles = theme => ({
  navBarRoot: {
    margin: "0 auto",
    flexGrow: "1"
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '20vh'
  },
  pageWrapper: {
    position: 'relative',
    minHeight: '100vh'
  },
  contentWrap: {
    paddingBottom: '20vh'
  }
})
class App extends Component {
  render() {
    const { classes } = this.props

    return (
      <Router>
        <div className={classes.pageWrapper}>
          <div className={classes.contentWrap}>
            <div className={classes.navBarRoot}>
              <Navbar />
            </div>
            {/* The toolbar is what adds the spacing necessary to stop the navbar from overlapping everything */}
            <Toolbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/info" component={Info} />
              <Route exact path="/apply" component={Apply} />
            </Switch>
          </div>
          <div className={classes.footer}>
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}

export default withStyles(styles)(App);
