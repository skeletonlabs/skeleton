import React from 'react'

export const FrameworkPicker: React.FC<any> = (props) => {
    const [activeTab, setActiveTab] = React.useState(props.selected || 'react')
    const baseClasses = 'font-bold py-2 px-4 border-b-[3px] border-transparent capitalize'

    // prettier-ignore
    const tabs = [
        props.react,
        props.svelte,
        props.vue
    ].filter((framework) => framework !== undefined)

    function activeClass(framework: string) {
        if (activeTab === framework) return '!border-surface-950-50'
    }

    return (
        <div className="space-y-4">
            <nav className="flex gap-4 border-b-[1px] border-surface-200-800">
                {tabs.map((tab: any) => {
                    return (
                        <button
                            key={tab.props.name}
                            className={`${baseClasses} ${activeClass(tab.props.name)}`}
                            onClick={() => setActiveTab(tab.props.name)}
                        >
                            {tab.props.name}
                        </button>
                    )
                })}
            </nav>
            <div className="docs-card-outlined-centered p-8">
                {tabs.map((tab: any) => {
                    return activeTab === tab.props.name && <div key={tab.props.name}>{props[tab.props.name]}</div>
                })}
            </div>
        </div>
    )
}
