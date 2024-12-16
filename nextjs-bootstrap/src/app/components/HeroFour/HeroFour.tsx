// src/components/HeroFour/HeroFour.tsx
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './HeroFour.module.scss';

interface Partner {
  name: string;
  logo: string;
}

interface HeroFourProps {
  tag: {
    icon: string;
    text: string;
  };
  title: string;
  highlightedText: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  partners?: Partner[];
}

const HeroFour = ({
  tag,
  title,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  partners
}: HeroFourProps) => {
  // Split the title to insert highlighted text
  const titleParts = title.split('[highlight]');

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.tag}>
          <i className={`bi ${tag.icon}`}></i>
          <span>{tag.text}</span>
        </div>

        <h1 className={styles.title}>
          {titleParts[0]}
          <span className={styles.highlight}>{highlightedText}</span>
          {titleParts[1]}
        </h1>

        <p className={styles.description}>{description}</p>

        <div className={styles.cta_group}>
          <Link href={primaryCTA.href} className={styles.primary_button}>
            {primaryCTA.text}
            <i className="bi bi-arrow-right"></i>
          </Link>
          <Link href={secondaryCTA.href} className={styles.secondary_button}>
            {secondaryCTA.text}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        {partners && partners.length > 0 && (
          <div className={styles.partners}>
            <div className={styles.partners_label}>Trusted By</div>
            <div className={styles.partners_grid}>
              {partners.map((partner, index) => (
                <img
                  key={index}
                  src={partner.logo}
                  alt={partner.name}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default HeroFour;