import { GithubIcon, InstagramIcon, LinkedinIcon } from "benja/media";

export function Footer({ className }: any) {
  return (
    <div className={className}>
      <div className="footer__container">
        <div className="footer__icons">
          <a
            href="https://www.instagram.com/benjahenleymusic/"
            className="footer__icon-container"
            target="_blank">
            <InstagramIcon className="footer-icon" />
          </a>

          <a
            href="https://github.com/benjini123"
            className="footer__icon-container"
            target="_blank">
            <GithubIcon className="footer-icon"></GithubIcon>
          </a>

          <a
            href="https://www.linkedin.com/in/benjamin-h-579b88146/"
            className="footer__icon-container"
            target="_blank">
            <LinkedinIcon className="footer-icon"></LinkedinIcon>
          </a>
        </div>
        <div>
          benja © <span>2023</span>
        </div>
      </div>
    </div>
  );
}
