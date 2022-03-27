import { useEffect, useState } from 'preact/hooks';
import { getForecast  } from '../../services/weather';
import styles from './style.module.scss';

const About = () => {
	const [query, setQuery] = useState<any>({});

	useEffect(() => {
		getForecast().then(data => {
			console.log(data);
			setQuery(data);
		});
	}, []);

	return (
		<section class={styles.about}>
			<h1>About</h1>
			<p>A page all about this website.</p>
			<pre>{JSON.stringify(query)}</pre>
		</section>
	)
};

export default About;
