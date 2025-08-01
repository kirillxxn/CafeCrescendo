import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ParallaxProvider } from 'react-scroll-parallax'
createRoot(document.getElementById('root')!).render(
	<ParallaxProvider>
		<StrictMode>
			<App />
		</StrictMode>
	</ParallaxProvider>
)
