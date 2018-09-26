import { listAll } from '../../api/user'

const state = {
  users: []
}

const actions = {
  async listAll ({ commit }) {
    const { data: users } = await listAll()
    commit('SET_USERS', users)
  }
}

const mutations = {
  SET_USERS (state, users) {
    state.users = users
  }
}

export default {
  state,
  actions,
  mutations
}
