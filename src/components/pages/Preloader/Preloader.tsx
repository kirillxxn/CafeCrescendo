import styles from './Preloader.module.css'
const Preloader = () => {
	return (
		<div className={styles['preloader']}>
			<span className={styles['preloader__text']}>Загрузка</span>
			<div className={styles['preloader__spinner']}></div>
		</div>
	)
}
export default Preloader
