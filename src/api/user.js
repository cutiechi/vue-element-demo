import request from './request'

const listAll = () => request({
  url: '/users'
})

const insert = data => request({
  url: '/users',
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  data
})

const deleteById = userId => request({
  url: '/users/' + userId,
  method: 'delete'
})

const update = data => request({
  url: '/users/' + data.userId,
  method: 'put',
  data
})

export {
  listAll,
  insert,
  deleteById,
  update
}
