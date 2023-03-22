import line from '../assets/pattern-divider-desktop.svg';
import { AdviceQuery } from '../App';

const Advice = ({ id, advice }: AdviceQuery) => {
	return (
		<>
			<p className='text-neonGreen text-xs font-extrabold'>ADVICE #{id}</p>
			<p className='text-white text-xl'>"{advice}"</p>
			<div id='divider'>
				<img src={line} />
			</div>
		</>
	);
};

export default Advice;
