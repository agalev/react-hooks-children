import React from 'react'
import Container from './Container'
import data from './fetch.js'
// rss-to-json npm package is used to fetch the RSS feed from Medium
// const { parse } = require('rss-to-json')

function App() {
  // console.log(data)
	// Fetch the RSS feed from Medium
	// useEffect(() => {
	// 	fetch('https://dev.to/api/articles?username=olawanle_joel', {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 			'Access-Control-Allow-Origin': '*',
	// 			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	// 			'Access-Control-Allow-Headers':
	// 				'Origin, Content-Type, Accept, Authorization, X-Request-With'
	// 		}
	// 	})
	// 		.then((rss) => {
	// 			console.log(rss)
	// 		})
	// 		.catch((err) => console.log(err))
	// }, [])
	return (
		<div className='App'>
			<Container header='Example header' direction='horizontal'>
				<div>This is an example!</div>
				<div>This is an example!</div>
				<div>This is an example!</div>
				<div>This is an example!</div>
				<div>This is an example!</div>
				<div>This is an example!</div>
				<div>This is an example!</div>
			</Container>
			<Container header='Example header' textPosition='center'>
				<img
					alt='turtle'
					src='https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'
				/>
				<img
					alt='turtle'
					src='https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'
				/>
				<img
					alt='turtle'
					src='https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'
				/>
				<img
					alt='turtle'
					src='https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'
				/>
			</Container>
		</div>
	)
}

export default App
