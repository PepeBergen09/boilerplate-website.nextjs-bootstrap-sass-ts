// src/components/CTA/CTA.tsx
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import styles from './CTA.module.scss';

interface CTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  features: string[];
}

const CTA = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  features,
}: CTAProps) => {
  return (
    <section className={styles.cta}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          
          <div className={styles.buttons}>
            <Link href={primaryButton.href} className={styles.primary_button}>
              {primaryButton.text}
              <i className="bi bi-arrow-right"></i>
            </Link>
            <Link href={secondaryButton.href} className={styles.secondary_button}>
              {secondaryButton.text}
            </Link>
          </div>

          {features && features.length > 0 && (
            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <i className="bi bi-check-circle"></i>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CTA;