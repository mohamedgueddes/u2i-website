import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import type { ReactNode } from "react";

import "./page-hero.css";

type PageHeroProps = {
  id: string;
  breadcrumb: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  linkLabel: string;
  linkHref: string;
  image: string;
  imageAlt?: string;
  imagePosition?: string;
};

export function PageHero({
  id,
  breadcrumb,
  eyebrow,
  title,
  description,
  linkLabel,
  linkHref,
  image,
  imageAlt = "",
  imagePosition = "center 57%",
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="page-hero" aria-labelledby={`${id}-title`}>
      <img
        className="page-hero__image"
        src={image}
        alt={imageAlt}
        fetchPriority="high"
        style={{ objectPosition: imagePosition }}
      />
      <div className="page-hero__shade" />
      <div className="page-hero__grid" />
      <div className="wrap page-hero__content">
        <div className="page-hero__main">
          <div className="page-hero__breadcrumb">
            <Link to="/">Accueil</Link>
            <span aria-hidden="true">/</span>
            <span>{breadcrumb}</span>
          </div>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="page-hero__eyebrow">{eyebrow}</p>
            <h1 id={`${id}-title`}>{title}</h1>
            <p className="page-hero__intro">{description}</p>
            <a className="page-hero__link" href={linkHref}>
              {linkLabel} <ArrowDown size={17} aria-hidden="true" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
