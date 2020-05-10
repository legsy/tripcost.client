import axios from 'axios'

export default {
  getTrips(params) {
    return axios.get('/trips', {
      params
    })
  },
  editTrips(id, payload) {
    return axios.patch(`/trips/${id}`, payload)
  },
  saveTrip(payload) {
    return axios.post('/trips/', payload)
  },
  deleteTrip(id) {
    return axios.delete(`/trips/${id}`)
  }
}
