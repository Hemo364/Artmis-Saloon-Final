import {
  ArrowLeft,
  Clock3
} from "lucide-react";

export const services = [
  {
    id: "haircut",
    title: "کوتاهی مو",
    category: "مو",
    duration: 45,
    price: 450000,
    deposit: 100000,
    icon: "✂️",
    description: "کوتاهی و فرم‌دهی متناسب با چهره"
  },
  {
    id: "color",
    title: "رنگ و لایت",
    category: "مو",
    duration: 120,
    price: 1800000,
    deposit: 400000,
    icon: "🎨",
    description: "رنگ، مش و لایت با مشاوره تخصصی"
  },
  {
    id: "bride",
    title: "میکاپ عروس",
    category: "میکاپ",
    duration: 150,
    price: 3500000,
    deposit: 800000,
    icon: "👑",
    description: "میکاپ حرفه‌ای برای مراسم و عروسی"
  },
  {
    id: "makeup",
    title: "میکاپ مهمانی",
    category: "میکاپ",
    duration: 75,
    price: 950000,
    deposit: 250000,
    icon: "💄",
    description: "میکاپ شیک و ماندگار برای مهمانی"
  },
  {
    id: "brow",
    title: "اصلاح و ابرو",
    category: "ابرو",
    duration: 30,
    price: 250000,
    deposit: 80000,
    icon: "✨",
    description: "اصلاح، فرم‌دهی و قرینه‌سازی ابرو"
  },
  {
    id: "nail",
    title: "مانیکور و ژل",
    category: "ناخن",
    duration: 75,
    price: 650000,
    deposit: 150000,
    icon: "💅",
    description: "مانیکور کامل و ژل با طراحی ساده"
  }
];

const money = (n) =>
  new Intl.NumberFormat("fa-IR").format(n) + " تومان";

export default function Services({ onChooseService }) {
  return (
    <section id="services" className="section">

      <div className="container">

        <div className="section-head">

          <div>
            <span className="section-kicker">
              SERVICES
            </span>

            <h2>
              خدمات تخصصی آرتمیس
            </h2>
          </div>

          <p>
            هر آنچه برای یک استایل کامل نیاز داری،
            با قیمت شفاف و امکان رزرو آنلاین.
          </p>

        </div>

        <div className="service-grid">

          {services.map((service) => (

            <article
              className="service-card"
              key={service.id}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <span className="service-cat">
                {service.category}
              </span>

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <div className="service-meta">

                <span>
                  <Clock3 size={14} />
                  {service.duration} دقیقه
                </span>

                <strong>
                  {money(service.price)}
                </strong>

              </div>

              <button
                onClick={() =>
                  onChooseService(service.id)
                }
              >
                انتخاب و رزرو
                <ArrowLeft size={16} />
              </button>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}