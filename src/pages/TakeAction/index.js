import React, { Component } from "react";
import Container from "../../components/Container";
export class TakeAction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formClassName: "rodal rodal-fade-leave oxfam-form",
      secondaryClassName: "rodal-dialog rodal-slideDown-leave",
      formDisplay: "none",

      thanksDisplay: "none",
      thanksClassName: "rodal rodal-fade-leave",
      thanksSecondaryClassName: "rodal-dialog rodal-slideDown-leave",

      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      emailPermission: false,
      telephonePermission: false,
      smsPermission: false,
    };
  }

  clickTakeAction = () => {
    this.setState({
      formClassName: "rodal rodal-fade-enter oxfam-form",
      secondaryClassName: "rodal-dialog rodal-slideUp-enter",
      formDisplay: "flex",
    });
  };

  closeForm = () => {
    this.setState({
      formClassName: "rodal rodal-fade-leave oxfam-form",
      secondaryClassName: "rodal-dialog rodal-slideDown-leave",
      formDisplay: "none",
    });
  };

  submit = (e) => {
    e.preventDefault();
    let $ = this.state;
    let query =
      "firstName=" +
      $.firstName +
      "&lastName=" +
      $.lastName +
      "&email=" +
      $.email +
      "&phone=" +
      $.phone +
      "&emailpermission=" +
      $.emailPermission +
      "&telephonepermission=" +
      $.telephonePermission +
      "&smspermission=" +
      $.smsPermission;

    this.closeForm();
    this.setState({
      thanksDisplay: "flex",
      thanksClassName: "rodal rodal-fade-enter",
      thanksSecondaryClassName: "rodal-dialog rodal-slideUp-enter",
    });

    window.open("database/" + query);
  };

  closeThanks = () => {
    this.setState({
      thanksDisplay: "none",
      thanksClassName: "rodal rodal-fade-leave",
      thanksSecondaryClassName: "rodal-dialog rodal-slideDown-leave",
    });
  };

  render() {
    return (
      <Container>
        <div className="take-action">
          <h1 className="fs--xl color--yellow">WAS IT FAIR?</h1>
          <div className="take-action__copy take-action__copy--desktop color--white">
            <p>
              It’s pretty tough to win at a game that’s been rigged against you,
              <strong>isn’t it?</strong> Like this game, not all forms of
              education are fair.
              <br />
              <br />
              While education is proven to be one of the most powerful tools to
              fight inequality, millions of children –
              <strong>especially girls</strong> – are denied an education
              because they can’t afford it.
              <br />
              <br />
              It’s time to invest in free, public and good-quality education for
              all!
              <br />
              <br />
              Sign the letter to demand rich-country governments and the World
              Bank make this commitment, and stop supporting profit-driven
              private education.
            </p>
          </div>
          <div className="take-action__copy take-action__copy--mobile color--white">
            <p>
              It’s pretty tough to win at a game that’s been rigged against you,
              <strong>isn’t it?</strong> Just like this game, lots of girls’
              access to education is rigged against them.
              <br />
              <br />
              Education, one of the most powerful tools to fight inequality is
              denied to millions of children because they can’t afford it.
              <br />
              <br />
              Now it’s time to sign this letter to demand rich-country
              governments and the World Bank make this commitment, and stop
              supporting profit-driven private education.
            </p>
          </div>
          <button
            className="cta-button color--purple-dark"
            onClick={() => this.clickTakeAction()}
          >
            <span>TAKE ACTION</span>
          </button>
          <p className="take-action__end-text color--white">
            Read full letter to rich-country governments and the World Bank
            <a className="color--white" target="new" href="/oxfam/en/letter">
              here
            </a>
          </p>
          <div
            style={{
              display: this.state.formDisplay,
              animationDuration: "300ms",
              WebkitAnimationDuration: "300ms",
            }}
            className={this.state.formClassName}
            tabIndex={-1}
          >
            <div className="rodal-mask" />
            <div
              style={{
                width: "100%",
                height: "auto",
                animationDuration: "300ms",
                WebkitAnimationDuration: "300ms",
              }}
              className={this.state.secondaryClassName}
            >
              <div className="oxfam-form__container">
                <form>
                  <input
                    type="text"
                    placeholder="First name"
                    onChange={(e) => {
                      let firstName = e.target.value;
                      this.setState({
                        firstName,
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    onChange={(e) => {
                      let lastName = e.target.value;
                      this.setState({
                        lastName,
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => {
                      let email = e.target.value;
                      this.setState({
                        email,
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    onChange={(e) => {
                      let phone = e.target.value;
                      this.setState({
                        phone,
                      });
                    }}
                  />

                  <p className="privacy-text">
                    We would like to contact you from time to time to keep you
                    informed of Oxfam's projects, fundraising activities and
                    appeals. We will not share your data and you can unsubscribe
                    at any time. We may contact you for up to two years from the
                    day you give consent. You can change your preferences at any
                    time -
                    <a href="https://www.oxfam.org/en/privacy-notice">
                      Privacy policy
                    </a>
                  </p>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        let emailPermission = e.target.checked;
                        this.setState({
                          emailPermission,
                        });
                      }}
                    />
                    <span className="checkmark" />
                    May we contact you by email?
                  </label>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        let telephonePermission = e.target.checked;
                        this.setState({
                          telephonePermission,
                        });
                      }}
                    />
                    <span className="checkmark" />
                    May we contact you by telephone?
                  </label>
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        let smsPermission = e.target.checked;
                        this.setState({
                          smsPermission,
                        });
                      }}
                    />
                    <span className="checkmark" />
                    May we contact you by SMS?
                  </label>
                  <button onClick={(e) => this.submit(e)}>
                    <span>Submit</span>
                  </button>
                </form>
              </div>
              <span className="rodal-close" onClick={() => this.closeForm()} />
            </div>
          </div>
          <div
            style={{
              display: this.state.thanksDisplay,
              animationDuration: "300ms",
              WebkitAnimationDuration: "300ms",
            }}
            className={this.state.thanksClassName}
            tabIndex={-1}
          >
            <div className="rodal-mask" />
            <div
              style={{
                width: "100%",
                height: "auto",
                animationDuration: "300ms",
                WebkitAnimationDuration: "300ms",
              }}
              className={this.state.thanksSecondaryClassName}
            >
              <div className="success">
                <h2 className="fs--lg color--purple">Thank you</h2>
                <p className="text">
                  Now help us bring equality to education by sharing Equalizr.
                </p>
                <svg width={46} height={42} viewBox="0 0 46 42">
                  <g fill="#000" fillRule="evenodd">
                    <path d="M0 9.962L.35 39.99l41.201 1.047-.518-15.716-4.42-4.117-.413.233.463 15.76-32.123-.7-1.397-22.345 14.706-.313 1.749-2.579-2.546-1.591z" />
                    <path d="M45.727 0L21.066.762l5.593 7.117-14.446 21.934 2.086 3.875 22.786-16.402 7.368 6.865z" />
                  </g>
                </svg>
                <p className="share">Share on Facebook</p>
              </div>
              <span
                className="rodal-close"
                onClick={() => this.closeThanks()}
              />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default TakeAction;
