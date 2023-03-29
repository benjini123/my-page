import { Desk } from "benja/components/desk";
import { About } from "components/about";
import { FollowButton } from "components/button";
import { Benja } from "components/image";
import { Projects } from "components/projects";
import { Skillset } from "components/skillset";
import { CakeIcon, CalendarIcon, DeskIcon, LinksIcon } from "media";
import { useState } from "react";
import { Feed } from "../components/feed";

export default function Home() {
  const [section, setSection] = useState("Feed");
  function changeSection(e: any) {
    setSection(e.target.innerHTML);
  }
  return (
    <div>
      <div className="document">
        <header className="header">
          <div className="header__container relative">
            <div className="header__interactive-banner">
              <Desk className="header__desk" width="140" height="140"></Desk>
            </div>
            <div className="header__profile">
              <div className="header__profile-description">
                <div className="header__follow-button-container">
                  <Benja className="benja_image"></Benja>
                  <FollowButton className="header__follow-button" />
                </div>
                <div className="header__name-and-username mb-2">
                  <h1 className="">Benja Henley</h1>
                  <a style={{ fontWeight: 300, color: "#71767B" }}>
                    @benja_dev
                  </a>
                </div>

                <h4>Junior web developer 🤟🏻🔥</h4>
                <p className="mb-2">
                  I aspire to create beautiful things, and my journey has just
                  begun
                </p>
              </div>
              <div className="header__links-group ">
                <div className="container-row gap-5">
                  <LinksIcon className="header__links-icon"></LinksIcon>
                  <a>
                    <p>links</p>
                  </a>
                </div>
                <div className="container-row gap-5">
                  <CakeIcon className="header__cake-icon"></CakeIcon>
                  <p>27/06/2000</p>
                </div>
                <div className="container-row gap-5">
                  <CalendarIcon className="header__cake-icon" />
                  <p>Joined february 2023</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <section className="body">
        <ul
          className="body__options"
          onClick={(e) => {
            changeSection(e);
          }}>
          <li className={section == "Feed" ? "clicked" : ""}>Feed</li>
          <li className={section == "About" ? "clicked" : ""}>About</li>
          <li className={section == "Projects" ? "clicked" : ""}>Projects</li>
          <li className={section == "Skillset" ? "clicked" : ""}>Skillset</li>
        </ul>
        <div className="body__options-container">
          {section == "Feed" ? (
            <Feed></Feed>
          ) : section == "About" ? (
            <About className="body__container"></About>
          ) : section == "Projects" ? (
            <Projects className="body__projects-container"></Projects>
          ) : section == "Skillset" ? (
            <Skillset className="body__container"></Skillset>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
