import {
  ArrowLeft,
  CalendarDays,
  
  Scissors,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";

export default function Hero() {
  return (
    <>
      <section id="home" className="hero">

        <div className="hero-glow glow-1"></div>
        <div className="hero-glow glow-2"></div>

        <div className="container hero-grid">

          <div className="hero-copy">

            <div className="eyebrow">
              <Sparkles size={16} />
              زیبایی، با حس خوب
            </div>

            <h1>
              زیبایی تو،
              <br />
              <em>امضای آرتمیس</em>
            </h1>

            <p>
              سالن زیبایی آرتمیس جایی برای تجربه‌ای آرام،
              حرفه‌ای و متفاوت. خدمتت را انتخاب کن و در چند
              قدم نوبتت را رزرو کن.
            </p>

            <div className="hero-buttons">
              <a
                className="primary-btn"
                href="#booking"
              >
                رزرو نوبت
                <ArrowLeft size={18} />
              </a>

              <a
                className="text-btn"
                href="#services"
              >
                مشاهده خدمات
              </a>
            </div>

            <div className="trust-row">

              <div>
                <strong>+۵۰۰</strong>
                <span>مشتری راضی</span>
              </div>

              <div>
                <strong>۴.۹</strong>

                <span>
                  امتیاز مشتریان
                  <Star size={13} fill="currentColor" />
                </span>
              </div>

              <div>
                <strong>۱۰+</strong>
                <span>سال تجربه</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="portrait-card">
              <div className="portrait-placeholder">

                <Scissors size={54} />

                <span>ARTMIS</span>

                <small>
                  BEAUTY & CARE
                </small>

              </div>
            </div>

            <div className="floating-card rating">
              <Star size={17} fill="currentColor" />
              <b>4.9</b>
              <span>از ۵</span>
            </div>

            <div className="floating-card booking-mini">
              <CalendarDays size={18} />

              <div>
                <b>رزرو آنلاین</b>
                <span>سریع و آسان</span>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="about" className="about">

        <div className="container about-grid">

          <div className="about-visual">
            <div className="about-circle">
              H
            </div>

            <div className="about-stamp">
              ARTMIS
              <br />
              <span>BEAUTY SALON</span>
            </div>
          </div>

          <div className="about-copy">

            <span className="section-kicker">
              ABOUT ARTMIS
            </span>

            <h2>
              قرار نیست فقط زیباتر بشی؛
              <br />
              <em>قرارِ حال خوبه.</em>
            </h2>

            <p>
              در آرتمیس تلاش کرده‌ایم فضای سالن را از یک
              مراجعه ساده فراتر ببریم؛ خدمات حرفه‌ای،
              زمان‌بندی منظم و تجربه‌ای شخصی‌سازی‌شده
              برای هر مشتری.
            </p>

            <div className="features">

              <div>
                <ShieldCheck />

                <span>
                  <b>رزرو مطمئن</b>
                  <small>
                    تأیید نوبت پس از پرداخت بیعانه
                  </small>
                </span>
              </div>

              <div>
                <Sparkles />

                <span>
                  <b>متخصصین حرفه‌ای</b>
                  <small>
                    ارائه خدمات با استاندارد بالا
                  </small>
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}