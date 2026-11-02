import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Members",
  description:
    "Members of The Bar Association Kattappana. Directory coming soon.",
  openGraph: {
    title: "Our Members | The Bar Association Kattappana",
    description: "Firm On The Hills, Devoted To Justice.",
  },
};

export default function MembersPage() {
  return (
    <section className="inner dark page-top">
      <div className="wrap">
        <hr className="rule" />
        <h1 className="title">Our Members</h1>
        <p style={{ maxWidth: "46ch", margin: "0 auto", color: "#c9d6d0" }}>
          The members directory is being prepared and will be published here.
        </p>
        <span className="soon">Coming soon</span>
      </div>
    </section>
  );
}
