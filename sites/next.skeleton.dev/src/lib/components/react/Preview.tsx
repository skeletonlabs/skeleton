import React from 'react'

/** Create preview/code tabs for showcasing features. */
export const Preview: React.FC<any> = (props) => {
    const [selected, setSelected] = React.useState(props.selected || 'preview')
    const cTab = 'font-bold py-2 px-4 border-b-[3px] border-transparent capitalize'

    function selectedClass(tab: string) {
        if (tab === selected) return '!border-surface-950-50'
    }

    return (
        <div className="space-y-4">
            {/* Tabs */}
            <nav className="flex gap-4 border-b-[1px] border-surface-200-800">
                <button className={`${cTab} ${selectedClass('preview')}`} onClick={() => setSelected('preview')}>
                    Preview
                </button>
                <button className={`${cTab} ${selectedClass('code')}`} onClick={() => setSelected('code')}>
                    Code
                </button>
            </nav>
            {/* Preview */}
            <div className={`docs-card-outlined-centered p-8 ${selected !== 'preview' && '!hidden'}`}>{props.preview}</div>
            {/* Codeblock */}
            <div className={selected === 'code' ? 'block' : 'hidden'}>{props.code}</div>
        </div>
    )
}
