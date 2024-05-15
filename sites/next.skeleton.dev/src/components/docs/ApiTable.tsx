import React from 'react';

/** Create a Table to display API Reference information. */
export const ApiTable: React.FC<any> = (props) => {
	return <pre className="pre">{JSON.stringify(props.schema, null, 2)}</pre>;
};
