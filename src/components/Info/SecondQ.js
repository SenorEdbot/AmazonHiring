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
    padding: '0px 10px 0px 16px'
  },
  answer: {
    marginTop: '5px'
  },
  boldList: {
    fontWeight: 'bold'
  }
})

class SecondQ extends Component {
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
                What is the starting pay?
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
              <li>The starting pay is $16/hour, with growth potential</li>
              <li className={classes.boldList}>Weekly Pay</li>
              <li>Overtime available if desired</li>
            </ul>
          </Grid>
        </Grid>
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(SecondQ)
