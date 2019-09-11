import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { TextField } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: "0 auto"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginLeft: "18px",
    color: "black",
    textDecoration: "none",
  },
  logo: {
    maxWidth: 120,
  },
  rightJustify: {
    marginLeft: "auto",
  },
  appbarStyle: {
    background: '#ffffff',
  },
  navContainer: {
    margin: "0 auto",
    width: "80%",
  },
  paper: {
    position: 'absolute',
    // Centers the Modal
    // marginLeft: 'auto',
    // marginRight: 'auto',
    // left: 0,
    // right: 0,
    // Attempt #2 - which works correctly (top, left, transform)
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    width: 400,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3)
  },
  linkButtons: {
    fontSize: '16px',
    marginLeft: '8px'
  },
  applyButton: {
    fontSize: '16px',
    marginLeft: '8px',
    border: '3px solid black'
  },
  submitButton: {
    border: '2px solid black'
  },
  formTitle: {
    textAlign: 'center'
  },
})

const homeLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} />
))
const infoLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/info" {...props} />
))
const applyLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/apply" {...props} />
))

class Navbar extends Component {
  state = {
    open: false
  }

  handleOpen() {
    this.setState({
      open: true
    })
  }

  handleClose() {
    this.setState({
      open: false
    })
  }  
  
  render() {
    const { classes } = this.props
    // const img = <img style={{marginTop: 10}}src={process.env.PUBLIC_URL + '/assets/images/potentialLogo1_v1.png'} />
  
    return (
      <div>
        <AppBar position="fixed" className={classes.appbarStyle}>
          <div className={classes.navContainer}>
            <Toolbar>
              {/* <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <img src="../assets/images/potentialLogo1_v1.png" alt="Ninja Logistics" className={classes.logo} />
              <Typography variant="h3" className={classes.title} component={homeLink}>
                Ninja Logistics CO
              </Typography>
              <div className={classes.rightJustify}>
                <Button className={classes.linkButtons} id="info-button" component={infoLink}>FAQ</Button>
                <Button className={classes.linkButtons} id="call-button" onClick={this.handleOpen.bind(this)}>Schedule a Callback</Button>
                <Button className={classes.applyButton} id="apply-button" component={applyLink}>Apply</Button>
              </div>
            </Toolbar>
          </div>
        </AppBar>
        <Modal
          open={this.state.open}
          onClose={this.handleClose.bind(this)}
        >
            <Paper className={classes.paper}>
              <React.Fragment>
                <Typography variant="h6" className={classes.formTitle}>
                  Enter your phone number to receive a callback.
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="fullName"
                      name="fullName"
                      label="Full name"
                      fullWidth
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button id="submit-button" className={classes.submitButton}>Submit</Button>
                  </Grid>
                </Grid>
              </React.Fragment>
          </Paper>
        </Modal>
      </div>
    )
  }
}

export default withStyles(styles)(Navbar)
