import { Component } from 'react'
// import {Card} from './Card'
import Card from './Card'
import TopBar from './TopBar'

class App extends Component {
	render() {
		return (
			<div className="app">
				<TopBar>
					<div>
						<h1>Hello React</h1>
						<h2>Hello React</h2>
					</div>
				</TopBar>

				<h1 className="headline white-text">I am the main Application</h1>

				<Card subject="people" action="meet" />
				{/* <Card subject="friends" something="value of sorts" /> */}
			</div>
		)
	}
}

export default App

// import Card from './Card'
// import TopBar from './TopBar'

// const App = () => (
// 	<div className="app">
// 		<TopBar />
// 		<h1 className="headline white-text">I am the main Application</h1>
// 		<Card action="meet" subject="friends" />
// 	</div>
// ) 
// export default App
