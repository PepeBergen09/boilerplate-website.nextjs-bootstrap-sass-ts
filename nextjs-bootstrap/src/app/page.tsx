import styles from "./page.module.scss";

import Hero from "@/components/Hero/Hero";
import HeroOne from "@/components/HeroOne/HeroOne";
import HeroTwo from "@/components/HeroTwo/HeroTwo";
import HeroThree from "@/components/HeroThree/HeroThree";
import HeroFour from "@/components/HeroFour/HeroFour";
import HeroFive from "@/components/HeroFive/HeroFive";
import HeroSix from "@/components/HeroSix/HeroSix";
import HeroSeven from "@/components/HeroSeven/HeroSeven";
import Features from "@/components/Features/Features";
import Testimonials from "@/components/Testimonials/Testimonials";
import CTA from "@/components/CTA/CTA";


const heroProps = {
  title: "Build amazing websites with",
  highlightedText: "Next.js",
  subtitle: "Create stunning, responsive web applications with our modern tech stack featuring React, Bootstrap, and TypeScript.",
  primaryCTA: {
    text: "Get Started",
    href: "/signup"
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/about"
  },
  features: [
    "Responsive Design",
    "TypeScript Ready",
    "SEO Optimized"
  ]
};

const heroOneProps = {
  tag: "🚀 Introducing Our Platform",
  title: "Transform your workflow with",
  highlightedText: "powerful tools",
  description: "Streamline your development process with our innovative platform. Build faster, scale smarter, and deliver exceptional results.",
  primaryCTA: {
    text: "Get Started",
    href: "/signup"
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/about"
  },
  stats: [
    {
      value: "99.9%",
      label: "Uptime"
    },
    {
      value: "10M+",
      label: "Users"
    },
    {
      value: "24/7",
      label: "Support"
    }
  ]
};

  const heroTwoProps = {
    badge: {
      icon: "bi-stars",
      text: "New Features Available"
    },
    title: "Build amazing products with our powerful platform",
    description: "Transform your ideas into reality with our cutting-edge development platform. Create, deploy, and scale with confidence.",
    primaryCTA: {
      text: "Start Building",
      href: "/signup"
    },
    secondaryCTA: {
      text: "Watch Demo",
      href: "/demo"
    },
    metrics: [
      {
        value: "100K+",
        label: "Active Users"
      },
      {
        value: "95%",
        label: "Satisfaction Rate"
      },
      {
        value: "24/7",
        label: "Expert Support"
      }
    ]
  };



    const eventProps = {
      eventType: "Tech Conference",
      title: "Future of Web Development Summit 2024",
      date: "2024-12-25", // YYYY-MM-DD format
      time: "9:00 AM - 6:00 PM EST",
      location: "Tech Convention Center, New York",
      description: "Join us for an immersive experience exploring the latest trends and innovations in web development. Connect with industry leaders and transform your development skills.",
      highlights: [
        "Expert-led workshops",
        "Networking opportunities",
        "Live coding sessions",
        "Q&A panels"
      ],
      speakers: [
        {
          name: "Sarah Johnson",
          role: "Lead Developer, Tech Corp",
          image: "/api/placeholder/80/80"
        },
        {
          name: "Michael Chen",
          role: "CTO, StartupX",
          image: "/api/placeholder/80/80"
        },
        {
          name: "Emily Brown",
          role: "Senior Engineer, WebCo",
          image: "/api/placeholder/80/80"
        },
        {
          name: "David Kim",
          role: "Product Lead, DevInc",
          image: "/api/placeholder/80/80"
        }
      ],
      registrationLink: "/register",
      agendaLink: "/agenda"
    };


    const heroFourProps = {
      tag: {
        icon: "bi-stars",
        text: "Introducing Our Platform"
      },
      title: "Transform your business with [highlight] innovation",
      highlightedText: "next-level",
      description: "Empower your team with cutting-edge tools and solutions that drive growth, efficiency, and success. Join thousands of satisfied customers who have already transformed their business.",
      primaryCTA: {
        text: "Get Started",
        href: "/signup"
      },
      secondaryCTA: {
        text: "Learn More",
        href: "/about"
      },
      partners: [
        {
          name: "Company 1",
          logo: "/api/placeholder/120/40"
        },
        {
          name: "Company 2",
          logo: "/api/placeholder/120/40"
        },
        {
          name: "Company 3",
          logo: "/api/placeholder/120/40"
        },
        {
          name: "Company 4",
          logo: "/api/placeholder/120/40"
        }
      ]
    };


    const heroFiveProps = {
      tag: {
        icon: "bi-stars",
        text: "New Release"
      },
      title: "Bienvenidos a la comunidad de ",
      highlightedText: "Bergen Latino",
      description: "Streamline your business processes with our innovative platform. Built for teams that demand the best in technology and design.",
      features: [
        {
          icon: "bi-lightning-charge",
          text: "Lightning fast performance"
        },
        {
          icon: "bi-shield-check",
          text: "Enterprise-grade security"
        },
        {
          icon: "bi-graph-up",
          text: "Advanced analytics"
        },
        {
          icon: "bi-people",
          text: "Team collaboration"
        }
      ],
      primaryCTA: {
        text: "Get Started",
        href: "/signup"
      },
      secondaryCTA: {
        text: "Learn More",
        href: "/about"
      },
      image: {
        src: "/images/bergen-latino-bryggen.jpg",
        alt: "Platform showcase"
      }
    };

