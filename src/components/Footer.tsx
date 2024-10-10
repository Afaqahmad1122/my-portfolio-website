import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href='https://github.com/Afaqahmad1122'
          target='_blank'
          rel='noreferrer'
        >
          <GitHubIcon />
        </a>
        <a
          href='https://www.linkedin.com/in/afaq-ahmad-a92532237/'
          target='_blank'
          rel='noreferrer'
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a
          href='https://github.com/Afaqahmad1122'
          target='_blank'
          rel='noreferrer'
        >
          Afaq Ahmad
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
