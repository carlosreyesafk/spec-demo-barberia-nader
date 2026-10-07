import "./globals.css";

const PHONE_DISPLAY = "(829) 933-9091";
const PHONE_TEL = "tel:+18299339091";
const WHATSAPP = "https://wa.me/18299339091";
const ADDRESS =
  "Calle Mercedes 359, Santo Domingo 10211, República Dominicana";
const MAP_EMBED =
  "https://www.google.com/maps?q=Barber%C3%ADa%20Nader%2C%20Calle%20Mercedes%20359%2C%20Santo%20Domingo&output=embed";

const HERO_IMG =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=80";
const ABOUT_IMG =
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80";
const GALLERY = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1200&q=80",
];

const SERVICES = [
  {
    icon: "💈",
    title: "Corte de cabello",
    text: "Cortes clásicos y modernos con acabado preciso, adaptados a tu estilo.",
  },
  {
    icon: "🪒",
    title: "Afeitado con navaja",
    text: "Afeitado tradicional con navaja, toalla caliente y acabado impecable.",
  },
  {
    icon: "🧔",
    title: "Arreglo de barba",
    text: "Perfilado, recorte y cuidado de barba para un look definido y limpio.",
  },
  {
    icon: "✂️",
    title: "Corte + barba",
    text: "El combo completo: corte de cabello y arreglo de barba en una sola visita.",
  },
  {
    icon: "🔥",
    title: "Tratamientos capilares",
    text: "Hidratación y cuidado del cabello para mantenerlo sano y con brillo.",
  },
  {
    icon: "👶",
    title: "Corte infantil",
    text: "Cortes para los más pequeños, con paciencia y buen trato.",
  },
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio">
            <span className="brand-mark">💈</span>
            <span className="brand-name">
              Barbería Nader
              <small>Calle Mercedes · Santo Domingo</small>
            </span>
          </a>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#ubicacion">Ubicación</a>
            <a href="#contacto">Contacto</a>
            <a className="btn btn-primary btn-sm" href={WHATSAPP} target="_blank" rel="noreferrer">
              Reservar por WhatsApp
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="hero" style={{ backgroundImage: `url(${HERO_IMG})` }}>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">💈 Barbería en Santo Domingo</span>
              <h1>
                Sal de aquí <span>luciendo impecable</span>
              </h1>
              <p className="lead">
                En Barbería Nader el corte es un arte: atención de primera,
                ambiente de confianza y acabados que se notan. Reserva tu silla
                por WhatsApp y llega directo.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                  📲 Reservar por WhatsApp
                </a>
                <a className="btn btn-outline" href={PHONE_TEL}>
                  📞 {PHONE_DISPLAY}
                </a>
              </div>
              <div className="hero-meta">
                <div>
                  <strong>📍 Calle Mercedes 359</strong>
                  Santo Domingo
                </div>
                <div>
                  <strong>🕘 Lun–Sáb 8am–8pm</strong>
                  Dom 8am–8pm
                </div>
              </div>
            </div>
            <div className="hero-card">
              <h2>¿Necesitas un corte?</h2>
              <p>
                Escríbenos por WhatsApp y reserva tu turno sin esperar en fila.
              </p>
              <ul className="hours-list">
                <li>
                  <span>Lunes – Miércoles</span>
                  <span>8:00 am – 8:00 pm</span>
                </li>
                <li>
                  <span>Jueves</span>
                  <span>8:00 am – 4:00 pm</span>
                </li>
                <li>
                  <span>Viernes – Domingo</span>
                  <span>8:00 am – 8:00 pm</span>
                </li>
              </ul>
              <a className="btn btn-primary" href={WHATSAPP} target="_blank" rel="noreferrer">
                Reservar mi turno
              </a>
            </div>
          </div>
        </section>

        {/* SERVICIOS */}
        <section id="servicios" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Nuestros servicios</span>
              <h2>Todo para tu imagen</h2>
              <p>
                Corte, barba y cuidado personal en un solo lugar, con la calidad
                que nos distingue.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map((s) => (
                <article key={s.title} className="service-card">
                  <div className="service-icon">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="section alt">
          <div className="container about-grid">
            <div className="about-copy">
              <span
                className="kicker"
                style={{
                  color: "var(--gold-600)",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  fontSize: "0.78rem",
                }}
              >
                Nosotros
              </span>
              <h2>La barbería de confianza de la zona</h2>
              <p>
                Barbería Nader es una barbería ubicada en la Calle Mercedes, en
                Santo Domingo, donde cada cliente sale satisfecho: trato
                personal, cortes precisos y un ambiente donde te sientes en casa.
              </p>
              <p>
                Nuestros clientes nos recomiendan por años — ven, siéntate en
                la silla y compruébalo tú mismo.
              </p>
              <ul className="about-points">
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Atención personalizada:</strong> cada corte se
                    adapta a tu estilo.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Reserva por WhatsApp:</strong> aparta tu turno sin
                    esperar.
                  </span>
                </li>
                <li>
                  <span className="tick">✓</span>
                  <span>
                    <strong>Céntrico y fácil de llegar:</strong> Calle Mercedes
                    359, Santo Domingo.
                  </span>
                </li>
              </ul>
            </div>
            <div className="about-photo">
              <img src={ABOUT_IMG} alt="Barbero trabajando en Barbería Nader" loading="lazy" />
              <div className="about-photo-strip">
                {GALLERY.map((g) => (
                  <img key={g} src={g} alt="Detalle de barbería" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* UBICACIÓN */}
        <section id="ubicacion" className="section">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Ubicación</span>
              <h2>Encuéntranos fácilmente</h2>
              <p>{ADDRESS}</p>
            </div>
            <div className="location-grid">
              <div className="location-info">
                <div className="info-card">
                  <h3>📍 Dirección</h3>
                  <p>{ADDRESS}</p>
                </div>
                <div className="info-card">
                  <h3>🕘 Horario</h3>
                  <p>
                    Lunes a miércoles: 8:00 am – 8:00 pm
                    <br />
                    Jueves: 8:00 am – 4:00 pm
                    <br />
                    Viernes a domingo: 8:00 am – 8:00 pm
                  </p>
                </div>
                <div className="info-card">
                  <h3>🚶 Cómo llegar</h3>
                  <p>
                    Estamos en la Calle Mercedes 359, en Santo Domingo. Abre el
                    mapa para ver la ruta desde tu ubicación.
                  </p>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title="Mapa — Barbería Nader"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="kicker">Contacto</span>
              <h2>Reserva tu silla hoy</h2>
              <p>
                Escríbenos por WhatsApp o llámanos: te atendemos a la brevedad.
              </p>
            </div>
            <div className="contact-grid">
              <a className="contact-card" href={WHATSAPP} target="_blank" rel="noreferrer">
                <div className="label">WhatsApp</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Reserva tu turno aquí →</div>
              </a>
              <a className="contact-card" href={PHONE_TEL}>
                <div className="label">Teléfono</div>
                <div className="value">{PHONE_DISPLAY}</div>
                <div className="hint">Llámanos en horario de barbería →</div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <strong>Barbería Nader</strong>
              {ADDRESS}
              <br />
              Tel. {PHONE_DISPLAY}
            </div>
            <div>
              <strong>Horario</strong>
              Lun–Mié 8:00 am – 8:00 pm
              <br />
              Jue 8:00 am – 4:00 pm · Vie–Dom 8:00 am – 8:00 pm
            </div>
          </div>
          <p className="demo-note">
            Página de muestra — propuesta de diseño web preparada por NexoDev.
            Los servicios mostrados son categorías generales de barbería y
            pueden ajustarse a la oferta real del negocio.
          </p>
        </div>
      </footer>
    </>
  );
}
