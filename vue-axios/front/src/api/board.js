import http from './http'

async function store(title, content){
  return http.post('/board', {
    title,
    content
  })
}

export {
  store
}