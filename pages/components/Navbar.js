import Link from "next/link";


const Navbar = () => {
    return (
        <header>
            <nav>
                <Link href="/">
                    <img src="./arch-logo.png" alt="logo" />
                </Link>
                <ul className="nav-items">
                    <li>
                        <Link className="link" href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link className="link" href="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="link" href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;