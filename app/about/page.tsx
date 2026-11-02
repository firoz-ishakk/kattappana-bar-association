import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Court Complex, Kattappana was established in 1993 through the efforts of advocates from Kattappana and neighbouring areas. Learn the history of the courts and the Bar Association.",
  openGraph: {
    title: "About Us | The Bar Association Kattappana",
    description: "Firm On The Hills, Devoted To Justice.",
  },
};

export default function AboutPage() {
  return (
    <section className="about-intro page-top">
      <div className="wrap" style={{ paddingTop: 40 }}>
        <hr className="rule" />
        <h1 className="title">About Us</h1>
        <div className="about-copy rv">
          <p>
            The Court Complex, Kattappana was established in 1993, following the
            persistent efforts of a group of advocates from Kattappana and its
            neighbouring areas, who had come together to form an Advocates
            Association in 1991. Recognising the need for a judicial
            establishment at Kattappana, the Association submitted several
            representations before the Hon&apos;ble High Court of Kerala and the
            Government. As a result of the continuous efforts and
            representations made by the office bearers and members, the Sub Court
            originally proposed to be established at Thalassery was relocated to
            Kattappana. Accordingly, the Sub Court, Kattappana, commenced
            functioning in a rented building in 1993. This was reportedly the
            first instance of a Sub Court being established at a place where no
            Munsiff&apos;s Court was functioning. Subsequently, in 1995, the
            Munsiff-Magistrate Court was also established and commenced
            functioning in the same rented premises.
          </p>
          <p>
            Considering the growing number of cases and the inconvenience caused
            to litigants due to the limited facilities in the rented building,
            the Kattappana Grama Panchayat came forward with a proposal to
            construct a permanent Court Complex on its property. The proposal was
            accepted by the Hon&apos;ble High Court of Kerala, and construction
            commenced in 2002. The building was completed in 2004 and handed over
            to the Judiciary.
          </p>
          <p>
            In 2014, the Family Court was established at Kattappana and initially
            commenced functioning in a rented building. In 2015, funds were
            allotted for the construction of an additional Court Complex,
            pursuant to proposals submitted before the Government. Construction
            commenced in 2018 and was completed in 2022. Meanwhile, the Gram
            Nyayalaya was established in 2016, followed by the Special Court for
            the Trial of POCSO Cases in 2020. Both these courts were accommodated
            on the rooftop of the old Court Complex, where roofing sheets and
            partition structures were erected to provide the necessary
            facilities. The entire expenditure towards creating the
            infrastructure required for the functioning of these two courts was
            met through funds mobilised exclusively from the members of the Bar
            Association.
          </p>
          <p>
            In 2023, the Family Court was shifted from its rented premises to the
            newly constructed additional Court Complex. The new building also
            accommodates the Bar Association Hall, Canteen, Library and the
            office of the Taluk Legal Services Authority (T.L.S.A.), providing
            improved facilities for advocates, litigants and other stakeholders
            in the justice delivery system.
          </p>
          <p>
            From its humble beginnings in a rented building to the establishment
            of multiple courts and the development of permanent judicial
            infrastructure, the growth of the Kattappana Court Complex stands as
            a testament to the vision, perseverance and collective contributions
            of successive office bearers and members of the Bar Association,
            Kattappana over the years.
          </p>
        </div>
      </div>
    </section>
  );
}
