import React from 'react'

export const FrameworkPicker: React.FC<any> = ({ selected, svelte, react }) => {
    const [activeTab, setActiveTab] = React.useState(selected)
    const baseClasses = 'font-bold py-2 px-4 border-b-[3px] border-transparent'

    function activeClass(framework: string) {
        if (activeTab === framework) return '!border-surface-950-50'
    }

    return (
        <div className="space-y-4">
            <nav className="flex gap-4 border-b-[1px] border-surface-200-800">
                <button className={`${baseClasses} ${activeClass('svelte')}`} onClick={() => setActiveTab('svelte')}>
                    Svelte
                </button>
                <button className={`${baseClasses} ${activeClass('react')}`} onClick={() => setActiveTab('react')}>
                    React
                </button>
            </nav>
            <div className="docs-card-outlined-centered p-8">
                {activeTab === 'svelte' && <div>{svelte}</div>}
                {activeTab === 'react' && <div>{react}</div>}
            </div>
        </div>
    )
}
