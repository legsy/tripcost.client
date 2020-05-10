import * as types from '@/store/mutation-types'
import api from '@/services/api/trips'
import { buildSuccess, handleError } from '@/utils/utils.js'

const getters = {
  items: (state) => state.items,
  totalItems: (state) => state.itemsCount
}

const actions = {
  getTrips({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .getTrips(payload)
        .then((response) => {
          if (response.status === 200) {
            commit(types.ITEMS, response.data.docs)
            commit(types.TOTAL_ITEMS, response.data.totalDocs)
            resolve()
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  editTrip({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const data = {
        name: payload.name,
        adultCount: payload.adultCount,
        childrenCount: payload.childrenCount,
        cost: payload.cost,
        city: payload.city,
        startDate: payload.startDate
      }
      api
        .editTrip(payload._id, data)
        .then((response) => {
          if (response.status === 200) {
            buildSuccess(
              {
                msg: 'common.SAVED_SUCCESSFULLY'
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  saveTrip({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .saveTrip(payload)
        .then((response) => {
          if (response.status === 201) {
            buildSuccess(
              {
                msg: 'common.SAVED_SUCCESSFULLY'
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  },
  deleteTrip({ commit }, payload) {
    return new Promise((resolve, reject) => {
      api
        .deleteTrip(payload)
        .then((response) => {
          if (response.status === 200) {
            buildSuccess(
              {
                msg: 'common.DELETED_SUCCESSFULLY'
              },
              commit,
              resolve
            )
          }
        })
        .catch((error) => {
          handleError(error, commit, reject)
        })
    })
  }
}

const mutations = {
  [types.ITEMS](state, value) {
    state.items = value
  },
  [types.TOTAL_ITEMS](state, value) {
    state.totalItems = value
  }
}

const state = {
  items: [],
  totalItems: 0
}

export default {
  state,
  getters,
  actions,
  mutations
}
