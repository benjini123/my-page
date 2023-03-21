import { About } from "benja/components/about";
import { FollowButton } from "benja/components/button";
import { Form } from "benja/components/form";
import { Benja } from "benja/components/image";
import { Projects } from "benja/components/projects";
import { Skillset } from "benja/components/skillset";
import { CakeIcon, CalendarIcon, CircleIcon, LinksIcon } from "benja/media";
import { Navbar } from "components/navbar";
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
            <div className="header__interactive-banner"></div>
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
                  <a>links</a>
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
            <Feed className="body__feed-container"></Feed>
          ) : section == "About" ? (
            <About className="body__about-container"></About>
          ) : section == "Projects" ? (
            <Projects className="body__projects-container"></Projects>
          ) : section == "Skillset" ? (
            <Skillset className="body__skillset-container"></Skillset>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
