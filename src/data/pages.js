const homeData = require('./pages-data/home')
const aboutData = require('./pages-data/about')
const newsletterData = require('./pages-data/newsletter')
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
  },
  {
    path: 'newsletter/index',
    view: `src/views/newsletter/index.html`,
    data: newsletterData
  }
]

module.exports =  pages