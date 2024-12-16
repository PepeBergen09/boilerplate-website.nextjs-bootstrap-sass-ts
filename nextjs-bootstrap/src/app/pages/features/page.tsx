// src/app/features/page.tsx (Main Features Page)
import { Container, Row, Col } from 'react-bootstrap';
import FeaturesSection from '@/components/Features/Features';
import styles from './FeaturesPage.module.scss';

const featuresData = {
  sectionTitle: "Our Platform Features",
  sectionSubtitle: "Explore the powerful features that help you build better products",
  features: [
    {
      icon: "bi-rocket-takeoff",
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure and efficient codebase.",
      link: "/pages/features/lightning-fast"
    },
    {
      icon: "bi-shield-check",
      title: "Secure by Default",
      description: "Rest easy knowing your data is protected with enterprise-grade security measures.",
      link: "/pages/features/secure-by-default"
    },
    {
      icon: "bi-graph-up",
      title: "Scalable Solution",
      description: "Grow confidently with a platform that scales seamlessly with your business needs.",
      link: "/pages/features/scalable-solution"
    },
    // ... more features
  ]
};

const FeaturesPage = () => {
  return (
    <div className={styles.features_page}>
      <div className={styles.features_hero}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1>Platform Features</h1>
              <p>Discover how our features can transform your workflow and boost productivity.</p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <FeaturesSection {...featuresData} />
      
      <section className={styles.features_comparison}>
        <Container>
          <h2 className="text-center mb-5">Compare Features</h2>
          <div className={styles.comparison_table}>
            {/* Add your comparison table here */}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default FeaturesPage;




