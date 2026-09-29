import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CreditCard,
  Phone,
  ShieldCheck,
  UserRound
} from "lucide-react";

import { services } from "./Services";

const slots = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00"
];

const money = (n) =>
  new Intl.NumberFormat("fa-IR").format(n) + " تومان";

const todayISO =
  new Date().toISOString().slice(0, 10);

export default function Booking({
  initialService = null
}) {

  const [step, setStep] = useState(
    initialService ? 2 : 1
  );

  const [selectedService, setSelectedService] =
    useState(initialService);

  const [date, setDate] =
    useState(todayISO);

  const [time, setTime] =
    useState("");

  const [customer, setCustomer] =
    useState({
      name: "",
      phone: ""
    });

  const [success, setSuccess] =
    useState(null);

  const selected = services.find(
    (service) =>
      service.id === selectedService
  );

  const canNext =
    step === 1
      ? !!selectedService
      : step === 2
      ? !!date && !!time
      : !!customer.name &&
        /^09\d{9}$/.test(customer.phone);

  const chooseService = (id) => {
    setSelectedService(id);
    setStep(2);
  };

  const next = () => {
    if (!canNext) return;

    setStep((current) =>
      Math.min(3, current + 1)
    );
  };

  const submitBooking = (e) => {
  e.preventDefault();

  if (!canNext || !selected) return;

  const booking = {
    id: "ARTMIS-" + Date.now(),

    service: selected.title,
    date,
    time,

    ...customer,

    deposit: selected.deposit
  };

  localStorage.setItem(
    "hiba_last_booking",
    JSON.stringify(booking)
  );

  setSuccess(booking);
};

  const reset = () => {
    setSuccess(null);
    setStep(1);
    setSelectedService(null);
    setTime("");

    setCustomer({
      name: "",
      phone: ""
    });
  };

  return (
    <section
      id="booking"
      className="booking-section"
    >

      <div className="container">

        <div className="booking-wrap">

          <div className="booking-top">

            <div>
              <span className="section-kicker">
                ONLINE BOOKING
              </span>

              <h2>
                رزرو نوبت
              </h2>
            </div>

            <span className="secure">
              <ShieldCheck size={15} />
              پرداخت امن
            </span>

          </div>

          {!success ? (
            <>

              <div className="steps">

                {[
                  "انتخاب خدمت",
                  "تاریخ و ساعت",
                  "اطلاعات شما"
                ].map((label, index) => {

                  const number = index + 1;

                  return (
                    <div
                      key={label}
                      className={
                        step === number
                          ? "step active"
                          : step > number
                          ? "step done"
                          : "step"
                      }
                    >
                      <span>
                        {step > number ? (
                          <Check size={14} />
                        ) : (
                          number
                        )}
                      </span>

                      {label}
                    </div>
                  );
                })}

              </div>

              {step === 1 && (

                <div className="booking-content">

                  <h3>
                    چه خدمتی می‌خوای؟
                  </h3>

                  <p className="muted">
                    خدمت موردنظرت را انتخاب کن.
                  </p>

                  <div className="booking-services">

                    {services.map((service) => (

                      <button
                        key={service.id}
                        className={
                          selectedService === service.id
                            ? "booking-service selected"
                            : "booking-service"
                        }
                        onClick={() =>
                          chooseService(service.id)
                        }
                      >

                        <span>
                          {service.icon}
                        </span>

                        <div>
                          <b>
                            {service.title}
                          </b>

                          <small>
                            {service.duration} دقیقه
                          </small>
                        </div>

                        <strong>
                          {money(service.price)}
                        </strong>

                        {selectedService === service.id && (
                          <Check />
                        )}

                      </button>

                    ))}

                  </div>

                </div>
              )}

              {step === 2 && (

                <div className="booking-content">

                  <h3>
                    چه زمانی راحت‌تری؟
                  </h3>

                  <p className="muted">
                    تاریخ و ساعت مراجعه را انتخاب کن.
                  </p>

                  <label className="field">

                    <span>
                      تاریخ
                    </span>

                    <input
                      type="date"
                      min={todayISO}
                      value={date}
                      onChange={(e) =>
                        setDate(e.target.value)
                      }
                    />

                  </label>

                  <div className="field">

                    <span>
                      ساعت‌های آزاد
                    </span>

                    <div className="time-grid">

                      {slots.map((slot) => (

                        <button
                          type="button"
                          key={slot}
                          className={
                            time === slot
                              ? "time selected"
                              : "time"
                          }
                          onClick={() =>
                            setTime(slot)
                          }
                        >
                          {slot}
                        </button>

                      ))}

                    </div>

                  </div>

                </div>
              )}

              {step === 3 && (

                <form
                  className="booking-content"
                  onSubmit={submitBooking}
                >

                  <h3>
                    اطلاعات تماس
                  </h3>

                  <p className="muted">
                    برای تأیید رزرو، اطلاعات زیر را وارد کن.
                  </p>

                  <div className="form-grid">

                    <label className="field">

                      <span>
                        نام و نام خانوادگی
                      </span>

                      <div className="input-icon">

                        <UserRound size={17} />

                        <input
                          required
                          value={customer.name}
                          onChange={(e) =>
                            setCustomer({
                              ...customer,
                              name: e.target.value
                            })
                          }
                          placeholder="مثلاً سارا احمدی"
                        />

                      </div>

                    </label>

                    <label className="field">

                      <span>
                        شماره موبایل
                      </span>

                      <div className="input-icon">

                        <Phone size={17} />

                        <input
                          required
                          inputMode="numeric"
                          value={customer.phone}
                          onChange={(e) =>
                            setCustomer({
                              ...customer,
                              phone: e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 11)
                            })
                          }
                          placeholder="09123456789"
                        />

                      </div>

                    </label>

                  </div>

                  <div className="summary">

                    <div>
                      <span>خدمت</span>
                      <b>
                        {selected?.title}
                      </b>
                    </div>

                    <div>
                      <span>زمان</span>
                      <b>
                        {date} — {time}
                      </b>
                    </div>

                    <div className="deposit">

                      <span>
                        بیعانه قابل پرداخت
                      </span>

                      <strong>
                        {money(
                          selected?.deposit || 0
                        )}
                      </strong>

                    </div>

                  </div>

                  <button
                    className="pay-btn"
                    type="submit"
                  >
                    <CreditCard size={19} />
                    پرداخت بیعانه و ثبت نوبت
                  </button>

                </form>
              )}

              <div className="booking-footer">

                {step > 1 ? (

                  <button
                    className="back-btn"
                    onClick={() =>
                      setStep(step - 1)
                    }
                  >
                    <ArrowRight size={17} />
                    مرحله قبل
                  </button>

                ) : (
                  <span />
                )}

                {step < 3 && (

                  <button
                    className="next-btn"
                    disabled={!canNext}
                    onClick={next}
                  >
                    ادامه
                    <ArrowLeft size={17} />
                  </button>

                )}

              </div>

            </>
          ) : (

            <Success
              booking={success}
              onReset={reset}
            />

          )}

        </div>

      </div>

    </section>
  );
}

function Success({
  booking,
  onReset
}) {

  return (
    <div className="success">

      <div className="success-icon">
        <Check size={34} />
      </div>

      <span className="section-kicker">
        BOOKING CONFIRMED
      </span>

      <h2>
        نوبتت با موفقیت ثبت شد
      </h2>

      <p>
        پس از پرداخت بیعانه، زمانت برایت رزرو می‌شود.
      </p>

      <div className="success-ticket">

        <div>
          <span>کد پیگیری</span>
          <b>{booking.id}</b>
        </div>

        <div>
          <span>خدمت</span>
          <b>{booking.service}</b>
        </div>

        <div>
          <span>تاریخ و ساعت</span>
          <b>
            {booking.date} — {booking.time}
          </b>
        </div>

        <div>
          <span>مبلغ بیعانه</span>
          <b>
            {money(booking.deposit)}
          </b>
        </div>

      </div>

      <button
        className="primary-btn"
        onClick={onReset}
      >
        رزرو نوبت جدید
      </button>

    </div>
  );
}