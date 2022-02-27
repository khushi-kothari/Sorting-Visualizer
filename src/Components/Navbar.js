import React, {Component} from "react";

class Navbar extends Component{
    render(){
        return(
            <div>
            {/* Logo / name of website */}
            <header className="text-white body-font bg-slate-900">
                <div className="container mx-auto flex flex-wrap p-6 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0" href="google.com">
                {/* <img src="../../public/favicon.png"/> */}
                <span className="ml-3 text-xl">Sorting Visualizer</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:cursor-pointer" href="google.com">Insertion Sort</a>
                <a className="mr-5 hover:cursor-pointer" href="google.com">Selection Sort</a>
                <a className="mr-5 hover:cursor-pointer" href="google.com">Bubble Sort</a>
                </nav>
                <button className="inline-flex items-center text-gray-800 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sort
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
                </div>
            </header>
            </div>
        );
    }
}
export default Navbar;