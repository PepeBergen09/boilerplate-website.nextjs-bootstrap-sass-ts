// src/components/HeroFive/HeroFive.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from './HeroFive.module.scss';

interface Feature {
  icon: string;
  text: string;
}

interface HeroFiveProps {
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
}

const HeroFive = ({
  tag,
  title,
  highlightedText,
  description,
  features,
  primaryCTA,
  secondaryCTA,
  image,
}: HeroFiveProps) => {
  // Split title to include highlighted text
  const titleParts = title.split('[highlight]');

  return (
    <section className={styles.hero}>
      <div className={styles.split_layout}>
        <div className={styles.image_section}>
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
            priority
          />
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
                  <i className={`bi ${feature.icon}`}></i>
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
    </section>
  );
};

export default HeroFive;
