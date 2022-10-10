import {Link} from "react-router-dom";

export function Header() {
    return(
        <header className="container m-auto max-w-full">
            <nav className="bg-gray-900 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <span className="self-auto text-xl font-semibold whitespace-nowrap text-orange-500">Bonchan</span>
                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to="/" className="block py-2 pr-4 pl-3 text-white rounded bg-white-700 lg:bg-transparent lg:text-white-700 lg:p-0" aria-current="page">Главная</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-gray-200 lg:p-0">О форуме</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-black bg-white dark:text-gray-300 hover:bg-gray-500 focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Войти</a>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Зарегистироваться</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}