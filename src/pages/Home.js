import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';

export default function Home() {
	return (
		<div className='app'>
			{/* <div> */}
				<Landing />
				<Projects count={2} />
			{/* </div> */}
		</div>
	)
}