// src/components/HeroOne/HeroOne.tsx
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './HeroOne.module.scss';

interface Stat {
  value: string;
  label: string;
}

interface HeroOneProps {
  tag: string;
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
  stats: Stat[];
}

const HeroOne = ({
  tag,
  title,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  stats
}: HeroOneProps) => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <span className={styles.tag}>{tag}</span>
            <h1 className={styles.title}>
              {title}{' '}
              <span className={styles.highlight}>{highlightedText}</span>
            </h1>
            <p className={styles.description}>{description}</p>
            
            <div className={styles.cta_group}>
              <Link href={primaryCTA.href} className={styles.primary_button}>
                {primaryCTA.text}
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href={secondaryCTA.href} className={styles.secondary_button}>
                {secondaryCTA.text}
              </Link>
            </div>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat_item}>
                  <div className={styles.stat_value}>{stat.value}</div>
                  <div className={styles.stat_label}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.image_wrapper}>
            <div className={styles.floating_elements}>
              <div className={styles.element}>
                <i className="bi bi-lightning-charge text-primary fs-1"></i>
              </div>
              <div className={styles.element}>
                <i className="bi bi-shield-check text-primary fs-1"></i>
              </div>
              <div className={styles.element}>
                <i className="bi bi-graph-up text-primary fs-1"></i>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroOne;