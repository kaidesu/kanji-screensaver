import { useState, useEffect } from 'react'
import kanji from './kanji.json'

const colors = [
    {
        "bg": "from-red-700 to-red-500",
        "fg": "text-red-200"
    },
    {
        "bg": "from-sky-700 to-sky-500",
        "fg": "text-sky-200"
    },
    {
        "bg": "from-violet-700 to-violet-500",
        "fg": "text-violet-200"
    },
    {
        "bg": "from-gray-700 to-gray-500",
        "fg": "text-gray-200"
    },
    {
        "bg": "from-emerald-700 to-emerald-500",
        "fg": "text-emerald-200"
    }
]

export default function Home() {
    const [seconds, setSeconds] = useState(10)
    const [kanji, setKanji] = useState(getRandomKanji())
    const [color, setColor] = useState(getRandomColor())

    const tick = () => {
        if (seconds === 0) {
            setKanji(getRandomKanji())
            setColor(getRandomColor())
            setSeconds(10)
        } else {
            setSeconds(seconds - 1)
        }
    }

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)

        return () => clearInterval(timerID)
    })

    return (
        <div className={`h-screen bg-gradient-to-br ${color.bg} flex flex-col items-center justify-center`}>
            <div className={`text-14xl font-bold ${color.fg}`}>
                {kanji.japanese}
            </div>

            <div className={`text-4xl font-bold ${color.fg}`}>
                {kanji.reading}
            </div>

            <div className={`text-4xl font-bold ${color.fg} mt-4`}>
                {kanji.meaning}
            </div>

            <div className={`${color.fg} mt-4`}>
                {`${seconds.toString().padStart(2, '0')}`}
            </div>
        </div>
    )
}

function getRandomKanji() {
    const keys = Object.keys(kanji)
    const randomIndex = Math.floor(Math.random() * keys.length)
    const randomKey = keys[randomIndex]

    return kanji[randomKey]
}

function getRandomColor() {
    const keys = Object.keys(colors)
    const randomIndex = Math.floor(Math.random() * keys.length)
    const randomKey = keys[randomIndex]

    return colors[randomKey]
}