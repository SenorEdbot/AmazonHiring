import api from './api'

// TODO: Refactor Apply to use the service call here
export default {
  saveForm: (fName, lName, address, city, state, zip) => api.post('/form/')
}