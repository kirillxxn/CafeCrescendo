import styles from './Preloader.module.css'
const Preolader = () => {
	return (
		<>
			<div className={styles['spinner-container']}>
				<span className={styles['spinner-text']}>Загрузка</span>
				<div className={styles['spinner']}></div>
			</div>
		</>
	)
}
export default Preolader
