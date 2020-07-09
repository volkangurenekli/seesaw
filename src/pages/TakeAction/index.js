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
      permission: false,
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
      "&permission=" +
      $.permission;

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
          <h1 className="fs--xl color--yellow">SİZCE BU ADİL MİYDİ?</h1>
          <div
            className="take-action__copy "
            style={{
              overflow: "scroll",
              height: "400px",
            }}
          >
            <div className="take-action__copy take-action__copy--desktop color--white">
              <p>
                <strong>Sana karşı birçok faktörün olduğu bir oyunda kazanmak oldukça zor değil mi?</strong>
              </p>
              <br />
              <p>
                Tıpkı bu oyunda olduğu gibi, kadınların istihdama katılmasının ve ekonomik olarak
                güçlenmesinin önünde birçok engel var.
              </p>
              <br />
              <p>
                Bu engellerin en başında ise{" "}
                <strong>adil olarak paylaşılmayan bakım emeği sorumluluğu</strong> geliyor.
              </p>
              <br />
              <p>Sen de kampanyayı imzalayarak, terazinin dengeye gelmesi için destek ol!</p>
            </div>
            <div className="take-action__copy take-action__copy--mobile color--white">
              <p>
                <strong>Sana karşı birçok faktörün olduğu bir oyunda kazanmak oldukça zor değil mi?</strong>
              </p>
              <br />
              <p>
                Tıpkı bu oyunda olduğu gibi, kadınların istihdama katılmasının ve ekonomik olarak
                güçlenmesinin önünde birçok engel var.
              </p>
              <br />
              <p>
                Bu engellerin en başında ise{" "}
                <strong>adil olarak paylaşılmayan bakım emeği sorumluluğu</strong> geliyor.
              </p>
              <br />
              <p>Sen de kampanyayı imzalayarak, terazinin dengeye gelmesi için destek ol!</p>
            </div>
            <button className="cta-button color--purple-dark" onClick={() => this.clickTakeAction()}>
              <span>İMZALA!</span>
            </button>
            <div className="take-action__end-text color--white">
              <p>
                Türkiye’de iş gücüne dahil olamayan 11 milyon kadın, ev içi bakım sorumlulukları sebebiyle
                iş gücünün dışında yer alıyor. Özellikle dar gelirli mahallelerde uygun ücretli kreşlerin ve
                diğer bakım hizmetlerinin olmaması, kadınları daha da fazla yoksulluğa mahkum ediyor; bu da
                kadınların maruz kaldığı cinsiyet eşitsizlikleri ile beraber gelir eşitsizliğinin de kalıcı
                hale gelmesine neden oluyor.
              </p>
              <p>Bu terazinin dengeye gelebilmesi için;</p>
              <ul>
                <li>
                  Refahın tüm kesimler tarafından adil biçimde paylaşılabilmesi için hayatın her alanında
                  kadınların maruz kaldıkları eşitsizlikler giderilmeli,
                </li>
                <li>
                  Kadınların ekonomiye dahil olabilmesi, üzerlerindeki ağır bakım yükünün azaltılması için
                  çocuk, yaşlı, engelli bakım hizmetleri toplumun her kesiminde yaygınlaştırılmalı,
                </li>
                <li>
                  Bunun için ise bakım hizmetleri bir sektör olarak önceliklendirilip bu alandaki kamu
                  hizmetleri ve altyapı yatırımlarına kaynak aktarılmalı,
                </li>
                <li>Bakım sektörüne dahil olabilmeleri için kadın kooperatifleri desteklenmelidir.</li>
              </ul>
                <p>Terazinin dengeye gelebilmesi için sen de imzala!</p>
            </div>
          </div>
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
                    placeholder="Ad"
                    onChange={(e) => {
                      let firstName = e.target.value;
                      this.setState({
                        firstName,
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Soyad"
                    onChange={(e) => {
                      let lastName = e.target.value;
                      this.setState({
                        lastName,
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => {
                      let email = e.target.value;
                      this.setState({
                        email,
                      });
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Telefon"
                    onChange={(e) => {
                      let phone = e.target.value;
                      this.setState({
                        phone,
                      });
                    }}
                  />

                  {/* <p className="privacy-text">
                    We would like to contact you from time to time to keep you informed of Oxfam's projects,
                    fundraising activities and appeals. We will not share your data and you can unsubscribe
                    at any time. We may contact you for up to two years from the day you give consent. You
                    can change your preferences at any time -
                    <a href="https://www.oxfam.org/en/privacy-notice">Privacy policy</a>
                  </p> */}
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        let permission = e.target.checked;
                        this.setState({
                          permission,
                        });
                      }}
                    />
                    <span className="checkmark" />
                    <p>
                      KEDV’in kampanya bilgilendirmelerinden haberdar olmak istiyorum.{" "}
                      <a target="new" href="https://www.kedv.org.tr/kvkk">
                        Kişisel Verilerin Korunmasına İlişkin Aydınlatma Metni
                      </a>
                      ’ni onaylıyorum.
                    </p>
                  </label>

                  <button onClick={(e) => this.submit(e)}>
                    <span>KAYDET</span>
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
                <h2 className="fs--lg color--purple">TEŞEKKÜRLER</h2>
                <p className="text">Şimdi sitemizi paylaşarak eğitime eşitlik getirmemize yardımcı olun.</p>
                <svg width={46} height={42} viewBox="0 0 46 42">
                  <g fill="#000" fillRule="evenodd">
                    <path d="M0 9.962L.35 39.99l41.201 1.047-.518-15.716-4.42-4.117-.413.233.463 15.76-32.123-.7-1.397-22.345 14.706-.313 1.749-2.579-2.546-1.591z" />
                    <path d="M45.727 0L21.066.762l5.593 7.117-14.446 21.934 2.086 3.875 22.786-16.402 7.368 6.865z" />
                  </g>
                </svg>
                <p className="share">Share on Facebook</p>
              </div>
              <span className="rodal-close" onClick={() => this.closeThanks()} />
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default TakeAction;
