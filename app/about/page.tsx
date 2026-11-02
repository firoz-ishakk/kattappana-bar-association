import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About The Kattappana Bar Association, Kattappana, Idukki. Our story and objectives are coming soon.",
  openGraph: {
    title: "About Us | The Kattappana Bar Association",
    description: "Firm On The Hills, Devoted To Justice.",
  },
};

export default function AboutPage() {
  return (
    <section className="inner dark page-top">
      <div className="wrap">
        <hr className="rule" />
        <h1 className="title">About Us</h1>
        <p style={{ maxWidth: "46ch", margin: "0 auto", color: "#c9d6d0" }}>
          Our story, history and objectives are being prepared and will be
          published here.
        </p>
        <span className="soon">Coming soon</span>
      </div>
    </section>
  );
}
