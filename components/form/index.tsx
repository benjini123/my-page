import { DisplayArrowIcon } from "benja/media";
import { PrimaryButton } from "benja/ui/button";

export function Form({ className }: any) {
  return (
    <details className="form__details">
      <summary className="form__detail-summary">
        <h5>CONTACT FORM</h5>
        <DisplayArrowIcon className="display-arrow-icon"></DisplayArrowIcon>
      </summary>
      <form className="form">
        <div className="form__input-group">
          <label htmlFor="name">
            <h5>Name</h5>
          </label>
          <input name="name" type="text"></input>
        </div>
        <div className="form__input-group">
          <label htmlFor="email">
            <h5>Email</h5>
          </label>
          <input name="email" type="email"></input>
        </div>
        <div className="form__input-group">
          <label htmlFor="message">
            <h5>message</h5>
          </label>
          <textarea name="message" id="message"></textarea>
        </div>
        <div>
          <PrimaryButton>send</PrimaryButton>
        </div>
      </form>
    </details>
  );
}
