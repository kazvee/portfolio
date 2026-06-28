import { useEffect, useState, useRef } from 'react'

export default function DevTools() {
    const [visible, setVisible] = useState(false)
    const [render, setRender] = useState(false)

    useEffect(() => {
        const KEY = 'dev_mode'

        const saved = localStorage.getItem(KEY) === '1'
        setVisible(saved)

        const toggle = () => {
            const next = localStorage.getItem(KEY) !== '1'
            localStorage.setItem(KEY, next ? '1' : '0')
            setVisible(next)
        }

        const onKeyDown = (e: KeyboardEvent) => {
            const isF12 = e.key === 'F12'

            const isCtrlShiftI =
                e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'i'

            if (isF12 || isCtrlShiftI) {
                e.preventDefault()
                toggle()
            }
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [])

    useEffect(() => {
        if (visible) {
            setRender(true)
        } else {
            const t = setTimeout(() => setRender(false), 300)
            return () => clearTimeout(t)
        }
    }, [visible])

    const loggedRef = useRef(false)

    useEffect(() => {
        if (visible && !loggedRef.current) {
            console.log("Hello, developer! 🐱")
            loggedRef.current = true
        }

        if (!visible) {
            loggedRef.current = false
        }
    }, [visible])

    if (!render) return null

    return (
        <div
            className={`fixed top-5 right-5 z-[9999] transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
        >
            <div className="w-52 rounded-3xl bg-gradient-to-br from-fuchsia-950 to-pink-700 p-4 text-white shadow-2xl">
                <div className="mb-1 text-sm font-semibold text-center">
                    Looking for something?
                </div>

                <img
                    src="/images/cat.gif"
                    alt="Cat"
                    className="w-full rounded-2xl"
                />
            </div>
        </div>
    )
}
