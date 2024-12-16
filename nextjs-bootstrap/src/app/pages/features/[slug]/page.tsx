// src/app/features/[slug]/page.tsx (Dynamic Feature Details Page)
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from './FeatureDetails.module.scss';

// This would typically come from a CMS or API
const featuresDetails = {
  'lightning-fast': {
    title: 'Lightning Fast Performance',
    icon: 'bi-rocket-takeoff',
    description: 'Experience blazing fast performance with our optimized infrastructure.',
    benefits: [
      'Optimized code execution',
      'Global CDN distribution',
      'Efficient caching strategies',
      'Minimal load times'
    ],
    techSpecs: {
      'Average Response Time': '<100ms',
      'Global Availability': '99.99%',
      'CDN Points': '200+ locations'
    }
  },
  'secure-by-default': {
    title: 'Enterprise-Grade Security',
    icon: 'bi-shield-check',
    description: 'Best-in-class security features to protect your data.',
    benefits: [
      'End-to-end encryption',
      'Regular security audits',
      'Compliance certifications',
      'Advanced threat protection'
    ],
    techSpecs: {
      'Encryption': 'AES-256',
      'Compliance': 'SOC2, GDPR, HIPAA',
      'Authentication': 'Multi-factor'
    }
  },
  // ... more features
};

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return Object.keys(featuresDetails).map((slug) => ({
    slug: slug,
  }));
}

const FeatureDetailsPage = ({ params }: { params: Params }) => {
  const feature = featuresDetails[params.slug as keyof typeof featuresDetails];

  if (!feature) {
    notFound();
  }

  return (
    <div className={styles.feature_details}>
      <div className={styles.feature_hero}>
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <div className={styles.feature_header}>
                <i className={`bi ${feature.icon} ${styles.feature_icon}`}></i>
                <h1>{feature.title}</h1>
                <p>{feature.description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className={styles.feature_content}>
        <Row>
          <Col lg={8}>
            <section className={styles.benefits_section}>
              <h2>Key Benefits</h2>
              <ul className={styles.benefits_list}>
                {feature.benefits.map((benefit, index) => (
                  <li key={index}>
                    <i className="bi bi-check-circle"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className={styles.tech_specs}>
              <h2>Technical Specifications</h2>
              <div className={styles.specs_grid}>
                {Object.entries(feature.techSpecs).map(([key, value]) => (
                  <div key={key} className={styles.spec_item}>
                    <h3>{key}</h3>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </section>
          </Col>

          <Col lg={4}>
            <div className={styles.feature_sidebar}>
              <div className={styles.cta_card}>
                <h3>Ready to Get Started?</h3>
                <p>Experience the power of {feature.title} today.</p>
                <Button variant="primary" className="w-100 mb-3">
                  Try it Free
                </Button>
                <Link href="/contact" className="btn btn-outline-primary w-100">
                  Contact Sales
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureDetailsPage;