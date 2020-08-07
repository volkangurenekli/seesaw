import React from "react";
import AnimationGif from "../../components/Svg/AnimationGif";
import Broom from "../../components/Svg/Broom";
import Pot from "../../components/Svg/Pot";
import Iron from "../../components/Svg/Iron";
import Pacifier from "../../components/Svg/Pacifier";
import Bottle from "../../components/Svg/Bottle";
import Pink from "../../components/Svg/Pink";
import Blue from "../../components/Svg/Blue";
import Container from "../../components/Container";
import TiltPhone from "../../components/TiltPhone";
export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 0.0,
      second: 5.9,
      isShow: "flex",
      failClassName: "rodal rodal-fade-leave fail",
      secondFailClassName: "rodal-dialog rodal-fade-leave",
      isFail: "none",
    };
  }

  start = () => {
    let tick = setInterval(() => {
      if (this.state.degree > -29.0) {
        this.setState({ degree: this.state.degree - 1 });
      }
      if (this.state.second < 0.3) {
        this.setState({ second: 0 });
        clearInterval(tick);
        this.setState({
          failClassName: "rodal rodal-fade-enter fail",
          secondFailClassName: "rodal-dialog rodal-fade-enter",
          isFail: "flex",
        });

        setTimeout(() => {
          this.props.history.push("/imzala");
        }, 1000);
      }
      this.setState({ second: this.state.second - 0.2 });
    }, 200);
  };

  click = () => {
    if (this.state.degree < -4.0) {
      this.setState({ degree: this.state.degree + 1 });
    }
  };

  go = () => {
    this.setState({ isShow: "none" });
    setTimeout(() => {
      this.setState({ degree: -10.0 });
    }, 1000);

    this.start();
  };

  render() {
    const styles = {
      rotate: {
        transform: `rotate(${this.state.degree}deg)`,
      },
    };

    return (
      <Container>
        <div className="game-container">
          <div className="game">
            <div className="game__copy">
              <h1 className="fs--lg color--yellow">EŞİTLE!</h1>
              <h3 className="fs--xs color--yellow">KADINLARLA ERKEKLER ARASINDAKİ EŞİTLİĞİ SAĞLAYABİLİR MİSİN?</h3>
            </div>
            <div className="game__seesaw seesaw">
              <div className="seesaw__container">
                <div className="countdown color--purple-dark">{parseInt(this.state.second)}</div>
                <div className="saw" style={styles.rotate}>
                  <div className="gender gender--pink">
                    <Iron />
                    <Pot />
                    <Broom />
                    <Pink />
                    <Pacifier style={{ display: this.state.second < 4 ? "" : "none" }} />
                    <Bottle style={{ display: this.state.second < 3 ? "" : "none" }} />
                  </div>
                  <div className="gender gender--blue">
                    <Blue />
                  </div>

                  <span className="saw__color saw__color--white"></span>
                </div>
                <div className="triangle"></div>
              </div>
            </div>
            <button className="hitPoint hitPoint--right hitPoint--female" onClick={() => this.click()}></button>
            <button className="hitPoint hitPoint--left hitPoint--male"></button>
          </div>
          <TiltPhone />
          <div
            style={{
              display: this.state.isShow,
              animationDuration: "300ms",
              WebkitAnimationDuration: "300ms",
            }}
            className="rodal rodal-fade- onboarding-modal"
            tabIndex="-1"
          >
            <div className="rodal-mask"></div>
            <div
              style={{
                width: "100%",
                height: "auto",
                animationDuration: "300ms",
                WebkitAnimationDuration: "300ms",
              }}
              className="rodal-dialog rodal-zoom-"
            >
              <div className="onboarding">
                <h2 className="color--purple">EŞİTLE!</h2>
                <div className="onboarding__content">
                  <p>
                    Kadınların ekonomik ve sosyal olarak eşit konumda olmalarını sağlamaya yardım etmek için teraziyi dengede tut.
                    <br />
                    <strong>5</strong> saniyen var!
                    <br />
                    <br />
                    Terazinin yüksekteki kısmına tıklayarak, teraziyi dengelemeye çalış.
                    <br />
                    <br />
                    <strong>Hazır mısın?</strong>
                    <em> O zaman…</em>
                  </p>
                  <AnimationGif
                    style={{
                      marginLeft: "50px",
                    }}
                  />
                </div>
                <button type="button">
                  <span onClick={() => this.go()}>BAŞLA!</span>
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: this.state.isFail,
              animationDuration: "0ms",
              WebkitAnimationDuration: "0ms",
            }}
            className={this.state.failClassName}
            tabIndex="-1"
          >
            <div className="rodal-mask" style={{ background: "rgba(0, 0, 0, 0.6)" }}></div>
            <div
              style={{
                width: "100%",
                height: "auto",
                animationDuration: "0ms",
                WebkitAnimationDuration: "0ms",
              }}
              className={this.state.secondFailClassName}
            >
              <div className="fail-container">
                <h2 className="fs--xxl color--yellow">OLMADI!</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
