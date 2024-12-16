// src/components/HeroSeven/HeroSeven.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSeven.module.scss';

interface Testimonial {
  avatar: string;
  name: string;
  role: string;
  comment: string;
}

interface Metric {
  icon: string;
  value: string;
  label: string;
}

interface Brand {
  logo: string;
  name: string;
}

interface HeroSevenProps {
  subtitle: string;
  title: string;
  description: string;
  mainImage: {
    src: string;
    alt: string;
  };
  testimonial: Testimonial;
  metrics: Metric[];
  brands: Brand[];
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
}

const HeroSeven = ({
  subtitle,
  title,
  description,
  mainImage,
  testimonial,
  metrics,
  brands,
  cta
}: HeroSevenProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content_grid}>
          {/* Left Content */}
          <div className={styles.content_left}>
            <div className={styles.subtitle}>
              <span className={styles.dot}></span>
              {subtitle}
            </div>

            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>

            <div className={styles.cta_group}>
              <Link href={cta.primary.href} className={styles.primary_button}>
                {cta.primary.text}
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href={cta.secondary.href} className={styles.secondary_button}>
                {cta.secondary.text}
                <i className="bi bi-play-circle"></i>
              </Link>
            </div>

            {/* Metrics */}
            <div className={styles.metrics}>
              {metrics.map((metric, index) => (
                <div key={index} className={styles.metric_item}>
                  <div className={styles.metric_icon}>
                    <i className={`bi ${metric.icon}`}></i>
                  </div>
                  <div className={styles.metric_info}>
                    <div className={styles.metric_value}>{metric.value}</div>
                    <div className={styles.metric_label}>{metric.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div className={styles.brands_section}>
              <div className={styles.brands_label}>Trusted by leading companies</div>
              <div className={styles.brands_grid}>
                {brands.map((brand, index) => (
                  <div key={index} className={styles.brand_item}>
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={120}
                      height={40}
                      className={styles.brand_logo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={styles.content_right}>
            <div className={styles.image_container}>
              {/* Main Image */}
              <div className={styles.main_image}>
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  width={600}
                  height={700}
                  className={styles.image}
                />
                
                {/* Decorative Elements */}
                <div className={styles.decorative_circle}></div>
                <div className={styles.decorative_dots}></div>
              </div>

              {/* Floating Testimonial */}
              <div className={styles.testimonial_card}>
                <div className={styles.testimonial_header}>
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className={styles.avatar}
                  />
                  <div className={styles.testimonial_info}>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.role}>{testimonial.role}</div>
                  </div>
                </div>
                <p className={styles.comment}>{testimonial.comment}</p>
                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSeven;