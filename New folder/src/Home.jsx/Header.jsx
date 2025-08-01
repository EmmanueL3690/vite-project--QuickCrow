import { useState, useEffect } from "react"
import "./index.css"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false) 

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest(".navbar") && !event.target.closest(".menu-toggle")) {
        setMenuOpen(false)
      }
      if (searchOpen && !event.target.closest(".search-bar")) {
        setSearchOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [menuOpen, searchOpen])

  // Close menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false)
        setSearchOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleMenu = (e) => {
    e.stopPropagation()
    setMenuOpen(!menuOpen)
    setSearchOpen(false) // Close search when opening menu
  }

  const toggleSearch = (e) => {
    e.stopPropagation()
    setSearchOpen(!searchOpen)
    setMenuOpen(false) // Close menu when opening search
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="page-header">
      <div className="header-container">
        <div className="logo">
          <img  src="/Logo img.jpg" alt="logo" />
        </div>

        <div className="header-controls">

          {/* Menu toggle */}
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <span className={`hamburger ${menuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`navbar ${menuOpen ? "active" : ""}`}>
  <ul>
    <li>
      <Link to="/" onClick={closeMenu}>
        Home
      </Link>
    </li>
    <li>
      <Link to="/explore" onClick={closeMenu}>
        Explore
      </Link>
    </li>
    <li>
      <Link to="/service" onClick={closeMenu}>
        Service
      </Link>
    </li>
    <li>
      <Link to="/order" onClick={closeMenu}>
        Order
      </Link>
    </li>
    <li>
      <Link to="/profile" onClick={closeMenu}>
        Profile
      </Link>
    </li>
  </ul>
</nav>

                  {/* Mobile search toggle */}
          <button className="search-toggle mobile-only" onClick={toggleSearch} aria-label="Toggle search">
            <img className="search-icond" src="ico.png" alt="" />
          </button>

        {/* Desktop search bar */}
        <div className="search-bar desktop-only">
          <input type="text" placeholder="Craving Something?" />
          <button type="button"><img className="search-icond" src="ico.png" alt="" /></button>
        </div>
      </div>

      {/* Mobile search bar */}
      <div className={`mobile-search ${searchOpen ? "active" : ""}`}>
        <div className="search-bar">
          <input type="text" placeholder="Craving Something?" />
          <button type="button">🔍</button>
        </div>
      </div>

      {/* Mobile overlay */}
      {(menuOpen || searchOpen) && <div className="mobile-overlay"></div>}
    </header>
  )
}

export default Header




