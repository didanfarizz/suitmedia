import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react';
import { NavLink } from 'react-router-dom';

export default function AppNavbar({ links, activePath }) {
  return (
    <Navbar shouldHideOnScroll className="bg-[#f26d36] w-full py-5 px-30 flex justify-between">
      <NavbarBrand>
        <img src="logo.png" alt="logo" width={100} height={100}/>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem className="space-x-5 text-white">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.link}
              className={({ isActive }) =>
                isActive || activePath === link.link
                  ? 'font-semibold underline underline-offset-8'
                  : 'hover:underline hover:underline-offset-8 transition-all'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
