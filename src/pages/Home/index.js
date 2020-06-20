import React from "react";
import AnimationGif from "../../components/Svg/AnimationGif";
import MoneyBag1 from "../../components/Svg/MoneyBag1";
import MoneyBag2 from "../../components/Svg/MoneyBag2";
import MoneyBag3 from "../../components/Svg/MoneyBag3";
import Male from "../../components/Svg/Male";
import Female from "../../components/Svg/Female";
import Container from "../../components/Container";

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 0.0,
      second: 10.9,
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
          this.props.history.push("/takeaction");
        }, 1000);
      }
      this.setState({ second: this.state.second - 0.2 });
    }, 200);
  };

  click = () => {
    if (this.state.degree < -5.0) {
      this.setState({ degree: this.state.degree + 1 });
    }
  };

  go = () => {
    this.setState({ isShow: "none" });
    setTimeout(() => {
      this.setState({ degree: -20.0 });
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
              <h1 className="fs--lg color--yellow">EQUALIZE</h1>
              <h3 className="fs--xs color--yellow">
                Can you keep the kids balanced?
              </h3>
            </div>
            <div className="game__seesaw seesaw">
              <div className="seesaw__container">
                <div className="countdown color--purple-dark">
                  {parseInt(this.state.second)}
                </div>
                <div className="saw" style={styles.rotate}>
                  <div className="gender gender--male">
                    <MoneyBag1 />
                    <MoneyBag2 />
                    <Male />
                    <MoneyBag1 />
                    <MoneyBag3 />
                  </div>
                  <Female />
                  <span className="saw__color saw__color--white"></span>
                </div>
                <div className="triangle"></div>
              </div>
            </div>
            <button
              className="hitPoint hitPoint--right hitPoint--female"
              onClick={() => this.click()}
            ></button>
            <button className="hitPoint hitPoint--left hitPoint--male"></button>
          </div>
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
                <h2 className="color--purple">EQUALIZE!</h2>
                <div className="onboarding__content">
                  <p>
                    You have <strong>10</strong> seconds to balance the see-saw
                    and help young girls get access to education.
                    <br />
                    <br />
                    Tapping on the highest side of the see-saw brings it down.
                    <br />
                    <br />
                    <strong>Can you do it? </strong>
                    <em>Ready? Set?</em>
                  </p>
                  <AnimationGif
                    style={{
                      marginLeft: "50px",
                    }}
                  />
                </div>
                <button type="button">
                  <span onClick={() => this.go()}>GO!</span>
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
            <div
              className="rodal-mask"
              style={{ background: "rgba(0, 0, 0, 0.6)" }}
            ></div>
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
                <h2 className="fs--xxl color--yellow">FAIL!</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;
