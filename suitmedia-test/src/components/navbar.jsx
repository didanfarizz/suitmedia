import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@heroui/react';
import WorkPage from '../pages/WorkPage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/Services';
import ListPost from '../components/ListPost';
import CareerPage from '../pages/CareerPage';
import ContactPage from '../pages/Contact';

export const SMLogo = () => {
  return <img src="/logo.png" alt="logo" width={120} height={120} />;
};

export default function App() {
    const links = [
        {id: 1, name: 'Work', link: '/work', path: <WorkPage />},
        {id: 2, name: 'About', link: '/about', path: <AboutPage />},
        {id: 3, name: 'Services', link: '/services', path: <ServicesPage />},
        {id: 3, name: 'Ideas', link: '/', path: <ListPost />},
        {id: 3, name: 'Career', link: '/career', path: <CareerPage />},
        {id: 3, name: 'Contact', link: '/contact', path: <ContactPage />},
    ]

  return (
    <Navbar shouldHideOnScroll className="bg-[#f26d36] w-full py-5 px-30 flex justify-between">
      <NavbarBrand>
        <SMLogo />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem className='space-x-5 text-white '>
          {links.map((link) => (
            <Link key={link.id} href={link.link} element={link.path} className='hover:underline hover:underline-offset-8 hover:transition-all'>
              {link.name}
            </Link>
          ))}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
