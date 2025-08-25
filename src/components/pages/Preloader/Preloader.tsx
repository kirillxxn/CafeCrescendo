import styles from './Preloader.module.css'
type TPreloader = {
	component?: string
}
const Preloader = ({ component }: TPreloader) => {
	return (
		<div className={styles['preloader']}>
			<span className={styles['preloader__text']}>
				{component || 'Загрузка'}
			</span>
			<div className={styles['preloader__spinner']}></div>
		</div>
	)
}
export default Preloader
