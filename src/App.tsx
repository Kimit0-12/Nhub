import FocusDemo from "./focus-demo";

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="NHub, volver al inicio">
          <span className="brand-n">N</span>
          <span className="brand-hub">Hub</span>
        </a>

        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#recompensas">Recompensas</a>
          <a href="#estilos">Estilos</a>
        </nav>

        <a className="header-pill" href="#como-funciona">
          Descubrir NHub
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <span className="doodle doodle-spark" aria-hidden="true">✦</span>
        <span className="doodle doodle-loop" aria-hidden="true">⌁</span>
        <span className="doodle doodle-plus" aria-hidden="true">＋</span>

        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            Productividad con premio
          </p>
          <h1 id="hero-title">
            Hazlo.
            <br />
            Descansa.
            <br />
            <span>Gana.</span>
          </h1>
          <p className="hero-lede">
            Convierte tus tareas en Focus, tus descansos en recompensas y cada
            pequeño avance en algo que apetece repetir.
          </p>
          <div className="hero-actions">
            <a className="primary-cta" href="#como-funciona">
              Conoce NHub
              <span aria-hidden="true">↘</span>
            </a>
            <p>
              <span aria-hidden="true">✦</span>
              Versión 1.7 · Próximamente en iPhone
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Vista previa de NHub">
          <div className="ui-card focus-card">
            <div className="card-kicker">
              <span>Focus actual</span>
              <span className="session-pill">Sesión 1/3</span>
            </div>
            <div className="focus-ring">
              <span>25:00</span>
              <small>EN MARCHA</small>
            </div>
            <div className="task-line">
              <span className="task-check" aria-hidden="true">✓</span>
              Terminar el portfolio
            </div>
          </div>

          <div className="ui-card break-card">
            <span className="mini-label">Pitipausa</span>
            <strong>10:00</strong>
            <span className="mini-progress" aria-hidden="true">
              <i />
            </span>
          </div>

          <div className="ui-card coin-card">
            <div className="coin-stack" aria-hidden="true">
              <span>N</span>
            </div>
            <div>
              <span className="mini-label">Canutimonedas</span>
              <strong>+20</strong>
            </div>
          </div>

          <div className="canutin-wrap">
            <span className="sticker-shadow" aria-hidden="true" />
            <img
              src="/canutin-hero.webp"
              alt="Canutín, la mascota de NHub, sonriendo y levantando el pulgar"
            />
          </div>
        </div>

        <div className="hero-facts" aria-label="Datos clave de NHub">
          <article>
            <span className="fact-icon fact-focus" aria-hidden="true">◎</span>
            <div>
              <strong>Focus</strong>
              <p>Desde 30 min</p>
            </div>
          </article>
          <article>
            <span className="fact-icon fact-break" aria-hidden="true">☕</span>
            <div>
              <strong>Pitipausas</strong>
              <p>De 10 en 10</p>
            </div>
          </article>
          <article>
            <span className="fact-icon fact-coin" aria-hidden="true">N</span>
            <div>
              <strong>Canutimonedas</strong>
              <p>2 por minuto</p>
            </div>
          </article>
        </div>
      </section>

      <section className="how-section" id="como-funciona">
        <div className="section-heading">
          <div>
            <p className="section-tag">Así funciona</p>
            <h2>
              Menos pelearte contigo.
              <br />
              <span>Más seguir tu ritmo.</span>
            </h2>
          </div>
          <p>
            NHub no te castiga por necesitar un descanso. Te ayuda a avanzar,
            parar a tiempo y volver con ganas.
          </p>
        </div>

        <div className="steps-grid">
          <article className="step-card step-one">
            <span className="step-number">01</span>
            <div className="step-visual task-visual" aria-hidden="true">
              <span>Hoy</span>
              <p><i>✓</i> Preparar portfolio</p>
              <p><i /> Practicar código</p>
              <p><i /> Ordenar escritorio</p>
            </div>
            <h3>Elige algo que importe</h3>
            <p>
              Añade tus tareas, decide por cuál empiezas y deja el resto fuera
              de la cabeza.
            </p>
          </article>

          <article className="step-card step-two">
            <span className="step-number">02</span>
            <div className="step-visual timer-visual" aria-hidden="true">
              <strong>30:00</strong>
              <span>Focus mínimo</span>
              <i />
            </div>
            <h3>Entra en Focus</h3>
            <p>
              Cada bloque completo de 30 minutos te da una pitipausa de 10.
              Sesenta minutos, dos. Así de claro.
            </p>
          </article>

          <article className="step-card step-three">
            <span className="step-number">03</span>
            <div className="step-visual break-visual" aria-hidden="true">
              <span>☕</span>
              <strong>10 min</strong>
              <p>Una pausa que sí te has ganado.</p>
            </div>
            <h3>Descansa sin culpa</h3>
            <p>
              Usa la pausa, acumula los minutos que sobren o cámbialos por 2
              Canutimonedas cada uno.
            </p>
          </article>
        </div>

        <div className="demo-panel">
          <div className="demo-copy">
            <p className="section-tag">Pruébalo aquí</p>
            <h3>Una sesión.<br />Tres momentos.</h3>
            <p>
              Pulsa los botones para pasar del Focus al descanso y ver cómo
              aparece la recompensa. Sin cronómetros trampa ni menús raros.
            </p>
            <ul>
              <li><span>30</span> minutos mínimos de Focus</li>
              <li><span>10</span> minutos por pitipausa</li>
              <li><span>20</span> Canutimonedas por pausa</li>
            </ul>
          </div>
          <FocusDemo />
        </div>
      </section>

      <section className="rewards-section" id="recompensas">
        <div className="reward-headline">
          <p className="section-tag">Recompensas</p>
          <h2>
            Aquí avanzar
            <br />
            <span>sí tiene loot.</span>
          </h2>
          <p>
            Completar tareas sube tu nivel. Subir de nivel abre una Caja
            Misteriosa. Y sí: puede tocar algo que de verdad quieras usar.
          </p>
        </div>

        <div className="mystery-layout">
          <div className="mystery-box" aria-label="Representación de una Caja Misteriosa">
            <span className="box-spark box-spark-one" aria-hidden="true">✦</span>
            <span className="box-spark box-spark-two" aria-hidden="true">✦</span>
            <div className="box-lid">
              <span>NHub</span>
            </div>
            <div className="box-body">
              <span>?</span>
            </div>
            <p>Caja Misteriosa</p>
          </div>

          <div className="reward-cards">
            <article>
              <span className="reward-emoji" aria-hidden="true">🎮</span>
              <div>
                <p>Tiempo para ti</p>
                <strong>1 hora de juego</strong>
              </div>
              <span className="reward-price">1000 N</span>
            </article>
            <article>
              <span className="reward-emoji" aria-hidden="true">🍝</span>
              <div>
                <p>Plan premium</p>
                <strong>Cena fuera</strong>
              </div>
              <span className="reward-price">Premio</span>
            </article>
            <article>
              <span className="reward-emoji" aria-hidden="true">📱</span>
              <div>
                <p>Un ratito extra</p>
                <strong>30 min de móvil</strong>
              </div>
              <span className="reward-price">1000 N</span>
            </article>
          </div>
        </div>

        <div className="economy-strip" aria-label="Cómo funciona la economía de NHub">
          <article>
            <strong>2</strong>
            <p>Canutimonedas por cada minuto de pausa que ahorres.</p>
          </article>
          <article>
            <strong>20</strong>
            <p>Canutimonedas cuando completas una pitipausa entera.</p>
          </article>
          <article>
            <strong>∞</strong>
            <p>Recompensas que tú decides, porque la motivación es tuya.</p>
          </article>
        </div>
      </section>

      <section className="styles-section" id="estilos">
        <div className="styles-heading">
          <p className="section-tag">Personaliza Canutín</p>
          <h2>
            Un Canutín para
            <br />
            <span>cada historia.</span>
          </h2>
          <p>
            Ponle un accesorio, cambia su estilo de arriba abajo o descubre
            ediciones que solo aparecen con el código correcto.
          </p>
        </div>

        <div className="style-gallery">
          <article>
            <div className="style-image-wrap">
              <img
                src="/accessory-red-cap.webp"
                alt="Canutín con una gorra roja"
              />
              <span>ACCESORIO</span>
            </div>
            <p>Accesorio · Equipable</p>
            <h3>Gorra roja</h3>
            <small>Una gorra. Otra actitud.</small>
          </article>
          <article>
            <div className="style-image-wrap">
              <img
                src="/style-gold.webp"
                alt="Canutín en estilo Gold con un aura dorada"
              />
              <span>ESTILO</span>
            </div>
            <p>Estilo · NHub Gold</p>
            <h3>Modo Gold</h3>
            <small>Más brillo, más calma y bastante presencia.</small>
          </article>
          <article>
            <div className="style-image-wrap is-secret">
              <img
                src="/code-mystery.png"
                alt="Silueta negra de una edición secreta de Canutín"
              />
              <span>CÓDIGO</span>
            </div>
            <p>Código · Clasificado</p>
            <h3>¿Quién será?</h3>
            <small>Hay ediciones que todavía no piensan enseñarte la cara.</small>
          </article>
        </div>

        <div className="gold-banner">
          <div>
            <span className="gold-badge">NH</span>
            <p>NHub Gold</p>
          </div>
          <h3>Tu estilo. De día y de noche.</h3>
          <p>
            Cada edición conserva su identidad en tema claro y oscuro. Cambia
            la luz, no el personaje que elegiste.
          </p>
          <span className="theme-toggle" aria-label="Vista decorativa de temas claro y oscuro">
            <i>☀</i>
            <i>☾</i>
          </span>
        </div>
      </section>

      <section className="final-cta">
        <span className="final-star final-star-one" aria-hidden="true">✦</span>
        <span className="final-star final-star-two" aria-hidden="true">✦</span>
        <img src="/canutin-hero.webp" alt="" aria-hidden="true" />
        <p className="section-tag">NHub · v1.7</p>
        <h2>
          Haz una cosa.
          <br />
          Luego otra.
        </h2>
        <p>Y date el descanso que toca.</p>
        <a className="primary-cta final-button" href="#inicio">
          Volver al principio
          <span aria-hidden="true">↑</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#inicio" aria-label="NHub, volver al inicio">
          <span className="brand-n">N</span>
          <span className="brand-hub">Hub</span>
        </a>
        <p>Hecha con café, ideas raras y demasiadas pruebas.</p>
        <p>© 2026 · NHub</p>
      </footer>
    </main>
  );
}
