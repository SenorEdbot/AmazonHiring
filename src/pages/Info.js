import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import FirstQ from '../components/Info/FirstQ'
import SecondQ from '../components/Info/SecondQ'
import ThirdQ from '../components/Info/ThirdQ'
import FourthQ from '../components/Info/FourthQ'

const styles = theme => ({
  infoRoot: {
    flexGrow: "1",
    textAlign: "center",
    paddingTop: '5vh'
  },
  container: {
    margin: "0 auto",
    width: "65%",
  },
  paper: {
    textAlign: 'center',
  },
})
class Info extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.infoRoot}>
        <div className={classes.container}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Typography variant="h2">
                Frequently Asked Questions(FAQ)
              </Typography>
            </Grid>
            <FirstQ />
            <SecondQ />
            <ThirdQ />
            <FourthQ />
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Info)
