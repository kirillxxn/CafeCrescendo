import sophiaImg from '/src/assets/team/Sophia.jpeg'
import roseImg from '/src/assets/team/Rose.jpeg'
import maksimImg from '/src/assets/team/Maksim.jpeg'
import katyaImg from '/src/assets/team/Katya.jpeg'
import raphaelImg from '/src/assets/team/Rafael.jpeg'
type TTeamList = {
	id: number
	name: string
	age: number
	image: string
}

const TeamList: TTeamList[] = [
	{
		id: 0,
		name: 'София',
		age: 24,
		image: sophiaImg,
	},
	{
		id: 1,
		name: 'Роза',
		age: 26,
		image: roseImg,
	},
	{
		id: 3,
		name: 'Максим',
		age: 27,
		image: maksimImg,
	},
	{
		id: 4,
		name: 'Катя',
		age: 22,
		image: katyaImg,
	},
	{
		id: 5,
		name: 'Рафаель',
		age: 28,
		image: raphaelImg,
	},
]
export default TeamList
