'use client'

import { useEffect, useRef, useState } from 'react'

export default function DevTools() {
    const [visible, setVisible] = useState(false)
    const [showAnim, setShowAnim] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const detect = () => {
            const threshold = 160

            const open =
                window.outerWidth - window.innerWidth > threshold ||
                window.outerHeight - window.innerHeight > threshold

            setVisible(open)
        }

        detect()

        intervalRef.current = setInterval(detect, 500)
        window.addEventListener('resize', detect)

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
            window.removeEventListener('resize', detect)
        }
    }, [])

    useEffect(() => {
        if (visible) {
            setTimeout(() => setShowAnim(true), 20)
        } else {
            setShowAnim(false)
        }
    }, [visible])

    if (!visible) return null

    return (
        <div
            className={`fixed top-5 right-5 z-[9999] transition-all duration-[2000ms] ease-out ${showAnim
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-3'
                }`}
        >
            <div className="w-52 rounded-3xl bg-gradient-to-br from-fuchsia-950 to-pink-700 p-4 text-white shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <div className="mb-1 text-sm font-semibold text-center">
                    Looking for something?
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="/images/cat.gif"
                    alt="Cat"
                    className="w-full rounded-2xl animate-[pulse_0.8s_ease-out_1]"
                />
            </div>
        </div>
    )
}