import Image from "next/image";
import Link from "next/link";
import ImageCarousel from "@/components/ImageCarousel";

const aboutSlides = [
  {
    src: "/assets/about-1.jpg",
    alt: "Judicial Complex, Kattappana Grama Panchayat",
  },
  {
    src: "/assets/about-2.jpg",
    alt: "Court Complex and Bar Association premises, Kattappana",
  },
  {
    src: "/assets/about-3.jpg",
    alt: "Bar Association Kattappana building",
  },
];

const officers = [
  {
    name: "Sri. S. K. Anilkumar",
    role: "Judge, Family Court, Kattappana",
    image: "/assets/anilkumar.jpg",
  },
  {
    name: "Sri. Bilkul G. R.",
    role: "Spl. Judge, FTSC (POCSO Act Cases), Kattappana",
    image: "/assets/bilkul.jpg",
  },
  {
    name: "Sri. Nimmi K K",
    role: "Sub Judge, Kattappana",
    image: "/assets/nimmi.jpg",
  },
  {
    name: "Sri. Anoop P Abraham",
    role: "Judicial First Class Magistrate, Kattappana",
    image: "/assets/anoop.jpg",
  },
  {
    name: "Sri. Ruby Ismail",
    role: "Munsiff Magistrate, Kattappana",
    image: "/assets/ruby.jpg",
  },
  {
    name: "Sri. Shiju A F",
    role: "Nyayadhikari Kattappana, Gram Nyayalaya Kattappana",
    image: "/assets/shiju.jpg",
  },
];

const bearers = [
  { role: "President", name: "Adv. Biju Scaria", lead: true },
  { role: "Vice President", name: "Adv. Prazeeda K Pillai" },
  { role: "Secretary", name: "Adv. Jesson Sunny" },
  { role: "Joint Secretary", name: "Adv. Annalakshmi" },
  { role: "Treasurer", name: "Adv. M Mahesh" },
];

const committee = [
  {
    title: "Members",
    members: [
      "Adv. Muraleedharan P.R",
      "Adv. Shajimon K.G",
      "Adv. James K.J",
      "Adv. Gem Korason",
      "Adv. Prathapan K.R",
      "Adv. Vini T Balaji",
    ],
  },
  {
    title: "Lady Representatives",
    members: [
      "Adv. Kavery Muraleedharan",
      "Adv. Seemamol E.S",
      "Adv. Subymol K J",
    ],
  },
  {
    title: "Junior Representative",
    members: ["Adv. Aliya Mathew"],
  },
];

export default function HomePage() {
  return (
    <>
      <div
        className="hero"
        id="home"
        role="img"
        aria-label="Statue of Lady Justice above the hills of Idukki at sunrise"
      >
        <Image
          src="/assets/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "35% center" }}
        />
        <div className="wrap">
          <p className="name text-xl">The Bar Association Kattappana</p>
          <h1>Firm On The Hills, Devoted To Justice.</h1>
          <div className="cta">
            <Link className="btn fill" href="#bearers">
              Meet our office bearers
            </Link>
            <Link className="btn ghost" href="/contact">
              Contact us
            </Link>
          </div>
        </div>
      </div>

      <section id="about-intro" className="about-intro">
        <div className="wrap">
          <hr className="rule" />
          <h2 className="title">The Bar Association, Kattappana</h2>
          <ImageCarousel slides={aboutSlides} />
          <div className="about-copy rv">
            <p>
              Established in 1993, the Bar Association, Kattappana, stands as
              one of the premier professional bodies in Idukki District,
              representing advocates practising in Kattappana and across the
              High Range of Idukki. The Association serves as a collective voice
              of the legal fraternity, fostering professional excellence,
              upholding the rule of law, and strengthening the administration of
              justice.
            </p>
            <p>
              Functioning within the regulatory framework of the Bar Council of
              India and the Bar Council of Kerala, the Association is committed
              to protecting the professional interests of its members while
              upholding the highest standards of legal ethics, integrity, and
              responsibility.
            </p>
            <p>
              Rooted in professional integrity, united by a shared commitment to
              justice, and dedicated to public service, the Bar Association,
              Kattappana, continues to uphold the values and traditions of the
              legal profession while contributing to a fairer, more equitable,
              and just society.
            </p>
          </div>
        </div>
      </section>

      <section id="courts">
        <div className="wrap">
          <hr className="rule" />
          <h2 className="title">Court Complex, Kattappana</h2>
          <p className="lede">
            The presiding officers of the courts at the Kattappana Court Complex.
          </p>
          <div className="grid">
            {officers.map((officer) => (
              <article className="person" key={officer.name}>
                <div className="ph rv">
                  <Image
                    src={officer.image}
                    alt={officer.name}
                    fill
                    sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center 15%",
                    }}
                  />
                </div>
                <div className="t">
                  <h3>{officer.name}</h3>
                  <p className="d">{officer.role}</p>
                  <p>Court Complex, Kattappana</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bearers">
        <div className="wrap">
          <hr className="rule" />
          <h2 className="title">
            Our Office Bearers <small>(Present)</small>
          </h2>
          <p className="lede">The elected team guiding the Association.</p>
          <div className="bearers">
            {bearers.map((bearer) => (
              <div
                className={`bearer rv${bearer.lead ? " lead" : ""}`}
                key={bearer.role}
              >
                <p className="role">{bearer.role}</p>
                <h3>{bearer.name}</h3>
              </div>
            ))}
          </div>
          <h2
            className="title"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Executive Committee Members
          </h2>
          <div className="committee" style={{ marginTop: 24 }}>
            {committee.map((group) => (
              <div className="rv" key={group.title}>
                <h3>{group.title}</h3>
                <ol>
                  {group.members.map((member) => (
                    <li key={member}>{member}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
