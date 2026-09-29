import  { useState } from "react";

import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Booking from "./Booking";

export default function App() {

  const [selectedService, setSelectedService] =
    useState(null);

  const handleChooseService = (id) => {
    setSelectedService(id);

    setTimeout(() => {
      document
        .getElementById("booking")
        ?.scrollIntoView({
          behavior: "smooth"
        });
    }, 50);
  };

  return (
    <div className="app">

      <Header />

      <main>

        <Hero />

        <Services
          onChooseService={handleChooseService}
        />

        <Booking
          initialService={selectedService}
        />

        <section className="contact-strip">

          <div className="container contact-inner">

            <div>
              <span className="section-kicker">
                COME & VISIT
              </span>

              <h2>
                منتظرت هستیم 🌿
              </h2>

              <p>
                هر سوالی داری، با ما تماس بگیر.
              </p>
            </div>

            <div className="contact-items">

              <a href="tel:09120000000">
                📞 0912 000 0000
              </a>

              <span>
                📍 شیراز، معالی‌آباد
              </span>

              <a href="#">
                Instagram @ARTMIS.beauty
              </a>

            </div>

          </div>

        </section>

      </main>

      <footer>

        <div className="container footer">

          <div className="brand">
            <span className="brand-mark">
              👑
            </span>

            <span>
              <b>آرتمیس</b>
              <small>BEAUTY SALON</small>
            </span>
          </div>

          <span>
            © ۱۴۰۵ سالن زیبایی آرتمیس
          </span>

          <span>
            طراحی و توسعه توسط{" "}
            <a
              href="https://portfolio-six-mu-af96puf9ak.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              hemo364
            </a>
          </span>

        </div>

      </footer>

    </div>
  );
}