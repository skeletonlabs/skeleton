import { useState } from "react";
import Progress from "../../components/Progress/Progress";

export function Component() {

    const [value, setValue] = useState(50);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);

    return(
        <>
            <h1 className="h1">Progress</h1>

            <h2 className="h2">Controls</h2>

            <label className="label">
                <span className="label-text">Value</span>
                <input  className="input" type="number" value={value} onInput={(e) => setValue(e.currentTarget.valueAsNumber)} />
            </label>

            <label>
                <span className="label-text">Min</span>
                <input className="input" type="number" value={min} onInput={(e) => setMin(e.currentTarget.valueAsNumber)} />
            </label>

            <label>
                <span className="label-text">Max</span>
                <input className="input" type="number" value={max} onInput={(e) => setMax(e.currentTarget.valueAsNumber)} />
            </label>
            <Progress value={value} min={min} max={max} />
        </>
    );
}