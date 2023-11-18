import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Table3 = () => {
  return (
    <>
     <section className="content-table home-wrapper-2">
      <div className="container-xxl">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <h2>INTELLECTUAL PROPERTY CATEGORY OF SERVICES</h2>
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
                        Copyright Application &amp; Registration Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Copyright law comprehends an exclusive right to the owner
                      to use the original expressive work with some limited
                      exceptions, notable instances include the original works
                      of fictional writings, non-fictional writings, music,
                      lyrics, architectural design, artistic works, paintings,
                      and sculptures etc.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">
                        Industrial Design Application &amp; Registration
                        Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Industrial design law encompasses a designing process
                      applied to products that are to be manufactured by mass
                      production, this is the creative act of significant
                      characterization of a product's form, shape and features,
                      which takes place in development of the creation of a
                      product.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">
                        Intellectual Property Law Enforcement Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Intellectual Property Enforcement (IPE) has objectives to
                      deter access to counterfeit and pirated goods that can
                      harm consumers; to ensure that the interests of IP rights
                      holders are protected; and to promote IP protection and
                      enforcement as imperative for economic development in the
                      country.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">
                        Intellectual Property Law Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Intellectual property law deals with laws to protect and
                      enforce rights of the creators and owners of inventions,
                      writing, music, designs and other works, there are several
                      areas associated with intellectual property including
                      copyrights, industrial designs, patents, trademarks and
                      trade secrets.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">
                        Patent Application &amp; Registration Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Patent law deals with inventions, patents protect tangible
                      scientific inventions, such as circuit boards, car
                      engines, heating coils, or zippers, however, over time
                      patents have been used to protect a broader variety of
                      inventions such as coding algorithms, business practices,
                      or genetically modified organisms.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">
                        Provisional Refusal Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Provisional refusal means a declaration made by the
                      Intellectual Property Organization (IPO), outlining the
                      grounds on the basis of which protection / acceptance of
                      mark cannot be granted; it also highlights the
                      deficiencies to be remedied by the applicant / holder.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lr">
                    <a href="">
                      <p className="des_title_dr">
                        Trademark Application &amp; Registration Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_ly">
                    <p className="tax_text">
                      Trademark law states a word, phrase, or logo that
                      identifies the source of goods or services, trademark law
                      protects a business' commercial identity or brand by
                      discouraging other businesses from adopting a name or logo
                      that is of similar nature to an existing trademark.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="table-end">
              <strong>
                <a>Table: </a>Business &amp; Intellectual Property Category of
                Services
              </strong>
            </p>
            <Link to="/" className="d-flex align-items-center gap-15">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go Back To Home
                </Link>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Table3;
