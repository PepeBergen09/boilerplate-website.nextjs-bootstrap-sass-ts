// src/components/HeroThree/HeroThree.tsx
'use client'
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './HeroThree.module.scss';

interface Speaker {
  name: string;
  role: string;
  image: string;
}

interface HeroThreeProps {
  eventType: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  highlights: string[];
  speakers: Speaker[];
  registrationLink: string;
  agendaLink: string;
}

const HeroThree = ({
  eventType,
  title,
  date,
  time,
  location,
  description,
  highlights,
  speakers,
  registrationLink,
  agendaLink
}: HeroThreeProps) => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateCountdown = () => {
      const eventDate = new Date(date);
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setCountdown({ days, hours, minutes, seconds });
      }
    };

    calculateCountdown();
    const timer = setInterval(calculateCountdown, 1000);

    return () => clearInterval(timer);
  }, [date]);

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.grid_layout}>
          <div className={styles.content}>
            <div className={styles.event_type}>
              <i className="bi bi-calendar-event"></i>
              <span>{eventType}</span>
            </div>

            <h1 className={styles.title}>{title}</h1>

            <div className={styles.event_info}>
              <div className={styles.info_item}>
                <i className="bi bi-calendar2-week"></i>
                <span>{date}</span>
              </div>
              <div className={styles.info_item}>
                <i className="bi bi-clock"></i>
                <span>{time}</span>
              </div>
              <div className={styles.info_item}>
                <i className="bi bi-geo-alt"></i>
                <span>{location}</span>
              </div>
            </div>

            <p className={styles.description}>{description}</p>

            <div className={styles.countdown}>
              <div className={styles.countdown_item}>
                <div className={styles.number}>{countdown.days}</div>
                <div className={styles.label}>Days</div>
              </div>
              <div className={styles.countdown_item}>
                <div className={styles.number}>{countdown.hours}</div>
                <div className={styles.label}>Hours</div>
              </div>
              <div className={styles.countdown_item}>
                <div className={styles.number}>{countdown.minutes}</div>
                <div className={styles.label}>Minutes</div>
              </div>
              <div className={styles.countdown_item}>
                <div className={styles.number}>{countdown.seconds}</div>
                <div className={styles.label}>Seconds</div>
              </div>
            </div>

            <div className={styles.cta_group}>
              <Link href={registrationLink} className={styles.primary_button}>
                Register Now
                <i className="bi bi-arrow-right"></i>
              </Link>
              <Link href={agendaLink} className={styles.secondary_button}>
                View Agenda
                <i className="bi bi-calendar2-week"></i>
              </Link>
            </div>
          </div>

          <div className={styles.event_card}>
            <div className={styles.highlights}>
              <h3>Event Highlights</h3>
              <div className={styles.highlight_list}>
                {highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlight_item}>
                    <i className="bi bi-check-circle"></i>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.speakers}>
              <h3>Featured Speakers</h3>
              <div className={styles.speaker_list}>
                {speakers.map((speaker, index) => (
                  <div key={index} className={styles.speaker_item}>
                    <img src={speaker.image} alt={speaker.name} />
                    <div className={styles.name}>{speaker.name}</div>
                    <div className={styles.role}>{speaker.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroThree;

