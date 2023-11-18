import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Table5 = () => {
  return (
    <>
	 <section className="content-table home-wrapper-2">
      <div className="container-xxl">
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          <h2>CHILD PROTECTION & FAMILY CATEGORY OF SERVICES</h2>
          <div className="col-12">
            <span itemscope="">
              <meta itemprop="name" content="Child Protection &amp; Family" />
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
                        <p className="des_title_db">Child Abduction Law</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_lg">
                      <p className="tax_text">
                        Child abduction is referred as the taking away, keeping,
                        withholding or concealing of any child with the intent
                        to detain or conceal that child from the lawful custody
                        or control of the parent, guardian or custodian of such
                        child.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lb">
                      <a href="">
                        <p className="des_title_db">Child Aboption Law</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_lg">
                      <p className="tax_text">
                        Child adoption is a process where a person assumes the
                        guardianship of another, usually a child, from that
                        person's biological or legal parent or parents, legal
                        child adoptions permanently transfer the rights and
                        responsibilities to guardian, along with filiation, from
                        the biological parent or parents.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lb">
                      <a href="">
                        <p className="des_title_db">Child Custody Law</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_lg">
                      <p className="tax_text">
                        Child custody is a legal term which describes the legal
                        and practical relationship between a parent / guardian
                        and a child in that person's care, the right of which is
                        to make decisions about the child, and physical custody,
                        the right and duty to provide house, shelter, care and
                        welfare of the child.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lb">
                      <a href="">
                        <p className="des_title_db">
                          Divorce Law, Khula &amp; Talaq
                        </p>
                      </a>
                    </td>
                    <td className="cell_blank_des_lg">
                      <p className="tax_text">
                        Divorce law encompasses a divorce or dissolution of
                        marriage is the ending of a marriage before the death of
                        either spouse, it can be contrasted with an annulment,
                        which is a declaration that a marriage is void, though
                        the effects of marriage may be recognized in such
                        unions.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lb">
                      <a href="">
                        <p className="des_title_db">Family Law Services</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_lg">
                      <p className="tax_text">
                        Family law, also known as matrimonial law or the law of
                        native relations, is an area of the law that deals with
                        family affairs and domestic relations, such as adoption,
                        divorce, child custody and support etcetera.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lb">
                      <a href="">
                        <p className="des_title_db">Mirror Judgment / Order</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_lg">
                      <p className="tax_text">
                        Mirror judgment / order are known as the judgments /
                        orders which mirrored and reflect the primary judgments
                        / orders passed by the court of foreign jurisdiction to
                        implement the said primary judgments / orders in
                        interjurisdictional matters, such as child custody,
                        visitation and temporary custody matters.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lb">
                      <a href="">
                        <p className="des_title_db">Process Service</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_lg">
                      <p className="tax_text">
                        Process service or service of process is a practice by
                        which a party gives a notice of primary legal action to
                        another party, court, or authority in an effort to
                        exercise jurisdiction over that person so as to enable
                        that person to respond to the proceeding before the
                        court or tribunal.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="table-end">
                <strong>
                  <a>Table: </a>Child Protection &amp; Family Category of
                  Services
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

export default Table5;
