import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <h1 className="bg-slate-800 text-slate-50">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/new-to-me">New to me? Start here</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </h1>
  );
};
