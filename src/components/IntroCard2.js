import React from "react";
import Page from "../assets/face.jpg";
import { Button, Divider, Icon } from "semantic-ui-react";
function IntroCard2() {
  return (
    <div className="intro-card2">
      <div className="card">
        <div className="header">
        <div className="three-dots">
                    <div className="dot-1"></div>
                    <div className="dot-2"></div>
                    <div className="dot-3"></div>
                </div>
                <div className="email-wrapper">
                    kerimylcn@gmail.com
                </div>
        </div>
        <div className="body">
          <div className="left-container">
            <div className="profile">
              <img src={Page} className="user-image"></img>
              <Divider />
              <div className="linkedin">
                <Button
                  circular
                  color="linkedin"
                  icon="linkedin"
                  href="https://www.linkedin.com/in/kerimylcn/"
                />
                <Button
                  circular
                  color="github"
                  icon="github"
                  href="https://github.com/kerimylcn"
                />
              </div>
            </div>
          </div>

          <div className="right-container">
            <div className="whoamI">
              <div className="bio">
                <div className="bio-content">
                  <h3>Who am I</h3>
                  <p>
                    An enthusiastic developer with a knack for building products
                    with good UI and UX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroCard2;
