import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import axios from 'axios'

const styles = theme => ({
  applyRoot: {
    flexGrow: "1",
    textAlign: "center",
    paddingTop: '5vh'
  },
  container: {
    margin: "0 auto",
    width: "65%",
  },
  paper: {
    padding: '10px'
  },
  submitButton: {
    border: '2px solid black'
  }
})

class Apply extends Component {
  constructor() {
    super()

    this.state = {
      fName: '',
      lName: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()

    const { fName, lName, address, city, state, zip } = this.state

    const form = await axios.post('https://alex-and-eddie-server.herokuapp.com/api/form', {
      fName,
      lName,
      address,
      city,
      state,
      zip
    })

    // ES Lint Purposes
    console.log(form)

    this.setState({
      fName: '',
      lName: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.applyRoot}>
        <div className={classes.container}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              {/* Paper is the white 'container' I have everything group within */}
              <Paper className={classes.paper}>
                <React.Fragment>
                  <Typography variant="h6" gutterBottom>
                    Apply Now
                  </Typography>
                  <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="fName"
                        name="fName"
                        label="First name"
                        fullWidth
                        onChange={this.handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        id="lName"
                        name="lName"
                        label="Last name"
                        fullWidth
                        onChange={this.handleChange}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        required
                        id="address"
                        name="address"
                        label="Address line 1"
                        fullWidth
                        onChange={this.handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="city"
                        name="city"
                        label="City"
                        fullWidth
                        onChange={this.handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="state"
                        name="state"
                        label="State/Province/Region"
                        fullWidth
                        onChange={this.handleChange}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <TextField
                        required
                        id="zip"
                        name="zip"
                        label="Zip / Postal code"
                        fullWidth
                        onChange={this.handleChange}
                      />
                    </Grid>

                    {/* <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                        label="Use this address for payment details"
                      />
                    </Grid> */}

                    <Grid item xs={12}>
                      <Button onClick={this.handleSubmit} className={classes.submitButton}>Submit</Button>
                    </Grid>

                  </Grid>
                </React.Fragment>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Apply)
