function validateUsr(username) {
  res =  //regex here/.test(username) 
    /(^[a-z0-9_]{4,16})/g.test(username)
  return res
}