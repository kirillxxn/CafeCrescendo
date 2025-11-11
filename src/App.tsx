import './assets/fonts/font.css'
import { lazy, Suspense } from 'react'
import Menu from './components/pages/Menu/Menu'
import { Parallax } from 'react-scroll-parallax'
import OurCafe from './components/pages/OurCafe/OurCafe'
import Header from './components/pages/Header/Header'
import HomePage from './components/pages/HomePage/HomePage'
import OurStory from './components/pages/OurStory/OurStory'
import { useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './App.module.css'
import OurTeam from './components/pages/OurTeam/OurTeam'
const Contacts = lazy(() => import('./components/pages/Contacts/Contacts'))
const Footer = lazy(() => import('./components/pages/Footer/Footer'))
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
	interface NavigatorWithMS extends Navigator {
		msMaxTouchPoints?: number
	}

	function isTouchDevice(): boolean {
		if (typeof window === 'undefined') return false

		const nav = navigator as NavigatorWithMS

		return (
			'ontouchstart' in window ||
			nav.maxTouchPoints > 0 ||
			(nav.msMaxTouchPoints ?? 0) > 0
		)
	}
	return (
		<>
			<Toaster position='top-right' toastOptions={{ duration: 3000 }} />
			<Header />
			<Parallax scale={[0.962, 0.5]} opacity={[1, 0]} easing='easeInBack'>
				<HomePage />
			</Parallax>
			<Parallax speed={-6} easing='easeInQuad'>
				<Menu onAddToBasket={handleBasket} />
			</Parallax>
			<Parallax
				disabled={isTouchDevice()}
				speed={-2}
				easing='easeInBack'
				opacity={[1, 0]}
			>
				<OurCafe />
			</Parallax>
			<Parallax
				disabled={isTouchDevice()}
				easing='easeInQuad'
				scale={[1, 0.6]}
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
				disabled={isTouchDevice()}
				easing='easeInQuad'
				scale={[1, 0.5]}
				speed={-5}
				opacity={[1, 0]}
			>
				<OurTeam />
			</Parallax>
			<Suspense fallback={null}>
				<Contacts />
				<Footer />
			</Suspense>
		</>
	)
}

export default App
