import './App.css'
import './assets/fonts/font.css'
import HeaderAndHome from './components/Head&Home/Head&Home'
import Menu from './components/Menu/Menu'
import { Parallax } from 'react-scroll-parallax'
import OurCafe from './components/OurCafe/OurCafe'

function App() {
	return (
		<>
			<Parallax
				translateX={['0px', '0px']}
				scale={[0.9168, 1.287]}
				rotate={[0, 0]}
				easing='easeInQuad'
			>
				<HeaderAndHome />
			</Parallax>

			<Parallax speed={-30} shouldAlwaysCompleteAnimation={false}>
				<Menu />
			</Parallax>
			<Parallax
				translateX={['0px', '0px']}
				scale={[0.1, 1]}
				rotate={[0, 0]}
				easing='easeInQuad'
			>
				<OurCafe />
			</Parallax>
		</>
	)
}

export default App
