// rss-to-json npm package is used to fetch the RSS feed from Medium
const { parse } = require('rss-to-json')
function fetch(){
  let data = {}

parse('https://medium.com/feed/@alexander.galev').then((rss) => {
	data = rss
	console.log(data)})}
fetch()