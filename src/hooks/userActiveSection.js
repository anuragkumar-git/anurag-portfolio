import React, { useEffect, useState } from 'react'

export default function userActiveSection(sectionIds) {
    const [active, setActive] = useState("home")

    useEffect(() => {
        const observers = []

        sectionIds.forEach((id) => {
            const el = document.getElementById(id)
            if (!id) return

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id)
                    }
                },
                { rootMargin: "-400px 0px -480px 0px" }
            )
            observer.observe(el)
            observers.push(observer)            
        });

        return () => observers.forEach((obs) => obs.disconnect())
    }, [sectionIds])

    return active
}
