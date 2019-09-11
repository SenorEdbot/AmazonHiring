import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  questionBkg: {
    backgroundColor: "#f1f1f1",
    textAlign: "left",
    marginTop: '4vh',
    padding: '15px 10px 15px 16px'
  },
  question: {
    fontWeight: 'bold',
    color: 'red'
  },
  answerBkg: {
    backgroundColor: "#ffffff",
    textAlign: 'left',
    marginTop: '1vh',
    marginBottom: '5vh',
    padding: '0px 10px 0px 16px'
  },
  answer: {
    marginTop: '5px'
  },
})

class FourthQ extends Component {
  render() {
    const { classes } = this.props
    return (
      <Grid item xs={12}>
        <div className={classes.questionBkg}>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="h4" className={classes.question}>
                Q.
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h4" className={classes.question}>
                What does a work day/week look like?
              </Typography>
            </Grid>
          </Grid>
        </div>
        <div className={classes.answerBkg}>
        <Grid container>
          <Grid item xs={2}>
            <Typography variant="h4">
              A.
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <ul>
              <li>Average 10 hours per day</li>
              <ul>
                <li>3 day work week to be eligible for benefits</li>
                <li>4 day work week to full-time</li>
                <li>5 day work week for overtime</li>
              </ul>
              <li>Driving the Amazon delivery van</li>
              <li>Delivering packages from the van to customer's homes</li>
            </ul>
          </Grid>
        </Grid>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(FourthQ)
