import { Form } from "benja/components/form";
import { Tweet } from "benja/components/tweet";

export function Feed(props: any) {
  return (
    <div>
      <div className={props.className} style={props.style}>
        <Tweet pinned className="tweet__container" date="20 feb 2023">
          hello there! My name is Benjamin Henley Saubidet and welcome to my
          developer page. I'm a fullstack Javascript dev who's very passionate
          about his craft and i'm looking for my first programming job.
        </Tweet>

        <Tweet className="tweet__container" date="13 feb 2023">
          If you would like to get in contact with me, you can fill out the form
          below!
          <Form></Form>
        </Tweet>
      </div>
    </div>
  );
}
