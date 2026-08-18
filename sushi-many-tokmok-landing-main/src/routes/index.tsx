import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bike,
  Wifi,
  Sun,
  Accessibility,
  ShoppingBag,
  MapPin,
  Clock,
  Phone,
  Star,
  Menu as MenuIcon,

} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import logo from "@/assets/logo.png";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import menuSushi from "@/assets/menu-sushi.jpg";
import menuPizza from "@/assets/menu-pizza.jpg";
import menuRamen from "@/assets/menu-ramen.jpg";
import menuTomyum from "@/assets/menu-tomyum.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sushi Many — суши-бар в Токмоке, Кыргызстан" },
      {
        name: "description",
        content:
          "Sushi Many в Токмоке: свежие суши, роллы, пицца, рамен и том ям. Летняя терраса, бесплатный Wi-Fi, навынос и доставка. Заказать в WhatsApp.",
      },
      { property: "og:title", content: "Sushi Many — суши-бар в Токмоке" },
      {
        property: "og:description",
        content: "Настоящие суши в центре Токмока. Доставка и навынос ежедневно с 10:00 до 00:00.",
      },
      { property: "og:type", content: "restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/996502561975";
const PHONE = "+996 502-561975";

const NAV = [
  { label: "Главная", href: "#home" },
  { label: "Меню", href: "#menu" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

const MENU = [
  {
    category: "Суши и роллы",
    img: menuSushi,
    items: [
      { name: "Ролл Филадельфия", price: "320 сом" },
      { name: "Ролл Калифорния", price: "280 сом" },
      { name: "Нигири с лососем (2 шт.)", price: "180 сом" },
    ],
  },
  {
    category: "Пицца",
    img: menuPizza,
    items: [
      { name: "Маргарита", price: "390 сом" },
      { name: "Пепперони", price: "450 сом" },
      { name: "Четыре сыра", price: "480 сом" },
    ],
  },
  {
    category: "Рамен",
    img: menuRamen,
    items: [
      { name: "Рамен с курицей", price: "290 сом" },
      { name: "Рамен Тонкотсу", price: "340 сом" },
      { name: "Острый мисо рамен", price: "330 сом" },
    ],
  },
  {
    category: "Том Ям",
    img: menuTomyum,
    items: [
      { name: "Том ям с креветками", price: "360 сом" },
      { name: "Том ям с курицей", price: "310 сом" },
      { name: "Том ям с морепродуктами", price: "420 сом" },
    ],
  },
];

const FEATURES = [
  { icon: Bike, title: "Доставка", text: "Быстрая доставка по Токмоку" },
  { icon: Wifi, title: "Бесплатный Wi-Fi", text: "Для всех наших гостей" },
  { icon: Sun, title: "Летняя терраса", text: "Уличные столики в сезон" },
  { icon: Accessibility, title: "Доступность", text: "Удобный вход для всех" },
  { icon: ShoppingBag, title: "Навынос", text: "Готово через несколько минут" },
];

const REVIEWS = [
  {
    name: "Айжан Т.",
    text: "Самые свежие роллы в Токмоке. Приходим каждые выходные — летом терраса просто идеальна.",
  },
  {
    name: "Руслан К.",
    text: "Заказывали рамен и том ям на доставку, приехало горячим и быстро. Порции большие для такой цены.",
  },
  {
    name: "Марина С.",
    text: "Уютное место, приветливый персонал и отличные суши-сеты. Средний чек около 500 сом за два блюда.",
  },
];

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 text-sun ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="size-4 fill-current" />
      ))}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-ink">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center gap-3 px-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Логотип Sushi Many" width={48} height={48} className="size-11" />
            <span className="font-display text-xl font-bold tracking-tight">Sushi Many</span>
          </a>
          <nav className="ml-auto hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-semibold text-ink/80 transition-colors hover:text-brand"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="ml-auto hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-colors hover:bg-sun md:ml-6 md:inline-flex"
          >
            Заказать в WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Открыть меню"
            className="ml-auto rounded-md p-2 text-ink md:hidden"
          >
            <MenuIcon className="size-6" />
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background px-4 py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-1 text-base font-semibold text-ink/85"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-2 rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-brand-foreground"
              >
                Заказать в WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-surface">
          <div
            aria-hidden="true"
            className="sun-motif pointer-events-none absolute -right-24 -top-40 size-[28rem] rounded-full opacity-10"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
                Токмок · японская кухня
              </p>
              <h1 className="font-display text-4xl leading-tight font-bold md:text-5xl">
                Настоящие суши в центре Токмока
              </h1>
              <p className="mt-5 max-w-md text-base text-ink/70">
                Суши, роллы, рамен, том ям и пицца — готовим свежим каждый день. Ужинайте на летней
                террасе или закажите доставку на дом.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground shadow-lg shadow-brand/25 transition-transform hover:-translate-y-0.5 hover:bg-sun"
                >
                  Заказать сейчас
                </a>
                <a
                  href="#menu"
                  className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-bold text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  Смотреть меню
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Stars />
                <span className="text-sm text-ink/70">4.3 · 117+ отзывов</span>
              </div>
            </div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-6 -top-6 size-24 rounded-full bg-brand/10 md:size-32"
              />
              <img
                src={hero}
                alt="Assorted sushi rolls and nigiri on a slate board"
                width={1536}
                height={1024}
                className="relative w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <img
                src={about}
                alt="Интерьер Sushi Many и летняя терраса"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full rounded-3xl object-cover shadow-xl"
              />
            </Reveal>
            <Reveal delay={120}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                О нас
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Кусочек Японии в Чуйской области
              </h2>
              <div className="my-5 h-px w-16 bg-sun" />
              <p className="text-ink/70">
                Готовим только из свежих продуктов, которые привозят ежедневно: настоящая рыба, хрустящие
                овощи и рис, сваренный по традиционной технологии. Каждый ролл готовим на заказ.
              </p>
              <p className="mt-4 text-ink/70">
                Внутри вас ждёт спокойный минималистичный интерьер; летом лучшее место в Токмоке — на
                нашей открытой террасе. Средний чек около 500 сом.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Menu */}
        <section id="menu" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Меню</span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Что мы готовим
              </h2>
              <div className="mx-auto my-5 h-px w-16 bg-sun" />
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MENU.map((cat, i) => (
                <Reveal key={cat.category} delay={i * 90}>
                  <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                    <img
                      src={cat.img}
                      alt={cat.category}
                      loading="lazy"
                      width={768}
                      height={768}
                      className="aspect-square w-full object-cover"
                    />
                    <div className="border-t-2 border-sun/70 p-5">
                      <h3 className="font-display text-lg font-bold group-hover:text-brand">
                        {cat.category}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {cat.items.map((it) => (
                          <li key={it.name} className="flex justify-between gap-3 text-sm">
                            <span className="text-ink/75">{it.name}</span>
                            <span className="font-semibold text-brand">{it.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 70}>
                <div className="flex h-full flex-col items-center rounded-2xl border border-border p-6 text-center transition-colors hover:border-sun">
                  <span className="mb-4 inline-flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <f.icon className="size-6" />
                  </span>
                  <h3 className="font-display text-base font-bold">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/65">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <Reveal className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Отзывы
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                4.3★ от 117+ гостей
              </h2>
              <div className="mx-auto my-5 h-px w-16 bg-sun" />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 100}>
                  <figure className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <Stars />
                    <blockquote className="mt-4 text-sm leading-relaxed text-ink/75">
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-5 text-sm font-semibold">{r.name}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Контакты
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Приходите к нам</h2>
              <div className="my-5 h-px w-16 bg-sun" />
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-ink/75">
                    улица Комсомольская, 73/1, Токмок, Чуйская область
                  </span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-5 shrink-0 text-brand" />
                  <span className="text-ink/75">Ежедневно, 10:00 – 00:00</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-5 shrink-0 text-brand" />
                  <a href="tel:+996502561975" className="text-ink/75 hover:text-brand">
                    {PHONE}
                  </a>
                </li>
              </ul>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-brand-foreground transition-colors hover:bg-sun"
              >
                Написать в WhatsApp
              </a>
            </Reveal>
            <Reveal delay={120}>
              <iframe
                title="Sushi Many location map"
                src="https://www.google.com/maps?q=Komsomolskaya%20Street%2073%2F1%20Tokmok%20Chuy%20Region&output=embed"
                loading="lazy"
                className="h-80 w-full rounded-3xl border border-border md:h-full"
              />
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink py-12 text-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Логотип Sushi Many" loading="lazy" width={44} height={44} className="size-10" />
              <span className="font-display text-lg font-bold">Sushi Many</span>
            </div>
            <p className="mt-4 text-sm text-background/70">
              Японская кухня в Токмоке. Суши, роллы, пицца, рамен и том ям.
            </p>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest">Контакты</h3>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>ул. Комсомольская, 73/1, Токмок</li>
              <li>Ежедневно 10:00 – 00:00</li>
              <li>
                <a href="tel:+996502561975" className="hover:text-sun">
                  {PHONE}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest">Мы в соцсетях</h3>
            <ul className="mt-4 space-y-2 text-sm text-background/70">
              <li>
                <a href={WA} target="_blank" rel="noopener" className="hover:text-sun">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener" className="hover:text-sun">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener" className="hover:text-sun">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-background/15 px-4 pt-6 text-xs text-background/50">
          © {new Date().getFullYear()} Sushi Many. Все права защищены.
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-xl shadow-brand/30 transition-transform hover:scale-110"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="size-7" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 2C6.5 2 2 6.5 2 12.05c0 1.77.46 3.5 1.35 5.03L2 22l5.06-1.33a10 10 0 0 0 4.99 1.33h.01c5.54 0 10.04-4.5 10.04-10.05C22.1 6.5 17.6 2 12.05 2z" />
        </svg>
      </a>
    </div>
  );
}
