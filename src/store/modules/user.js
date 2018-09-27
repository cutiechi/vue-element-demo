import { listAll, insert } from '../../api/user'

const state = {
  users: []
}

const actions = {
  async listAll ({ commit }) {
    const { data: users } = await listAll()
    commit('SET_USERS', users)
  },
  async insert ({ commit }, userForm) {
    await insert(userForm)
    await this.dispatch('listAll')
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