const heroSixProps = {
  tag: {
    icon: "bi-stars",
    text: "New Release"
  },
  title: "Elevate your business with [highlight] solutions",
  highlightedText: "innovative",
  description: "Transform your workflow with our cutting-edge platform designed for modern teams.",
  features: [
    {
      icon: "bi-lightning-charge",
      text: "Lightning fast performance"
    },
    {
      icon: "bi-shield-check",
      text: "Enterprise security"
    },
    {
      icon: "bi-graph-up",
      text: "Real-time analytics"
    }
  ],
  primaryCTA: {
    text: "Get Started",
    href: "/signup"
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/about"
  },
  image: {
    src: "/images/bergen-latino-bryggen.jpg",
    alt: "Platform showcase"
  },
  stats: [
    {
      value: "99.9%",
      label: "Uptime"
    },
    {
      value: "24/7",
      label: "Support"
    },
    {
      value: "10k+",
      label: "Users"
    }
  ]
};


const heroSevenProps = {
  subtitle: "Plataforma Next-Gen",
  title: "Transforma tu negocio con herramientas inteligentes",
  description: "Potencia tu empresa con nuestra plataforma integral de soluciones empresariales diseñadas para el crecimiento.",
  mainImage: {
    src: "/images/hero-main.jpg",
    alt: "Platform dashboard"
  },
  testimonial: {
    avatar: "/images/avatar-1.jpg",
    name: "María García",
    role: "CEO, TechCorp",
    comment: "Esta plataforma ha revolucionado completamente nuestra forma de trabajo."
  },
  metrics: [
    {
      icon: "bi-graph-up",
      value: "300%",
      label: "Crecimiento"
    },
    {
      icon: "bi-people",
      value: "10k+",
      label: "Usuarios activos"
    },
    {
      icon: "bi-star",
      value: "4.9/5",
      label: "Calificación"
    }
  ],
  brands: [
    {
      logo: "/images/brand1.png",
      name: "TechCorp"
    },
    {
      logo: "/images/brand2.png",
      name: "InnovateX"
    },
    {
      logo: "/images/brand3.png",
      name: "FutureNet"
    },
    {
      logo: "/images/brand4.png",
      name: "SmartSolutions"
    }
  ],
  cta: {
    primary: {
      text: "Comenzar ahora",
      href: "/registro"
    },
    secondary: {
      text: "Ver demo",
      href: "/demo"
    }
  }
};
  


 
  

const featuresData = {
  sectionTitle: "Powerful Features",
  sectionSubtitle: "Discover all the amazing features that make our platform stand out from the competition.",
  features: [
    {
      icon: "bi-rocket-takeoff",
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized infrastructure and efficient codebase.",
      link: "/features/performance"
    },
    {
      icon: "bi-shield-check",
      title: "Secure by Default",
      description: "Rest easy knowing your data is protected with enterprise-grade security measures.",
      link: "/features/security"
    },
    {
      icon: "bi-graph-up",
      title: "Scalable Solution",
      description: "Grow confidently with a platform that scales seamlessly with your business needs.",
      link: "/features/scalability"
    },
    {
      icon: "bi-brush",
      title: "Customizable Design",
      description: "Create unique experiences with our flexible and customizable design system.",
      link: "/features/design"
    },
    {
      icon: "bi-cloud-arrow-up",
      title: "Cloud Integration",
      description: "Seamlessly integrate with popular cloud services and third-party applications.",
      link: "/features/integration"
    },
    {
      icon: "bi-headset",
      title: "24/7 Support",
      description: "Get help whenever you need it with our round-the-clock customer support team.",
      link: "/features/support"
    }
  ]
};

const testimonialsData = {
  sectionTitle: "What Our Clients Say",
  sectionSubtitle: "Discover why companies trust us to deliver exceptional results.",
  testimonials: [
    {
      text: "The team's attention to detail and commitment to excellence has truly transformed our business operations. Their solutions have helped us achieve unprecedented growth.",
      rating: 5,
      author: {
        name: "Sarah Johnson",
        position: "CTO",
        company: "TechCorp Inc.",
        avatar: "/images/testimonials/sarah.jpg"
      }
    },
    {
      text: "We've seen a significant improvement in our productivity since implementing their platform. The customer support team has been incredibly responsive and helpful.",
      rating: 5,
      author: {
        name: "Michael Chen",
        position: "Operations Director",
        company: "InnovateTech",
        avatar: "/images/testimonials/michael.jpg"
      }
    },
    {
      text: "The platform's scalability and reliability have exceeded our expectations. It's been a game-changer for our organization.",
      rating: 4,
      author: {
        name: "Emily Rodriguez",
        position: "Product Manager",
        company: "FutureScale",
        avatar: "/images/testimonials/emily.jpg"
      }
    },
    {
      text: "Outstanding service and exceptional results. The team went above and beyond to ensure our success.",
      rating: 5,
      author: {
        name: "David Kim",
        position: "CEO",
        company: "NextGen Solutions",
        avatar: "/images/testimonials/david.jpg"
      }
    }
  ]
};

const ctaData = {
  title: "Ready to Get Started?",
  description: "Join thousands of satisfied customers who have transformed their business with our platform. Start your journey today and experience the difference.",
  primaryButton: {
    text: "Get Started",
    href: "/signup"
  },
  secondaryButton: {
    text: "Contact Sales",
    href: "/contact"
  },
  features: [
    "30-day free trial",
    "No credit card required",
    "24/7 support"
  ]
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <HeroFive {...heroFiveProps} />
      <Hero {...heroProps} />
      <HeroOne {...heroOneProps} />
      <HeroTwo {...heroTwoProps} />
      <HeroThree {...eventProps} />
      <HeroFour {...heroFourProps} />
      <HeroSix {...heroSixProps} />
      <HeroSeven {...heroSevenProps} />
      <Features {...featuresData} />
      <Testimonials {...testimonialsData} />
      <CTA {...ctaData} />
      
      </main>
    </div>
  );
}
