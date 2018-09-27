import { listAll, insert, deleteById, update } from '../../api/user'

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
  },
  async deleteById ({ commit }, userId) {
    await deleteById(userId)
    await this.dispatch('listAll')
  },
  async update ({ commit }, user) {
    await update(user)
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
