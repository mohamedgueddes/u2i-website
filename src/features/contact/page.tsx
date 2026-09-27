import type { FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import workshopImage from "@/assets/about-workshop.jpg";

import "./contact.css";

export function ContactPage() {
  const reduceMotion = useReducedMotion();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const fullName = `${form.get("firstName")} ${form.get("lastName")}`.trim();
    const subject = String(form.get("subject") ?? "");
    const body = [
      `Nom : ${fullName}`,
      `E-mail : ${form.get("email")}`,
      `Société : ${form.get("company") || "Non renseignée"}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:u2i@u2iprocess.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="contact-page">
      <PageHero
        id="contact"
        breadcrumb="Contact"
        eyebrow="Une équipe à votre écoute"
        title={
          <>
            Parlons
            <br />
            <span>de votre projet.</span>
          </>
        }
        description="Une question, un besoin en tuyauterie ou un projet à construire ? Nous sommes là pour en parler."
        linkLabel="Nos coordonnées"
        linkHref="#coordonnees"
        image={workshopImage}
        imageAlt="L’atelier de fabrication U2I à Akouda"
      />

      <section className="contact-main" id="coordonnees">
        <div className="contact-wrap">
          <div className="contact-main__heading">
            <span className="contact-eyebrow contact-eyebrow--dark">
              Contact direct
            </span>
            <h2>
              Le bon contact,
              <br />
              au bon moment.
            </h2>
          </div>

          <div className="contact-columns">
            <motion.section
              className="contact-details"
              aria-labelledby="contact-details-title"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h3 id="contact-details-title">Coordonnées</h3>
              <a className="contact-detail" href="tel:+21650191004">
                <span className="contact-detail__icon">
                  <Phone size={19} aria-hidden="true" />
                </span>
                <span>
                  <small>Téléphone</small>
                  <strong>+216 50 191 004</strong>
                  <em>
                    Appeler notre équipe <ArrowUpRight size={13} aria-hidden="true" />
                  </em>
                </span>
              </a>
              <a className="contact-detail" href="mailto:u2i@u2iprocess.com">
                <span className="contact-detail__icon">
                  <Mail size={19} aria-hidden="true" />
                </span>
                <span>
                  <small>E-mail</small>
                  <strong>u2i@u2iprocess.com</strong>
                  <em>
                    Écrire à U2I <ArrowUpRight size={13} aria-hidden="true" />
                  </em>
                </span>
              </a>
              <div className="contact-detail">
                <span className="contact-detail__icon">
                  <MapPin size={19} aria-hidden="true" />
                </span>
                <span>
                  <small>Siège social</small>
                  <strong>Akouda, Sousse</strong>
                  <em>Tunisie</em>
                </span>
              </div>
              <div className="contact-hours">
                <Clock3 size={16} aria-hidden="true" />
                <span>Du lundi au vendredi</span>
                <strong>08:00 — 17:00</strong>
              </div>
            </motion.section>

            <motion.section
              className="contact-form-section"
              aria-labelledby="contact-form-title"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <div className="contact-form-section__heading">
                <div>
                  <span>01 / NOUVELLE DEMANDE</span>
                  <h3 id="contact-form-title">Dites-nous tout.</h3>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <label>
                    Prénom
                    <input
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="Votre prénom"
                      required
                    />
                  </label>
                  <label>
                    Nom
                    <input
                      name="lastName"
                      autoComplete="family-name"
                      placeholder="Votre nom"
                      required
                    />
                  </label>
                </div>
                <div className="contact-form__row">
                  <label>
                    E-mail professionnel
                    <input
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="nom@entreprise.com"
                      required
                    />
                  </label>
                  <label>
                    Société <span>(facultatif)</span>
                    <input
                      name="company"
                      autoComplete="organization"
                      placeholder="Nom de la société"
                    />
                  </label>
                </div>
                <label>
                  Sujet
                  <input name="subject" placeholder="En quelques mots" required />
                </label>
                <label>
                  Votre message
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Parlez-nous de votre besoin…"
                    required
                  />
                </label>
                <div className="contact-form__submit-row">
                  <button type="submit">
                    Préparer le courriel <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </div>
              </form>
            </motion.section>
          </div>
        </div>
      </section>

      <section className="contact-location">
        <div className="contact-wrap">
          <div className="contact-location__heading">
            <div>
              <span className="contact-eyebrow contact-eyebrow--dark">
                Nous trouver
              </span>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              title="Localisation d’Univers Inox Industriel à Akouda, Sousse"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25864.77929716165!2d10.5775104!3d35.8711296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8a3269a9e77b%3A0xe2adfdb4979a6bdc!2sUnivers%20Inox%20Industriel%20U2I!5e0!3m2!1sfr!2stn!4v1784619191195!5m2!1sfr!2stn"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={false}
            />
            <div className="contact-map__label">
              <MapPin size={17} aria-hidden="true" />
              <span>U2I · Akouda, Sousse</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
