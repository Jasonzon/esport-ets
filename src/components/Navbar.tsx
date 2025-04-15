import { Link } from "react-router"
import etsEsportLogoBlack from "../assets/ets_esport_logo_black.png"
import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md mb-[2rem]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 mr-8">
            <img src={etsEsportLogoBlack} alt="ETS Logo" className="h-20" />
            <span className="font-bold text-xl">ETS E-SPORT</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="transition">Home</Link>
            <Link to="/timeline" className="transition">Timeline</Link>
            <Link to="/sponsors" className="transition">Sponsors</Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-4">
            <Link to="/" className="transition">Home</Link>
            <Link to="/timeline" className="transition">Timeline</Link>
            <Link to="/sponsors" className="transition">Sponsors</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar