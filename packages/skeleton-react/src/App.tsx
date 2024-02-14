import './App.css'
import { TestReact } from './lib/';

function App() {

	return (
		<>
			<h1>Skeleton - React</h1>
			<div className="card">
				<p className="bg-primary-500">
					This is the static HTML in the App.tsx
				</p>
			</div>
			<TestReact label='Hello World from @skeletonlabs/react' />
		</>
	)
}

export default App
