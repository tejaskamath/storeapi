
let splitUrl = function (str) {
  let split = str.split('/')
  let col = split[0]
  let data = JSON.parse((localStorage.getItem(col) || '[]'))
  return {split, col, data}
}

let uniqueID = function (n=8){
  function randStr(){
    return Math.random().toString(16).slice(-4);
  }
  return (new Array(n).fill(1).map(() => randStr()).join(''))
}

let find = function (url) {
  // eslint-disable-next-line no-unused-vars
  let {split, col, data} = splitUrl(url)
  if (url.includes('/')) {
    // Specific item 
    let id = split[1]
    return data.find(d => d.id === id)
  }
  return data
}

let post = function (url, obj) {
  // eslint-disable-next-line no-unused-vars
  let {split, col, data} = splitUrl(url)
  let newObj = {...obj, id: uniqueID()}
  data.push(newObj)
  localStorage.setItem(col, JSON.stringify(data))
  return data
}

let del = function (url) {
  // eslint-disable-next-line no-unused-vars
  let {split, col, data} = splitUrl(url)
  if (url.includes('/')) {
    // Specific item 
    let id = split[1]
    data = data.filter(d => d.id !== id)
  } else {
    data = []
  }
  localStorage.setItem(col, JSON.stringify(data))
  return data
}

let put = function (url, obj) {
  // eslint-disable-next-line no-unused-vars
  let {split, col, data} = splitUrl(url)
  if (url.includes('/')) {
    // Specific item 
    let id = split[1]
    let ix = data.findIndex(d => d.id == id)
    data.splice(ix, 1, {...obj, id})
  }
  localStorage.setItem(col, JSON.stringify(data))
  return data
}

let patch = function (url, obj) {
  // eslint-disable-next-line no-unused-vars
  let {split, col, data} = splitUrl(url)
  if (url.includes('/')) {
    // Specific item 
    let id = split[1]
    let ix = data.findIndex(d => d.id == id)
    let d = data[ix]
    obj = {...d, ...obj}
    data.splice(ix, 1, obj)
  }
  localStorage.setItem(col, JSON.stringify(data))
  return data
}

let setVar = function (key, val) {
  localStorage.setItem(key, JSON.stringify(val))
  return JSON.stringify(val)
}

let getVar = function (key) {
  return JSON.parse(localStorage.getItem(key))
}

exports.setVar = setVar
exports.getVar = getVar
exports.get = find
exports.post = post
exports.patch = patch
exports.put = put
exports.delete = del