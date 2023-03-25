import { PrimaryButton, SecondaryButton } from "ui/button";
import { Tweet } from "../tweet";

export function Projects(props: any) {
  return (
    <div>
      <div className={props.className} style={props.style}>
        <Tweet date="8 jan 2023">
          Check out my E-commerce backend complete with postman docs<br></br>
          <br></br>
          <SecondaryButton>
            <a
              href="https://github.com/benjini123/dwf-m9-desafio-final"
              target="_blank">
              <strong>E-Commerce: Backend</strong>
            </a>
          </SecondaryButton>
        </Tweet>
        <Tweet date="12 dec 2022">
          Check out my Pet Finder app!!<br></br>
          <br></br>
          <SecondaryButton>
            <a href="https://dwf-m8-ded78.firebaseapp.com/" target="_blank">
              <strong>PET FINDER</strong>
            </a>
          </SecondaryButton>
        </Tweet>
      </div>
    </div>
  );
}
