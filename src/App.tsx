import './App.css'
import './assets/fonts/font.css'
/* import HeaderAndHome from './components/Head&Home/Head&Home' */
import Menu from './components/Menu/Menu'
import { Parallax } from 'react-scroll-parallax'
import OurCafe from './components/OurCafe/OurCafe'
import Header from './components/Head&Home/Header/Header'
import HomePage from './components/Head&Home/HomePage/HomePage'

function App() {
	return (
		<>
			<Header />
			<Parallax scale={[0.961, 0.5]} opacity={[1, 0]} easing='easeInBack'>
				<HomePage />
			</Parallax>

			<Parallax speed={-14} easing='easeIn'>
				<Menu />
			</Parallax>
			<Parallax
				translateX={['0px', '0px']}
				scale={[0.9, 1]}
				rotate={[0, 0]}
				easing='easeIn'
				speed={10}
			>
				<OurCafe />
			</Parallax>
		</>
	)
}

export default App
