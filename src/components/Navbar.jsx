import { NavLink } from 'react-router-dom';

export default function Navbar(){
  return (
    <header className="nav">
      <NavLink to="/" className="brand" aria-label="Aeitos archive home">
        <span className="brand-mark">A</span>
        <span className="brand-copy"><b>AEITOS</b><small>Contemporary Arts Archive</small></span>
      </NavLink>
      <nav>
        <NavLink to="/" end>Archive</NavLink>
        <NavLink to="/ai-structure">AI / Structure</NavLink>
      </nav>
      <span className="prototype-tag">PROTOTYPE 01</span>
    </header>
  );
}
