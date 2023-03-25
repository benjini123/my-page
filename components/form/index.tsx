import { sendMail } from "benja/lib/sendgrid";
import { DisplayArrowIcon } from "media";
import { PrimaryButton } from "ui/button";

export function Form({ className }: any) {
  function submitForm(e: any) {
    e.preventDefault();
    const target = e.target;

    var name = target.name.value;
    var email = target.email.value;
    var message = target.message.value;

    sendMail({ name, email, message });
  }
  return (
    <details className="form__details">
      <summary className="form__detail-summary">
        <h5>CONTACT FORM</h5>
        <DisplayArrowIcon className="display-arrow-icon"></DisplayArrowIcon>
      </summary>
      <form
        className="form"
        onSubmit={(e) => {
          submitForm(e);
        }}>
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
