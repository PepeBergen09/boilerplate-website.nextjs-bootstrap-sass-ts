// src/components/HeroTwo/HeroTwo.tsx
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './HeroTwo.module.scss';

interface Metric {
  value: string;
  label: string;
}

interface HeroTwoProps {
  badge: {
    icon: string;
    text: string;
  };
  title: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  metrics: Metric[];
}

const HeroTwo = ({
  badge,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  metrics
}: HeroTwoProps) => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.grid_layout}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <i className={`bi ${badge.icon}`}></i>
              <span>{badge.text}</span>
            </div>

            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div className={styles.cta_group}>
              <Link href={primaryCTA.href} className={styles.primary_button}>
                <span>{primaryCTA.text}</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href={secondaryCTA.href} className={styles.secondary_button}>
                <span>{secondaryCTA.text}</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className={styles.metrics}>
              {metrics.map((metric, index) => (
                <div key={index} className={styles.metric}>
                  <div className={styles.value}>{metric.value}</div>
                  <div className={styles.label}>{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.media_section}>
            <div className={styles.card}>
              <img
                src="/api/placeholder/600/400"
                alt="Platform preview"
                style={{ width: '100%', height: 'auto', borderRadius: '0.75rem' }}
              />
            </div>

            <div className={styles.floating_badges}>
              <div className={styles.badge_item}>
                <i className="bi bi-rocket"></i>
                <span>Fast & Reliable</span>
              </div>
              <div className={styles.badge_item}>
                <i className="bi bi-shield-check"></i>
                <span>Secure</span>
              </div>
              <div className={styles.badge_item}>
                <i className="bi bi-graph-up"></i>
                <span>Scalable</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroTwo;