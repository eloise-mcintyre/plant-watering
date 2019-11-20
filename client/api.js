import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1'

export function getUser (id) {
  return request.get(`${apiURL}/${id}`)
}

export function postUser (name) {
  console.log(name)
  return request.post(`${apiURL}/${name}`)
}
