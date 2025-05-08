import "./HomeBanner.css"
import Banner1 from "./assets/PDBannerPC.png"
import Banner2 from "./assets/PDBannerMobile.webp"
import { useEffect, useState } from "react"
function HomeBanner() {
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const res = () => setWidth(window.innerWidth)
        window.addEventListener("resize", res)
        return () => window.removeEventListener("resize", res)
    }, [])


    return (
        <picture className="home-banner">
            <img src={width > 768 ? Banner1.src : Banner2.src} alt="" />
        </picture>
    )
}

export default HomeBanner
