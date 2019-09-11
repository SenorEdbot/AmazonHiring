import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import SloganSection from '../components/Home/SloganSection'
import WhatSection from '../components/Home/WhatSection'
import WhoSection from '../components/Home/WhoSection'
import WhereSection from '../components/Home/WhereSection'

const styles = theme => ({
  homeRoot: {
    flexGrow: "1",
  },
  paper: {
    textAlign: 'center',
  },
})

class Home extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.homeRoot}>
        <Grid container spacing={0}>
          <SloganSection />
          <WhoSection />
          <WhatSection />
          <WhereSection />
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Home)
