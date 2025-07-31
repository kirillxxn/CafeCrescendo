import './App.css'
import './assets/fonts/font.css'
import Menu from './components/Menu/Menu'
import { Parallax } from 'react-scroll-parallax'
import OurCafe from './components/OurCafe/OurCafe'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import OurStory from './components/OurStory/OurStory'

function App() {
	return (
		<>
			<Header />
			<Parallax scale={[0.962, 0.5]} opacity={[1, 0]} easing='easeInBack'>
				<HomePage />
			</Parallax>

			<Parallax speed={-13} easing='easeInQuad'>
				<Menu />
			</Parallax>
			<Parallax easing='easeInBack' opacity={[1, 0]}>
				<OurCafe />
			</Parallax>

			<OurStory />
		</>
	)
}

export default App
