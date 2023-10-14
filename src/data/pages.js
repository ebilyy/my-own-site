const homeData = require('./pages-data/home');
const aboutData = require('./pages-data/about');
const newsletterData = require('./pages-data/newsletter');
const articleData = require('./pages-data/article');
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
  },
  {
    path: 'article/index',
    view: `src/views/article/index.html`,
    data: articleData
  }
]

module.exports =  pages