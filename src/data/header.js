const homeData = require('./pages-data/home')
const aboutData = require('./pages-data/about')
const pages = [
  {
    path: 'index',
    view: `src/views/home/index.html`,
    data: homeData
  },
  {
    path: 'about/index',
    view: `src/views/about/index.html`,
    data: aboutData
  }
]

module.exports =  pages