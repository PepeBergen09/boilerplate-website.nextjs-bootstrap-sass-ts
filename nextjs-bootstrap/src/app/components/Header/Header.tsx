// src/components/Header/Header.tsx
'use client';
import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Navbar 
        expand="md" 
        expanded={expanded} 
        onToggle={() => setExpanded(!expanded)}
        className={styles.navbar}
      >
        <Container>
          <Link href="/" className={styles.brand}>
            Bergen Latino
          </Link>
          
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav"
            className={styles.toggle_button}
          />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${styles.nav_link} ${
                    pathname === item.path ? styles.active : ''
                  }`}
                  onClick={() => setExpanded(false)}
                >
                  {item.label}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;