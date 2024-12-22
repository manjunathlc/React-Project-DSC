const Nav = () => {
  return (
    <nav className="container">
      <img src="brand_logo.png" alt="brand Logo" />

      <ul>
        <li>Home</li>
        <li>Location</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="btn">Login</button>
    </nav>
  );
};

export default Nav;
