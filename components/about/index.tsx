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
        <p className="about__description">
          I'm a fast learner, when i'm interested in a subject i usually get
          hooked pretty quick, im also very attentive to detail, so you can
          expect the best from me <i>always</i>. I'm easy to deal with, always
          eager to make new friends and connect with people, and im constantly
          trying to get out of my comfort zone and find new challenges.
        </p>
        <p className="about__description">
          Sidequest: i'm a huge fan of electronic music, specifically techno.
          and i've been a dj & producer since i graduated highschool. it has
          always been my passion so if you'd like to hear me out, just click{" "}
          <a
            href="https://open.spotify.com/artist/6BzP9m9BqegCaCajUA4IEg"
            target="_blank">
            <strong>here</strong>
          </a>{" "}
          to listen to my tunes on Spotify. 🤟🏻
        </p>
        <p className="about__description">
          Sidequest: I love training and I do muay thai, although I still suck.
        </p>
      </div>
    </div>
  );
}
