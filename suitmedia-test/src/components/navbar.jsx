import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react';
import { useLocation } from 'react-router-dom';

export const SMLogo = () => {
  return <img src="/logo.png" alt="logo" width={120} height={120} />;
};

export default function App() {
    const links = [
        {id: 1, name: 'Work', link: '/work'},
        {id: 2, name: 'About', link: '/about'},
        {id: 3, name: 'Services', link: '/services'},
        {id: 3, name: 'Ideas', link: '/ideas'},
        {id: 3, name: 'Career', link: '/career'},
        {id: 3, name: 'Contact', link: '/contact'},
    ]

    const location = useLocation();
    
    const isActiveLink = (path) => {
      return location.pathname === path
    }

  return (
    <Navbar shouldHideOnScroll className="bg-[#f26d36] w-full py-5 px-30 flex justify-between">
      <NavbarBrand>
        <SMLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem className='space-x-5 text-white '>
          {links.map((link) => (
            <Link key={link.id} href={link.link} className={`hover:underline hover:underline-offset-8 hover:transition-all ${isActiveLink(link.link) ? 'underline underline-offset-8' : ''}`}>
              {link.name}
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
