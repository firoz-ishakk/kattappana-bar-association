import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact The Bar Association Kattappana, Court Complex, ITI Junction, Kattappana, Idukki - 685508. Phone +91 97472 21318.",
  openGraph: {
    title: "Contact Us | The Bar Association Kattappana",
    description: "Firm On The Hills, Devoted To Justice.",
  },
};

export default function ContactPage() {
  return (
    <section className="inner page-top">
      <div className="wrap contact">
        <div className="rv">
          <hr className="rule" />
          <h1 className="title">Contact Us</h1>
          <dl>
            <dt>Address</dt>
            <dd>
              The Bar Association Kattappana
              <br />
              Court Complex, ITI Junction
              <br />
              Kattappana, Idukki - 685508
            </dd>
            <dt>Phone</dt>
            <dd>
              <a href="tel:+919747221318">+91 97472 21318</a>
            </dd>
          </dl>
        </div>
        <div className="mapcard rv">
          <h3>Find us on the map</h3>
          <p>The Court Complex is at ITI Junction, Kattappana.</p>
          <a
            className="btn fill"
            href="https://maps.app.goo.gl/ByXJvoPbEkBfzN3F9?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
