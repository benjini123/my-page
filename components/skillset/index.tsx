export function Skillset(props: any) {
  return (
    <div className={props.className}>
      <h2>What i Know...</h2>
      <p className="about__description">
        Im good with Javascript and Typescript, very fond of SQL and non-SQL
        databases (firebase cloud firestore, firebase realtime database,
        postgreSQL) and a fan of React-based Next projects. I know my way around
        Heroku and Vercel. I can get an app up and running from simple layout,
        architecture all the way to fully functioning web-app. Also if you
        cannot already tell i'm bilingual, i speak both english and spanish
        natively
      </p>
      <p className="about__description">
        I have plenty of experience with Postman, so i understand how to build
        functioning backends with CRUD operations, you can check out the
        projects tab where i have all my apps with their respective
        documentation
      </p>
      <p className="about__description">
        On top of this, I know how to use powerful tools like Airtable and
        Algolia. Alongside Github pages, vercel, and heroku which has now chosen
        to remove its free dynos, leaving plenty of my applications hostless
        *sad emoji*.
      </p>
    </div>
  );
}
