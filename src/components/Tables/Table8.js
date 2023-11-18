import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Table8 = () => {
  return (
    <>
     <section className="content-table home-wrapper-2">
      <div className="container-xxl">
        <div className="row" data-aos="fade-down" data-aos-delay="300">
          <h2>CRIMINOLOGY & SEARCH CATEGORY OF SERVICES</h2>
          <div className="col-12">
            <table className="tab_ca">
              <tbody>
                <tr>
                  <td className="cell_ca_head_dx_dr">
                    <p className="ca_head_title_wt">Avenue of Services</p>
                  </td>
                  <td className="cell_ca_head_dy">
                    <p className="ca_head_title_wt">Descriptive Outline</p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">
                        Asset Search &amp; Investigation Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Asset search and investigation services include the
                      locating of public records that confirm personal property
                      or real estate held by a person or corporate entity, these
                      approaches uncover value and any potential liabilities
                      that may be related with a property or other valuables.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">Blue Collar Crime</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Blue collar crimes are considered to be criminal offenses
                      which are of a less social platform than that of
                      professional white-collar crimes. While many blue-collar
                      crimes involve force, violence, or weapons, they are also
                      typing of criminal offenses which are simply crimes of
                      opportunity.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">Criminal Law Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Criminal law concerns the system of legal rules that
                      define what conduct is classified as a crime and how the
                      government may prosecute individuals that commit crimes,
                      in instances where an individual fails to adhere to a
                      particular criminal statute, he or she commits a criminal
                      act by breaking the law.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">Cybercrime Law Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Cybercrime, also known as computer crime, the use of a
                      computer as an instrument to perform an illegal act, such
                      as committing fraud, trafficking in child pornography and
                      intellectual property, stealing identities, or violating
                      privacy, cybercrime, especially through the Internet.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">White Collar Crime</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      White collar crime refers to financially motivated,
                      nonviolent crime committed by individuals, businesses and
                      government professionals, examples of white collar crimes
                      include securities fraud, embezzlement, corporate fraud,
                      and money laundering.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <span>
              {" "}
              <p className="table-end">
                <strong>
                  <a>Table: </a>Criminology & Search Category of Services
                </strong>
              </p>
              <Link to="/" className="d-flex align-items-center gap-15">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go Back To Home
                </Link>
            </span>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Table8;
