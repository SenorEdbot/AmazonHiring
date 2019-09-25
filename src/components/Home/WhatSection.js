import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  bkgColor: {
    backgroundColor: '#f1f1f1'
  },
  container: {
    paddingTop: '4vh',
    margin: "0 auto",
    width: "65%",
    textAlign: 'right',
    marginBottom: '2vh'
  },
  titleType: {
    color: 'red'
  },
  title: {
    color: 'black'
  },
  description: {
    color: 'black'
  },
  articlePhoto: {
    maxWidth: '100%'
  },
})

class WhatSection extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid item xs={12} className={classes.bkgColor}>
        <div className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <img src="../assets/images/vehicle.png" alt="Amazon Van" className={classes.articlePhoto} />
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.titleType} variant='h5'>
                What
              </Typography>
              <Typography className={classes.title} variant='h3'>
                Amazon Van Driver
              </Typography>
              <Typography className={classes.description} variant='p'>
                We will be delivering packages from Amazon Distribution Center to customer's homes. Each day Amazon will load the vans at the distribution center, after they are loaded we will drive the packages to their final locations. We will also use the Amazon App to track and take a photo of the item for the customer.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(WhatSection)
