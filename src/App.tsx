import FocusDemo from "./focus-demo";
import { languages, useI18n } from "./i18n";

export default function Home() {
  const { language, setLanguage, t } = useI18n();

  return (
    <main id="inicio">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={t("brandHome")}>
          <span className="brand-n">N</span>
          <span className="brand-hub">Hub</span>
        </a>

        <nav className="site-nav" aria-label={t("mainNav")}>
          <a href="#como-funciona">{t("how")}</a>
          <a href="#recompensas">{t("rewards")}</a>
          <a href="#estilos">{t("styles")}</a>
        </nav>

        <div className="header-actions">
          <div
            className="language-selector"
            role="group"
            aria-label={t("language")}
          >
            {languages.map((item, index) => (
              <span key={item}>
                {index > 0 && <i aria-hidden="true">·</i>}
                <button
                  type="button"
                  aria-pressed={language === item}
                  onClick={() => setLanguage(item)}
                >
                  {item.toUpperCase()}
                </button>
              </span>
            ))}
          </div>
          <a className="header-pill" href="#como-funciona">
            {t("discover")}
          </a>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <span className="doodle doodle-spark" aria-hidden="true">✦</span>
        <span className="doodle doodle-loop" aria-hidden="true">⌁</span>
        <span className="doodle doodle-plus" aria-hidden="true">＋</span>

        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {t("productivity")}
          </p>
          <h1 id="hero-title">
            {t("doIt")}
            <br />
            {t("rest")}
            <br />
            <span>{t("win")}</span>
          </h1>
          <p className="hero-lede">{t("heroDescription")}</p>
          <div className="hero-actions">
            <a className="primary-cta" href="#como-funciona">
              {t("meet")}
              <span aria-hidden="true">↘</span>
            </a>
            <p>
              <span aria-hidden="true">✦</span>
              {t("version")}
            </p>
          </div>
        </div>

        <div className="hero-visual" aria-label={t("preview")}>
          <div className="ui-card focus-card">
            <div className="card-kicker">
              <span>{t("currentFocus")}</span>
              <span className="session-pill">{t("session")}</span>
            </div>
            <div className="focus-ring">
              <span>25:00</span>
              <small>{t("running")}</small>
            </div>
            <div className="task-line">
              <span className="task-check" aria-hidden="true">✓</span>
              {t("finishPortfolio")}
            </div>
          </div>

          <div className="ui-card break-card">
            <span className="mini-label">{t("break")}</span>
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
              <span className="mini-label">{t("coins")}</span>
              <strong>+20</strong>
            </div>
          </div>

          <div className="canutin-wrap">
            <span className="sticker-shadow" aria-hidden="true" />
            <img
              src="/canutin-hero.webp"
              alt={t("mascotAlt")}
            />
          </div>
        </div>

        <div className="hero-facts" aria-label={t("keyFacts")}>
          <article>
            <span className="fact-icon fact-focus" aria-hidden="true">◎</span>
            <div>
              <strong>{t("focus")}</strong>
              <p>{t("from30")}</p>
            </div>
          </article>
          <article>
            <span className="fact-icon fact-break" aria-hidden="true">☕</span>
            <div>
              <strong>{t("breaks")}</strong>
              <p>{t("tenByTen")}</p>
            </div>
          </article>
          <article>
            <span className="fact-icon fact-coin" aria-hidden="true">N</span>
            <div>
              <strong>{t("coins")}</strong>
              <p>{t("twoPerMinute")}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="how-section" id="como-funciona">
        <div className="section-heading">
          <div>
            <p className="section-tag">{t("howTag")}</p>
            <h2>
              {t("lessFight")}
              <br />
              <span>{t("moreRhythm")}</span>
            </h2>
          </div>
          <p>{t("howDescription")}</p>
        </div>

        <div className="steps-grid">
          <article className="step-card step-one">
            <span className="step-number">01</span>
            <div className="step-visual task-visual" aria-hidden="true">
              <span>{t("today")}</span>
              <p><i>✓</i> {t("preparePortfolio")}</p>
              <p><i /> {t("practiceCode")}</p>
              <p><i /> {t("tidyDesk")}</p>
            </div>
            <h3>{t("chooseImportant")}</h3>
            <p>{t("chooseDescription")}</p>
          </article>

          <article className="step-card step-two">
            <span className="step-number">02</span>
            <div className="step-visual timer-visual" aria-hidden="true">
              <strong>30:00</strong>
              <span>{t("minimumFocus")}</span>
              <i />
            </div>
            <h3>{t("enterFocus")}</h3>
            <p>{t("focusDescription")}</p>
          </article>

          <article className="step-card step-three">
            <span className="step-number">03</span>
            <div className="step-visual break-visual" aria-hidden="true">
              <span>☕</span>
              <strong>10 min</strong>
              <p>{t("earnedPause")}</p>
            </div>
            <h3>{t("guiltFree")}</h3>
            <p>{t("breakDescription")}</p>
          </article>
        </div>

        <div className="demo-panel">
          <div className="demo-copy">
            <p className="section-tag">{t("tryHere")}</p>
            <h3>
              {t("oneSession")}
              <br />
              {t("threeMoments")}
            </h3>
            <p>{t("demoDescription")}</p>
            <ul>
              <li><span>30</span> {t("minimumMinutes")}</li>
              <li><span>10</span> {t("breakMinutes")}</li>
              <li><span>20</span> {t("coinsPerBreak")}</li>
            </ul>
          </div>
          <FocusDemo />
        </div>
      </section>

      <section className="rewards-section" id="recompensas">
        <div className="reward-headline">
          <p className="section-tag">{t("rewards")}</p>
          <h2>
            {t("progressHere")}
            <br />
            <span>{t("hasLoot")}</span>
          </h2>
          <p>{t("rewardDescription")}</p>
        </div>

        <div className="mystery-layout">
          <div className="mystery-box" aria-label={t("mysteryRepresentation")}>
            <span className="box-spark box-spark-one" aria-hidden="true">✦</span>
            <span className="box-spark box-spark-two" aria-hidden="true">✦</span>
            <div className="box-lid">
              <span>NHub</span>
            </div>
            <div className="box-body">
              <span>?</span>
            </div>
            <p>{t("mysteryBox")}</p>
          </div>

          <div className="reward-cards">
            <article>
              <span className="reward-emoji" aria-hidden="true">🎮</span>
              <div>
                <p>{t("timeForYou")}</p>
                <strong>{t("gameHour")}</strong>
              </div>
              <span className="reward-price">1000 N</span>
            </article>
            <article>
              <span className="reward-emoji" aria-hidden="true">🍝</span>
              <div>
                <p>{t("premiumPlan")}</p>
                <strong>{t("dinnerOut")}</strong>
              </div>
              <span className="reward-price">{t("prize")}</span>
            </article>
            <article>
              <span className="reward-emoji" aria-hidden="true">📱</span>
              <div>
                <p>{t("extraWhile")}</p>
                <strong>{t("phone30")}</strong>
              </div>
              <span className="reward-price">1000 N</span>
            </article>
          </div>
        </div>

        <div className="economy-strip" aria-label={t("economy")}>
          <article>
            <strong>2</strong>
            <p>{t("savedCoin")}</p>
          </article>
          <article>
            <strong>20</strong>
            <p>{t("fullBreakCoin")}</p>
          </article>
          <article>
            <strong>∞</strong>
            <p>{t("ownRewards")}</p>
          </article>
        </div>
      </section>

      <section className="styles-section" id="estilos">
        <div className="styles-heading">
          <p className="section-tag">{t("customize")}</p>
          <h2>
            {t("aCanutin")}
            <br />
            <span>{t("everyStory")}</span>
          </h2>
          <p>{t("stylesDescription")}</p>
        </div>

        <div className="style-gallery">
          <article>
            <div className="style-image-wrap">
              <img
                src="/accessory-red-cap.webp"
                alt={t("redCapAlt")}
              />
              <span>{t("accessory")}</span>
            </div>
            <p>{t("accessoryEquip")}</p>
            <h3>{t("redCap")}</h3>
            <small>{t("capDescription")}</small>
          </article>
          <article>
            <div className="style-image-wrap">
              <img
                src="/style-gold.webp"
                alt={t("goldAlt")}
              />
              <span>{t("style")}</span>
            </div>
            <p>{t("goldStyle")}</p>
            <h3>{t("goldMode")}</h3>
            <small>{t("goldDescription")}</small>
          </article>
          <article>
            <div className="style-image-wrap is-secret">
              <img
                src="/code-mystery.png"
                alt={t("secretAlt")}
              />
              <span>{t("code")}</span>
            </div>
            <p>{t("classified")}</p>
            <h3>{t("who")}</h3>
            <small>{t("secretDescription")}</small>
          </article>
        </div>

        <div className="gold-banner">
          <div>
            <span className="gold-badge">NH</span>
            <p>NHub Gold</p>
          </div>
          <h3>{t("dayNight")}</h3>
          <p>{t("themeDescription")}</p>
          <span className="theme-toggle" aria-label={t("themePreview")}>
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
          {t("doOne")}
          <br />
          {t("thenAnother")}
        </h2>
        <p>{t("deservedRest")}</p>
        <a className="primary-cta final-button" href="#inicio">
          {t("backTop")}
          <span aria-hidden="true">↑</span>
        </a>
      </section>

      <footer>
        <a className="brand" href="#inicio" aria-label={t("brandHome")}>
          <span className="brand-n">N</span>
          <span className="brand-hub">Hub</span>
        </a>
        <p>{t("madeWith")}</p>
        <p>© 2026 · NHub</p>
      </footer>
    </main>
  );
}
