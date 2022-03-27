import {
	LocationProvider,
	Router,
	Route,
	lazy,
	ErrorBoundary,
	hydrate,
	prerender as ssr,
} from 'preact-iso';
import Home from './pages/home';
import NotFound from './pages/_404.js';
import Header from './header';

const About = lazy(() => import('./pages/about'));

export function App() {
	return (
		<LocationProvider>
			<div class="app">
				<Header />
				<ErrorBoundary>
					<Router>
						<Route path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route default component={NotFound} />
					</Router>
				</ErrorBoundary>
			</div>
		</LocationProvider>
	);
}

hydrate(<App />);

export async function prerender() {
	return await ssr(<App />);
}

// If need to pass props, do so like this:
// export async function prerender(data: any) {
// 	return await ssr(<App {...data} />);
// }
