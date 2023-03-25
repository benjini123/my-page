import { PinIcon } from "benja/media";
import { Benja } from "../image";

export function Tweet(props: any) {
  return (
    <div className={props.className}>
      <article className="tweet__container">
        {props.pinned ? (
          <div className="pin-icon-container">
            <PinIcon className="pin-icon"></PinIcon>
          </div>
        ) : (
          ""
        )}
        {props.pinned ? <p className="small">Pinned Tweet</p> : ""}
        <Benja small></Benja>
        <div>
          <div className="tweet__header-container">
            <h5>Benja 😎</h5>
            <span>•</span>
            <time className="tweet__date">{props.date}</time>
          </div>
          <p>{props.children}</p>
        </div>
      </article>
    </div>
  );
}
