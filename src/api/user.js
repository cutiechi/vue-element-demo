import request from './request'

const listAll = () => request({
  url: '/users'
})

export {
  listAll
}
