import { useState, useEffect } from 'react'
import kanji from './kanji.json'

export default function Home() {
    const [seconds, setSeconds] = useState(10)
    const [kanji, setKanji] = useState(getRandomKanji())

    const tick = () => {
        if (seconds === 0) {
            setKanji(getRandomKanji())
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
        <div class="h-screen bg-gradient-to-br from-red-700 to-red-500 flex flex-col items-center justify-center">
            <div class="text-14xl font-bold text-red-200">
                {kanji.japanese}
            </div>

            <div class="text-4xl font-bold text-red-200">
                {kanji.reading}
            </div>

            <div class="text-4xl font-bold text-red-200 mt-4">
                {kanji.meaning}
            </div>

            <div class="text-red-200 mt-4">
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