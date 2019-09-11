import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  bkgColor: {
    backgroundColor: '#c4c4c4',
    height: '20vh'
  },
  container: {
    paddingTop: '3vh',
    margin: "0 auto",
    width: "65%",
  },
  titleType: {
    color: 'red',
    fontWeight: 'bold'
  },
  title: {
    color: 'black'
  },
  logoPhoto: {
    maxWidth: '100%',
    width: '100px'
  },
  leftColumn: {
    textAlign: 'left'
  },
  rightColumn: {
    textAlign: 'center'
  },
  applyButton: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '30px',
    border: '3px solid black',
  }
})

const applyLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/apply" {...props} />
))

class Footer extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid item xs={12} className={classes.bkgColor}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <div className={classes.leftColumn}>
                <img src="../assets/images/potentialLogo1_v1.png" alt="Ninja Logistics Logo" className={classes.logoPhoto} />
                <Typography className={classes.title} variant='h6'>
                  Ninja Logistics CO
                </Typography>
                <Typography className={classes.title} variant='subtitle1'>
                  111 R St, Loveland, CO 80538
                </Typography>
              </div>
            </Grid>
            <Grid item xs={9} className={classes.rightColumn}>
              <div className={classes.rightColumn}>
                <Typography className={classes.titleType} variant='h4'>
                  Are you the next Ninja? Join our dojo today!
                </Typography>
                <Button className={classes.applyButton} id="apply-button" component={applyLink}>Apply Now</Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(Footer)
