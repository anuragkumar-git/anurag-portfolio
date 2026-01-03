import React, { useEffect, useRef, useState } from 'react'

export default function useReveal(options = {}) {

    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
            }
        },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -10% 0px",
                ...options
            }
        )
        if (ref.current) observer.observe(ref.current)
        return () => (observer.disconnect())
    }, [options])

    return { ref, isVisible }
}
