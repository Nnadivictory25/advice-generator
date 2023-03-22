import dice from '../assets/icon-dice.svg';

interface Props {
    onClick: () => void;
}

const GeneratorBtn = ({onClick}: Props) => {
	return (
		<div onClick={onClick} id='genBtn' className='rounded-full bg-neonGreen h-[50px] w-[50px] items-center absolute cursor-pointer flex justify-center'>
			<button>
				<img src={dice} />
			</button>
		</div>
	);
};

export default GeneratorBtn;
