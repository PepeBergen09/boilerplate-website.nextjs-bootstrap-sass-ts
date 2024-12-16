// src/components/Testimonials/Testimonials.tsx
'use client'
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Testimonials.module.scss';

interface Testimonial {
  text: string;
  rating: number;
  author: {
    name: string;
    position: string;
    company: string;
    avatar: string;
  };
}

interface TestimonialsProps {
  sectionTitle: string;
  sectionSubtitle: string;
  testimonials: Testimonial[];
}

const Testimonials = ({
  sectionTitle,
  sectionSubtitle,
  testimonials,
}: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 992 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const handlePrev = () => {
    setActiveIndex(current => Math.max(0, current - 1));
  };

  const handleNext = () => {
    setActiveIndex(current => Math.min(maxIndex, current + 1));
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <i
        key={index}
        className={`bi ${
          index < rating ? 'bi-star-fill' : 'bi-star'
        }`}
      ></i>
    ));
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex * itemsPerPage,
    (activeIndex * itemsPerPage) + itemsPerPage
  );

  return (
    <section className={styles.testimonials}>
      <Container>
        <div className={styles.section_header}>
          <h2 className={styles.section_title}>{sectionTitle}</h2>
          <p className={styles.section_subtitle}>{sectionSubtitle}</p>
        </div>

        <div className={styles.carousel_container}>
          <Row>
            {visibleTestimonials.map((testimonial, index) => (
              <Col key={index} md={itemsPerPage === 2 ? 6 : 4}>
                <div className={styles.testimonial_card}>
                  <div className={styles.quote_icon}>
                    <i className="bi bi-quote"></i>
                  </div>
                  <p className={styles.testimonial_text}>{testimonial.text}</p>
                  <div className={styles.rating}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className={styles.profile}>
                    <div className={styles.avatar}>
                      {testimonial.author.avatar ? (
                        <img
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name}
                        />
                      ) : (
                        <i className="bi bi-person-fill"></i>
                      )}
                    </div>
                    <div className={styles.profile_info}>
                      <h4 className={styles.name}>{testimonial.author.name}</h4>
                      <p className={styles.position}>
                        {testimonial.author.position} at {testimonial.author.company}
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <button
            className={`${styles.nav_button} ${styles.prev}`}
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous testimonials"
          >
            <i className="bi bi-chevron-left"></i>
          </button>
          <button
            className={`${styles.nav_button} ${styles.next}`}
            onClick={handleNext}
            disabled={activeIndex === maxIndex}
            aria-label="Next testimonials"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;