export interface TestProps {
	label: string;
}

const TestReact = (props: TestProps) => {
	return <button type="button" className="btn text-primary-500 bg-secondary-500">{props.label}</button>;
};

export default TestReact;