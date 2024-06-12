import { useState } from "react"
import { Rating } from "../../lib/components/Rating/Rating"
import { Bone, Skull, Star } from "lucide-react"

function StaticRatings(value: number) {
    return(
        <div className="flex items-center gap-8">
            <div className="w-48">
                <Rating value={value}>
                    <Rating.IconEmpty>
                        <Star size={24} />
                    </Rating.IconEmpty>
                    <Rating.IconFull>
                        <Star size={24} fill="white" />
                    </Rating.IconFull>
                </Rating>
            </div>
            <h3 className="h3">{value}</h3>
        </div>
    )
}

function CustomIcons(value: number, setValue: React.Dispatch<React.SetStateAction<number>>) {
    return(
        <>
            <section className="space-y-4">
                <h2 className="h2">Custom Icons</h2>
                <div className="flex items-center gap-8">
                    <div className="w-48">
                        <Rating value={value} interactive onValueChange={(val) => setValue(val)}>
                            <Rating.IconEmpty>
                                <Bone size={24} />
                            </Rating.IconEmpty>
                            <Rating.IconFull>
                                <Skull size={24} />
                            </Rating.IconFull>
                        </Rating>
                    </div>
                    <h3 className="h3">{value.toFixed(2)}</h3>
                </div>
            </section>
        </>
    )
}


function InteractiveRating(value: number, setValue: React.Dispatch<React.SetStateAction<number>>) {
    return(
        <>
            <section className="space-y-4">
                <h2 className="h2">Interactive</h2>
                <div className="flex items-center gap-8">
                    <div className="w-48">
                        <Rating value={value} interactive onValueChange={(val) => setValue(val)}>
                            <Rating.IconEmpty>
                                <Star size={24} />
                            </Rating.IconEmpty>
                            <Rating.IconFull>
                                <Star size={24} fill="white" />
                            </Rating.IconFull>
                        </Rating>
                    </div>
                    <h3 className="h3">{value.toFixed(2)}</h3>
                </div>
            </section>
        </>
    )
}

function Steps(step:number, value: number, setValue: React.Dispatch<React.SetStateAction<number>>) {
    return(
        <>
            <div className="flex items-center gap-8">
                <div className="w-48">
                    <Rating value={value} step={step} interactive onValueChange={(val) => setValue(val)}>
                        <Rating.IconEmpty>
                            <Star size={24} />
                        </Rating.IconEmpty>
                        <Rating.IconFull>
                            <Star size={24} fill="white" />
                        </Rating.IconFull>
                    </Rating>
                </div>
                <h3 className="h3">{value.toFixed(2)}</h3>
            </div>
        </>
    )
}

function RTL(value: number, setValue: React.Dispatch<React.SetStateAction<number>>) {
    return(
        <>
            <section className="space-y-4">
                <h2 className="h2">RTL</h2>
                <div className="flex items-center gap-8">
                    <div className="w-48" dir="rtl">
                        <Rating value={value} step={2} interactive onValueChange={(val) => setValue(val)}>
                            <Rating.IconEmpty>
                                <Star size={24} />
                            </Rating.IconEmpty>
                            <Rating.IconFull>
                                <Star size={24} fill="white" />
                            </Rating.IconFull>
                        </Rating>
                    </div>
                    <h3 className="h3">{value.toFixed(2)}</h3>
                </div>
            </section>
        </>
    )
}

export function Component() {
    const [interactiveValue, setInteractiveValue] = useState(3);
    return(
        <>
            <div className="space-y-10">
                <header>
                    <h1 className="h1">Ratings</h1>
                </header>

                <section className="space-y-4">
                    {StaticRatings(5)}
                    {StaticRatings(0)}
                    {StaticRatings(2.5)}
                    {StaticRatings(3.75)}
                    {StaticRatings(1.25)}
                </section>

                {CustomIcons(interactiveValue, setInteractiveValue)}
                {InteractiveRating(interactiveValue, setInteractiveValue)}

                <section className="space-y-4">
                    <h2 className="h2">Steps</h2>
                    {Steps(2, interactiveValue, setInteractiveValue)}
                    {Steps(3, interactiveValue, setInteractiveValue)}
                </section>

                {RTL(interactiveValue, setInteractiveValue)}
            </div>
        </>
    )
}