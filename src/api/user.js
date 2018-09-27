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

export {
  listAll,
  insert
}
