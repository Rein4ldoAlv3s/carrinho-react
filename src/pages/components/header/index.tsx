import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <header className="w-full bg-slate-200 px-1">
            <nav className="w-full flex items-center justify-between h-14 px-5 mx-auto max-w-7xl">
                <Link className="font-bold text-2xl" to="/">
                    Dev Shop
                </Link>

                <Link className="relative" to="/cart">
                    <FiShoppingCart size={24} color="#121212" />
                    <span className="absolute -top-3 -right-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                        2
                    </span>
                </Link>
            </nav>
        </header>
    )
}