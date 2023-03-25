import { Form } from "components/form";
import { Tweet } from "components/tweet";
import { SecondaryButton } from "ui/button";

export function Feed(props: any) {
  return (
    <div>
      <div className={props.className} style={props.style}>
        <Tweet pinned date="20 feb 2023">
          hello there! My name is Benjamin Henley Saubidet and welcome to my
          developer page. I'm a fullstack Javascript dev who's very passionate
          about his craft and i'm looking for my first programming job.
        </Tweet>

        <Tweet date="13 feb 2023">
          Birthdate: 27 of june 2000 <br></br>
          Age: 22 <br></br>
          Starsign: Cancer 🦀 <br></br>
          School: St. matthews college (2006-2018)<br></br>
          Terciary: APX school (2021-now)
          <a href="https://apx.school/" target="_blank">
            <SecondaryButton>apx</SecondaryButton>
          </a>
          <br></br>
        </Tweet>

        <Tweet date="13 feb 2023">
          I'm currently working at an accounting studio (boring!) and i'm
          looking for a career change. Been here for a while now, since 2018 (5
          years, someone please save me).
        </Tweet>

        <Tweet date="26 jan 2023">
          If you would like to get in contact with me, you can fill out the form
          below!
          <Form></Form>
        </Tweet>
      </div>
    </div>
  );
}
