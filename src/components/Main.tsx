import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profile from "../assets/images/profile.png";

function Main() {
  return (
    <div className='container'>
      <div className='about-section'>
        <div className='image-wrapper'>
          <img src={profile} alt='Avatar' />
        </div>
        <div className='content'>
          <div className='social_icons'>
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
          <h1>Afaq Ahmad</h1>
          <p>Full Stack Engineer</p>

          <div className='mobile_social_icons'>
            <a
              href='https://github.com/Afaqahmad1122'
              target='_blank'
              rel='noreferrer'
            >
              <GitHubIcon />
            </a>
            <a
              href='https://github.com/Afaqahmad1122'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
