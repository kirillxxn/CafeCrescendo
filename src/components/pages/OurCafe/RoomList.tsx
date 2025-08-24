import room0Img from '/src/assets/rooms/room1.jpg'
import room1Img from '/src/assets/rooms/room2.jpg'
import room2Img from '/src/assets/rooms/room3.jpg'
import room3Img from '/src/assets/rooms/room4.jpg'
import room4Img from '/src/assets/rooms/room5.jpg'
import room5Img from '/src/assets/rooms/room6.jpg'
import room6Img from '/src/assets/rooms/room7.jpg'
import room7Img from '/src/assets/rooms/room8.jpg'
import room8Img from '/src/assets/rooms/room9.jpg'
import room9Img from '/src/assets/rooms/room10.jpg'
type TRoomList = {
	id: number
	image: string
}
const RoomList: TRoomList[] = [
	{
		id: 0,
		image: room0Img,
	},
	{
		id: 1,
		image: room1Img,
	},
	{
		id: 2,
		image: room2Img,
	},
	{
		id: 3,
		image: room3Img,
	},
	{
		id: 4,
		image: room4Img,
	},
	{
		id: 5,
		image: room5Img,
	},
	{
		id: 6,
		image: room6Img,
	},
	{
		id: 7,
		image: room7Img,
	},
	{
		id: 8,
		image: room8Img,
	},
	{
		id: 9,
		image: room9Img,
	},
]
export default RoomList
