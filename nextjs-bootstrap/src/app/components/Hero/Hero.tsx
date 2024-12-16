// src/components/Hero/Hero.tsx
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Hero.module.scss';

interface HeroProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  features: string[];
}

const Hero = ({
  title,
  highlightedText,
  subtitle,
  primaryCTA,
  secondaryCTA,
  features,
}: HeroProps) => {
  return (
    <section className={styles.hero}>
      <Container>
        <Row>
          <Col lg={8} className={styles.content}>
            <h1 className={styles.title}>
              {title} <span>{highlightedText}</span>
            </h1>
            <p className={styles.subtitle}>{subtitle}</p>
            
            <div className={styles.cta_group}>
              <Link href={primaryCTA.href} className={styles.primary_button}>
                {primaryCTA.text}
              </Link>
              <Link href={secondaryCTA.href} className={styles.secondary_button}>
                {secondaryCTA.text}
              </Link>
            </div>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <i className="bi bi-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;