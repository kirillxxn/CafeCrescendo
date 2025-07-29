import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import styles from './Head&Home.module.css'

const HeaderAndHome = () => {
	return (
		<>
			<div className={styles['header-and-home']}>
				<Header />
				<HomePage />
			</div>
		</>
	)
}
export default HeaderAndHome
