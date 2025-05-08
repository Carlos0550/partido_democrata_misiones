
import "./Navbar.css"
import { IoMenu } from "react-icons/io5";
import { useEffect, useState } from "react";

interface Props {
    navbarScrolled?: boolean
}
function Navbar({ navbarScrolled }: Props) {
    const [width, setWidth] = useState(window.innerWidth)
    const [contractHeader, setContractHeader] = useState<boolean>(false)

    

    useEffect(() => {
        const res = () => setWidth(window.innerWidth)
        window.addEventListener("resize", res)
        return () => window.removeEventListener("resize", res)
    }, [])
    console.log(width)
    return (
        <div className="home-header-container">
            <header className={contractHeader && width <= 730 ? 'home-header extended' : 'home-header contracted'}>
                {width <= 730 ? (
                    <>
                        <nav className={width < 730 && contractHeader
                            ? "home-nav extended"
                            : "home-nav"
                            
                            }>
                            <div className={width < 730 && contractHeader ? "home-menu-icon posicionated" : "home-menu-icon"} onClick={() => setContractHeader(!contractHeader)}>
                                <IoMenu size={20} />
                            </div>
                            <p className="home-logo">Partido Demócrata</p>
                            {contractHeader && (
                                <ul className='home-nav-list'>
                                    <li><a href="/">Inicio</a></li>
                                    <li><a href="/">Nuestra Propuesta</a></li>
                                    <li><a href="/">En acción</a></li>
                                    <li><a href="/">Tu voto</a></li>
                                </ul>
                            )}

                        </nav>
                    </>
                ) : (
                    <>
                        <nav className={navbarScrolled ? "home-nav scrolled" : "home-nav"}>
                            <p className="home-logo">Partido Demócrata</p>
                            <ul className='home-nav-list'>
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/">Nuestra Propuesta</a></li>
                                <li><a href="/">En acción</a></li>
                                <li><a href="/">Tu voto</a></li>
                            </ul>
                        </nav>
                    </>
                )}
            </header>
        </div>
    )
}

export default Navbar
