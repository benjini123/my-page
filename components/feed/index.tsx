import { Form } from "components/form";
import { Tweet } from "components/tweet";
import { SecondaryButton } from "ui/button";

export function Feed(props: any) {
  return (
    <div>
      <div className={props.className} style={props.style}>
        <Tweet pinned date="20 feb 2023">
          <p>
            hello there! My name is Benjamin Henley Saubidet and welcome to my
            developer page. I'm a fullstack Javascript dev who's very passionate
            about his craft and i'm looking for my first programming job.
          </p>
        </Tweet>

        <Tweet date="13 feb 2023">
          <p>
            Birthdate: 27 of june 2000 <br></br>
            Age: 22 <br></br>
            Starsign: Cancer 🦀 <br></br>
            School: St. matthews college (2006-2018)<br></br>
            Terciary: APX school (2021-now){" "}
            <SecondaryButton className="pointer">
              <a href="https://apx.school/" target="_blank">
                <p>apx</p>
              </a>
            </SecondaryButton>
          </p>
        </Tweet>

        <Tweet date="13 feb 2023">
          <p>
            I'm currently working at an accounting studio (boring!) and i'm
            looking for a career change. Been here for a while now, since 2018
            (5 years, someone please save me).
          </p>
        </Tweet>

        <Tweet date="26 jan 2023">
          <p>
            If you would like to get in contact with me, you can fill out the
            form below!
          </p>
          <Form></Form>
        </Tweet>
      </div>
    </div>
  );
}
