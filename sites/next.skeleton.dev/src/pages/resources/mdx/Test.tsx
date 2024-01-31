'use client'

import React from 'react'

interface TestReactProps extends React.PropsWithChildren {
    name: string
}

export const TestReact: React.FC<TestReactProps> = ({ name = '', children }): React.ReactElement => {
    return (
        <div className="bg-blue-500 p-4">
            {children} - {name}
        </div>
    )
}
