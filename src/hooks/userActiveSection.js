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
                { rootMargin: "-60% 0px -60% 0px" }
            )
            observer.observe(el)
            observers.push(observer)
        });

        return () => observers.forEach((obs) => obs.disconnect())
    }, [sectionIds])

    return active
}
