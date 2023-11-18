import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Table7 = () => {
  return (
    <>
     <section className="content-table home-wrapper-2">
      <div className="container-xxl">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <h2>ENERGY & INDUSTRIAL CATEGORY OF SERVICES</h2>
          <div className="col-12">
            <table className="tab_ca">
              <tbody>
                <tr>
                  <td className="cell_ca_head_dx_db">
                    <p className="ca_head_title_wt">Avenue of Services</p>
                  </td>
                  <td className="cell_ca_head_dg">
                    <p className="ca_head_title_wt">Descriptive Outline</p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lb">
                    <a href="">
                      <p className="des_title_db">Employment Law Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_lg">
                    <p className="tax_text">
                      Employment law regulate relationships between employers
                      and employees, these laws compliment in smooth running of
                      the business with regard to matters relating to employment
                      for achieving the target of higher productivity,
                      reasonable profits and earnings and reduction in unjust
                      practices or discrimination.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lb">
                    <a href="">
                      <p className="des_title_db">Energy Law Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_lg">
                    <p className="tax_text">
                      Energy laws are the prime authorities related to energy
                      and power and administer the use and assessment of energy
                      both renewable and non-renewable, in contrast, energy
                      operational policy refers to the policy making of energy
                      and use, includes the legal provision for oil, gasoline,
                      and extraction.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lb">
                    <a href="">
                      <p className="des_title_db">Energy Projects Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_lg">
                    <p className="tax_text">
                      Energy projects ensuing from international, multilateral,
                      or even through bilateral agreements between countries
                      that can assist each other in the field of energy, can be
                      commenced in a very short timeframe, these projects are
                      capital intensive, and require a high level of investment.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lb">
                    <a href="">
                      <p className="des_title_db">
                        Human Resource Manual Services
                      </p>
                    </a>
                  </td>
                  <td className="cell_blank_des_lg">
                    <p className="tax_text">
                      Human resource manual is a document detailing an
                      organization's policies regarding employee management and
                      the relationship between managers and employees, taking
                      the form of either an employee handbook or an internal
                      document used by management.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lb">
                    <a href="">
                      <p className="des_title_db">Industrial Law Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_lg">
                    <p className="tax_text">
                      Industrial law relates to the governing of industrial
                      enterprises, inclusive of formation of trade unions,
                      employment concerns, industrial relations between
                      employers and workmen, safety regulations and
                      trans-regional establishments and industry.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lb">
                    <a href="">
                      <p className="des_title_db">Labour Law Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_lg">
                    <p className="tax_text">
                      Labour law arbitrates the relationship between workers,
                      engaging entities, trade unions and the government whereas
                      joint labour law relates to the three-way relationship
                      between worker, owner and the union and individual labour
                      law corresponds workers' rights at work through contract.
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="cell_ca_dx_lb">
                    <a href="">
                      <p className="des_title_db">Oil &amp; Gas Law Services</p>
                    </a>
                  </td>
                  <td className="cell_blank_des_lg">
                    <p className="tax_text">
                      Oil and gas law governs oil and gas production, laws
                      determine who owns the right to mine for oil and gas and
                      what circumstances miners have to follow when they harvest
                      oil and gas, statutory law and administrative regulations
                      that govern the mining and harvesting of these natural
                      resources.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <span>
              <p className="table-end">
                <strong>
                  <a>Table: </a>Energy & Industrial Category of Services
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

export default Table7;
