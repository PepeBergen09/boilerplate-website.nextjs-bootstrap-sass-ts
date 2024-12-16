// src/components/Footer/Footer.tsx
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Footer.module.scss';

interface FooterSection {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'News', href: '/news' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Documentation', href: '/docs' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className={styles.footer_content}>
          {footerSections.map((section) => (
            <Col key={section.title} md={3} className={styles.footer_section}>
              <h3 className={styles.footer_title}>{section.title}</h3>
              <ul className={styles.footer_list}>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footer_link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Col>
          ))}

          <Col md={3} className={styles.footer_section}>
            <h3 className={styles.footer_title}>Connect</h3>
            <div className={styles.social_links}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_icon}
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_icon}
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_icon}
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_icon}
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </Col>
        </Row>

        <div className={styles.copyright}>
          <p>© {currentYear} Your Company Name. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;