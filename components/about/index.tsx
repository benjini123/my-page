export function About(props: any) {
  return (
    <div>
      <div className={props.className} style={props.style}>
        <h2>Hey guys!</h2>
        <p className="about__description">
          My name is Benja, im a programmer based in Buenos Aires, Argentina. My
          journey began in may 2021 once I started a programming course in APX
          school, a very fun interactive platform that allows students to make
          progress in their own time.
        </p>
        <p className="about__description">
          Before that i was already interested in the subject, looking up on
          youtube how to code with python with Mosh Hamedi, for instance.
        </p>
      </div>
    </div>
  );
}
