import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="text-center mt-16 w-full font-thin text-xs text-white bg-slate-700">
        <div className="container p-4 pb-0">
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="mt-3">
                <h6 className="text-uppercase mb-4 font-thin text-xs">
                  Company name
                </h6>
                <p className="font-thin text-xs">
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

              <hr className="w-full md:hidden" />

              <div className="mt-3">
                <h6 className="text-uppercase mb-4 font-thin text-xs">
                  Products
                </h6>
                <p>
                  <a href="#" className="text-white font-thin text-xs">
                    Telefon
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white font-thin text-xs">
                    Dizüstü Bilgisayar
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white font-thin text-xs">
                    Akıllı Saat
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white font-thin text-xs">
                    Kulaklık
                  </a>
                </p>
              </div>

              <hr className="w-full md:hidden" />

              <div className="mt-3">
                <h6 className="text-uppercase mb-4 font-thin text-xs">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3 font-thin text-xs"></i> New
                  York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope mr-3 font-thin text-xs"></i>{" "}
                  info@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3 font-thin text-xs"></i> + 01
                  234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3 font-thin text-xs"></i> + 01
                  234 567 89
                </p>
              </div>

              <div className="mt-3">
                <h6 className="text-uppercase mb-4 font-thin text-xs">
                  Follow us
                </h6>
                <div className="flex mt-6 gap-10 justify-center items-center  ">
                  <FaFacebook size={28} />
                  <FaInstagram size={28} />
                  <FaXTwitter size={28} />
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center font-thin text-xs p-3 bg-orange-400 h-[40px]">
          © 2020 Copyright:
          <a
            href="https://mdbootstrap.com/"
            className="text-white font-thin text-xs "
          >
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
