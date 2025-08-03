import './assets/fonts/font.css'
import Menu from './components/Menu/Menu'
import { Parallax } from 'react-scroll-parallax'
import OurCafe from './components/OurCafe/OurCafe'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import OurStory from './components/OurStory/OurStory'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './App.module.css'
import OurTeam from './components/OurTeam/OurTeam'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
function App() {
	const [notificationVisible, setNotificationVisible] = useState(false)
	const notificationRef = useRef<null>(null)

	const handleBasket = () => {
		setNotificationVisible(true)
		setTimeout(() => {
			setNotificationVisible(false)
		}, 1500)
	}

	return (
		<>
			<Toaster position='top-right' toastOptions={{ duration: 3000 }} />
			<Header />
			<Parallax scale={[0.962, 0.5]} opacity={[1, 0]} easing='easeInBack'>
				<HomePage />
			</Parallax>
			<Parallax speed={-12} easing='easeInQuad'>
				<Menu onAddToBasket={handleBasket} />
			</Parallax>
			<Parallax easing='easeInBack' opacity={[1, 0]}>
				<OurCafe />
			</Parallax>
			<Parallax
				easing='easeInQuad'
				scale={[1, 0.5]}
				speed={-5}
				opacity={[1, 0]}
			>
				<OurStory />
			</Parallax>

			<CSSTransition
				in={notificationVisible}
				timeout={300}
				classNames={{
					enter: styles['notify-enter'],
					enterActive: styles['notify-enter-active'],
					exit: styles['notify-exit'],
					exitActive: styles['notify-exit-active'],
				}}
				nodeRef={notificationRef}
				unmountOnExit
			>
				<span ref={notificationRef} className={styles.notification}>
					В корзине
				</span>
			</CSSTransition>
			<Parallax
				easing='easeInQuad'
				scale={[1, 0.5]}
				speed={-5}
				opacity={[1, 0]}
			>
				<OurTeam />
			</Parallax>

			<Contacts />
			<Footer />
		</>
	)
}

export default App
