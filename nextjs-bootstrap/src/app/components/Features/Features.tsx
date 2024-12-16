// src/components/Features/Features.tsx
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Features.module.scss';

interface Feature {
  icon: string;
  title: string;
  description: string;
  link: string;
}

interface FeaturesSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  features: Feature[];
}

const Features = ({
  sectionTitle,
  sectionSubtitle,
  features,
}: FeaturesSectionProps) => {
  return (
    <section className={styles.features}>
      <Container>
        <div className={styles.section_header}>
          <h2 className={styles.section_title}>{sectionTitle}</h2>
          <p className={styles.section_subtitle}>{sectionSubtitle}</p>
        </div>

        <Row>
          {features.map((feature, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className={styles.feature_card}>
                <div className={styles.icon_wrapper}>
                  <i className={`bi ${feature.icon} ${styles.icon}`}></i>
                </div>
                <h3 className={styles.feature_title}>{feature.title}</h3>
                <p className={styles.feature_description}>{feature.description}</p>
                <Link href={feature.link} className={styles.learn_more}>
                  Learn More
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;