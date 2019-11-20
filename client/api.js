import request from 'superagent'

const apiURL = 'http://localhost:3000/api/v1'

export function getUser (id) {
  return request.get(`${apiURL}/${id}`)
}