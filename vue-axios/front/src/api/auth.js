import http from './http'

async function login(userid, password){
  return http.post('/login', {userid, password})
}

export {
  login
}