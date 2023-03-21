import { AdviceQuery } from '../App';
import useAdvice from '../hooks/useAdvice';
import line from '../assets/pattern-divider-desktop.svg'

const Advice = (adviceQuery: AdviceQuery) => {
	const { data, error } = useAdvice(adviceQuery);

	return (
		<>
			<p className='text-neonGreen text-xs font-extrabold'>ADVICE #{data.id}</p>
            <p className='text-white text-xl'>"{data.advice}"</p>
            <div id="divider">
            <img src={line} />
            </div>
		</>
	);
};

export default Advice;
