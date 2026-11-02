import type { Metadata } from "next";
import ImageCarousel from "@/components/ImageCarousel";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Established in 1993, the Bar Association, Kattappana, is one of the premier professional bodies in Idukki District, representing advocates across the High Range of Idukki.",
  openGraph: {
    title: "About Us | The Bar Association Kattappana",
    description: "Firm On The Hills, Devoted To Justice.",
  },
};

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

export default function AboutPage() {
  return (
    <section className="about-intro page-top">
      <div className="wrap" style={{ paddingTop: 40 }}>
        <hr className="rule" />
        <h1 className="title">About Us</h1>
        <ImageCarousel slides={aboutSlides} />
        <div className="about-copy rv">
          <p>
            Established in 1993, the Bar Association, Kattappana, stands as one
            of the premier professional bodies in Idukki District, representing
            advocates practising in Kattappana and across the High Range of
            Idukki. The Association serves as a collective voice of the legal
            fraternity, fostering professional excellence, upholding the rule of
            law, and strengthening the administration of justice.
          </p>
          <p>
            Functioning within the regulatory framework of the Bar Council of
            India and the Bar Council of Kerala, the Association is committed to
            protecting the professional interests of its members while upholding
            the highest standards of legal ethics, integrity, and responsibility.
          </p>
          <p>
            Rooted in professional integrity, united by a shared commitment to
            justice, and dedicated to public service, the Bar Association,
            Kattappana, continues to uphold the values and traditions of the
            legal profession while contributing to a fairer, more equitable, and
            just society.
          </p>
        </div>
      </div>
    </section>
  );
}
