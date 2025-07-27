import './App.css'
import './assets/fonts/font.css'
import HeaderAndHome from './components/Head&Home/Head&Home'
import Menu from './components/Menu/Menu'
import { ScrollParallax } from 'react-just-parallax'

function App() {
	return (
		<>
			<ScrollParallax>
				<HeaderAndHome />
			</ScrollParallax>

			<ScrollParallax>
				<Menu />
			</ScrollParallax>
		</>
	)
}

export default App
