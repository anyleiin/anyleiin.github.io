import React from "react";
import { Button } from "../../components/Button";
import { IconsFb } from "../../icons/IconsFb";
import { IconsLinkedin1 } from "../../icons/IconsLinkedin1";
import { IconsMail1 } from "../../icons/IconsMail1";
import { IconsTwitter } from "../../icons/IconsTwitter";
import "./style.css";

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="div">
        <div className="overlap">
          <div className="HP">
            <div className="overlap-group">
              <div className="group">
                <p className="text-wrapper">
                  UX Designer, Game Designer, Multimedia Designer, Illustrator, Artist...simply Any!
                </p>
                <div className="frame">
                  <p className="p">
                    I am an UX and Game Designer based in Zurich, Switzerland. I love problem solving and making
                    peoples’ lifes easier through good, playful design and learning and am always looking to learn new
                    exciting things every day!
                  </p>
                </div>
                <div className="flexcontainer">
                  <p className="text">
                    <span className="span">
                      Hi there! <br />
                    </span>
                  </p>
                  <p className="text">
                    <span className="span">
                      I’m Anika “Any” Hapke.
                      <br />
                    </span>
                  </p>
                  <p className="text">
                    <span className="span">Nice to meet you - Let’s stay in touch!</span>
                  </p>
                </div>
                <div className="frame-2">
                  <IconsFb className="icon-instance-node" />
                  <IconsLinkedin1 className="icon-instance-node" color="#EAE0E0" />
                  <IconsTwitter className="icon-instance-node" />
                  <IconsMail1 className="icon-instance-node" color="#EAE0E0" />
                </div>
              </div>
              <Button
                className="button-instance"
                divClassName="design-component-instance-node"
                icon={false}
                label="Want to know more?"
                size="large"
                state="default"
                type="secondary"
              />
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle" />
                  <div className="rectangle-2" />
                  <img className="anybanany" alt="Anybanany" src="/img/anybanany-1.png" />
                </div>
              </div>
              <img className="img" alt="Group" src="/img/group-24-1.png" />
            </div>
          </div>
          <div className="text-wrapper-2">THE PROJECTS</div>
          <div className="nav">
            <div className="left">
              <div className="text-wrapper-3">ANIKA HAPKE</div>
              <div className="navbar">
                <div className="text-wrapper-4">The Projects</div>
                <div className="text-wrapper-4">The Menu</div>
                <div className="text-wrapper-4">The Skillset</div>
                <div className="text-wrapper-4">About</div>
              </div>
            </div>
            <div className="right">
              <button className="contact-wrapper">
                <div className="contact">CONTACT</div>
              </button>
            </div>
          </div>
          <div className="text-wrapper-5">The Artist</div>
        </div>
        <div className="know-more">
          <div className="div-wrapper">
            <div className="overlap-group-3">
              <div className="rectangle-3" />
              <div className="rectangle-4" />
              <div className="rectangle-5" />
              <div className="frame-3">
                <div className="frame-wrapper">
                  <div className="frame-4">
                    <div className="ellipse" />
                    <div className="frame-5">
                      <div className="text-wrapper-6">Gaming</div>
                      <div className="group-2">
                        <p className="text-wrapper-7">
                          I love games, be it outside or inside, board games, computer and consoles and DND or other
                          rollplays. I love how it brings together people, creates emotions and the technology behind
                          it.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="frame-4">
                    <div className="ellipse" />
                    <div className="frame-5">
                      <div className="text-wrapper-6">Reading</div>
                      <div className="group-2">
                        <p className="text-wrapper-7">
                          Every now and then I forget about how much I love to read but then I see my books and remember
                          the stories. I do keep my favorites so I can revisit certain moments whenever I want.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="frame-4">
                    <div className="ellipse" />
                    <div className="frame-5">
                      <div className="text-wrapper-6">Sports</div>
                      <div className="group-3">
                        <p className="text-wrapper-7">
                          While I don’t like jogging, I do like playing team sports and tried a bunch of different
                          things like sailing, kick boxing, and arrow shooting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-8">Ask me about..</div>
        </div>
        <Button
          className="button-2"
          divClassName="design-component-instance-node"
          icon={false}
          label="Intriguing, give me the full story (*CV)!"
          size="large"
          state="default"
          type="secondary"
        />
        <div className="the-menu">
          <div className="overlap-2">
            <div className="container">
              <div className="text-wrapper-9">THE MENU</div>
              <div className="container-2">
                <p className="text-wrapper-10">
                  A collection of projects to demonstrate the variety of technical and practical skills I have acquired
                  throughout the years.
                </p>
              </div>
            </div>
            <img className="group-4" alt="Group" src="/img/group-24.png" />
          </div>
          <div className="frame-6">
            <div className="frame-7">
              <img className="process" alt="Process" src="/img/process-01.png" />
              <div className="container-3">
                <div className="text-wrapper-11">Game Design</div>
                <p className="text-wrapper-12">
                  I love gaming, storytelling, art and technology. Therefore, it was only natural to study Game Design.
                  Here we learned all about being an intermediary between artists and developers through learning all of
                  the aspects.
                </p>
              </div>
              <div className="text-wrapper-13">01</div>
            </div>
            <div className="frame-7">
              <img className="process-2" alt="Process" src="/img/process-02.png" />
              <div className="container-3">
                <div className="text-wrapper-11">UX Design</div>
                <p className="text-wrapper-12">
                  It didn’t take long to find out how UX Design with its technological aspects, the possible playful
                  approaches of problem solving, the creativity of prototying as well as the giving feeling of seeing
                  your designs putting smiles on your clients faces is just as awesome as Game Design.
                </p>
              </div>
              <div className="text-wrapper-14">02</div>
            </div>
            <div className="frame-7">
              <img className="process" alt="Process" src="/img/process-03.png" />
              <div className="container-3">
                <div className="text-wrapper-11">Illustrations</div>
                <p className="text-wrapper-12">
                  Starting in school where I would draw to focus, I never stopped ever since. It’s a great way to bring
                  ideas and feelings onto any media of your choice.
                </p>
              </div>
              <div className="text-wrapper-15">03</div>
            </div>
            <div className="frame-8">
              <img className="process" alt="Process" src="/img/process-03.png" />
              <div className="text-wrapper-16">Animation and Videos</div>
              <p className="text-wrapper-17">
                While not my favorite medium, I do like creating videos for work and I liked playing around with gifs or
                process-clips during art creation.
              </p>
              <div className="text-wrapper-15">03</div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-18">THE SKILLSET</div>
        <div className="contact-2">
          <div className="container-4">
            <p className="text-wrapper-19">Let’s work on your project together!</p>
          </div>
          <Button
            className="button-3"
            divClassName="button-4"
            icon={false}
            label="Send mail"
            size="large"
            state="default"
            type="secondary"
          />
        </div>
        <div className="frame-9">
          <div className="frame-10">
            <div className="text-wrapper-20">UX Design</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">Coding</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-6-4.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">User Research</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">Prototyping</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-6-3.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">Illustration</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-6-2.svg" />
            </div>
          </div>
        </div>
        <div className="frame-12">
          <div className="frame-10">
            <div className="text-wrapper-20">Figma</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">Unity</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">Affinity</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">Adobe</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
          <div className="frame-10">
            <div className="text-wrapper-20">Blender</div>
            <div className="frame-11">
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-3.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
              <img className="star" alt="Star" src="/img/star-5.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
