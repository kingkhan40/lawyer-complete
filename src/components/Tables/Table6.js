import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";

const Table6 = () => {
  return (
    <>
     <section className="content-table home-wrapper-2">
      <div className="container-xxl">
        <div className="row" data-aos="fade-down" data-aos-delay="300">
          <h2>REAL ESTATE & LAND USE CATEGORY OF SERVICES</h2>
          <div className="col-12">
            <span itemscope="">
              <meta itemprop="name" content="Intellectual Property" />
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
                          Estate Planning Law Services
                        </p>
                      </a>
                    </td>
                    <td className="cell_blank_des_ly">
                      <p className="tax_text">
                        Estate planning is the preparation of tasks that serve
                        to manage an individual's asset base in the event of
                        their incapacitation or death, the planning includes the
                        inheritance of assets to heirs and the settlement of
                        estate dues, most estate plans are set up with the help
                        of an attorney experienced in estate law.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lr">
                      <a href="">
                        <p className="des_title_dr">
                          Land Acquisition Law Services
                        </p>
                      </a>
                    </td>
                    <td className="cell_blank_des_ly">
                      <p className="tax_text">
                        Land acquisition is the act of becoming the owner of
                        certain property, the act by which one acquires or
                        procures the property, the law empowers the government
                        to force an owner of property to sell it to the
                        government or to an authority authorised by the
                        government through a proper price to be paid.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lr">
                      <a href="">
                        <p className="des_title_dr">Leasing Law Services</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_ly">
                      <p className="tax_text">
                        Leasing law corresponds with the lease, a transfer of an
                        interest in the property for a stipulated period of time
                        without transferring the ownership of that property, in
                        a lease, right of possession is transferred instead of
                        the right of ownership.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lr">
                      <a href="">
                        <p className="des_title_dr">Mortgage Law Services</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_ly">
                      <p className="tax_text">
                        Mortgage law signifies mortgage, a legal instrument
                        which is used to create a security interest in real
                        property held by a lender as a security for a debt,
                        usually a loan of money, a mortgage in itself is not a
                        debt, it is the lender's security for a debt.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="cell_ca_dx_lr">
                      <a href="">
                        <p className="des_title_dr">Real Estate Law Services</p>
                      </a>
                    </td>
                    <td className="cell_blank_des_ly">
                      <p className="tax_text">
                        Real estate law also known as the property law is the
                        area of law that governs using, buying and selling of
                        land, it’s the law that governs how people acquire
                        property and what they can do with the property that
                        they own.
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="table-end">
                <strong>
                  <a>Table: </a>Real Estate & Land Use Category of Services
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

export default Table6;
