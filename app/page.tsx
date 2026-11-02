import Image from "next/image";
import Link from "next/link";

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
