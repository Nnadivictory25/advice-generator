import { useEffect, useState } from 'react';
import axios, { CanceledError } from 'axios';
import Advice from './components/Advice';
import Card from './components/Card';
import GeneratorBtn from './components/GeneratorBtn';

export interface AdviceQuery {
	id: number;
	advice: string;
}

function App() {
	const [query, setQuery] = useState({} as AdviceQuery);
	const [error, setError] = useState('');

	const generateQuote = () => {
		const controller = new AbortController();

		axios
			.get('https://api.adviceslip.com/advice', { signal: controller.signal })
			.then((res) => {
				setQuery(res.data.slip);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
			});

		return () => controller.abort();
	};

	useEffect(() => {
		generateQuote();
	}, []);

	if (error)
		return (
			<p className='text-red-400'>An error occured, please refresh page</p>
		);

	return (
		<Card>
			<Advice {...query} />
			<GeneratorBtn onClick={generateQuote} />
		</Card>
	);
}

export default App;
