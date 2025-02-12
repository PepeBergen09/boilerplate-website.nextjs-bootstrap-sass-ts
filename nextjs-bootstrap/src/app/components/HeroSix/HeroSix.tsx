// src/components/HeroSix/HeroSix.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroSix.module.scss';

interface Feature {
  icon: string;
  text: string;
}

interface HeroSixProps {
  tag: {
    icon: string;
    text: string;
  };
  title: string;
  highlightedText: string;
  description: string;
  features: Feature[];
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
}

const HeroSix = ({
  tag,
  title,
  highlightedText,
  description,
  features,
  primaryCTA,
  secondaryCTA,
  image,
  stats
}: HeroSixProps) => {
  // Split title to insert highlighted text
  const titleParts = title.split('[highlight]');

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.split_layout}>
          <div className={styles.image_section}>
            <div className={styles.image_wrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={600}
                className={styles.main_image}
              />
              
              {/* Background decoration */}
              <div className={styles.pattern_background}></div>
              
              {/* Stats overlayed on the image */}
              <div className={styles.stats_overlay}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.stat_card}>
                    <div className={styles.stat_value}>{stat.value}</div>
                    <div className={styles.stat_label}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.content_section}>
            <div className={styles.content_wrapper}>
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

              <div className={styles.features}>
                {features.map((feature, index) => (
                  <div key={index} className={styles.feature}>
                    <div className={styles.feature_icon}>
                      <i className={`bi ${feature.icon}`}></i>
                    </div>
                    <span className={styles.feature_text}>{feature.text}</span>
                  </div>
                ))}
              </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSix;