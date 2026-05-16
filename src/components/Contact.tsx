import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/pratik-gujarathi-780a59311"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn - pratik-gujarathi
              </a>
            </p>
            <p>
              <a
                href="mailto:pratikgujarathi1818@gmail.com"
                data-cursor="disable"
              >
                pratikgujarathi1818@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>MCA, Parul University - 2025-2027</p>
            <p>BCA, VNSG University - 2022-2025, CGPA 8.68</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/PratikGujarathi"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/pratik-gujarathi-780a59311"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/mr._pratik._"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Pratik Gujarathi</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
