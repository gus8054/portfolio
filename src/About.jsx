import { useRef, useEffect } from "react";
import myImage from "./myImage.png";
import Typed from "typed.js";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__title">
        <p>I am</p>
        <MyComponent />
      </div>
      <div className="about__image">
        <img src={myImage} alt="myFace" />
      </div>
      <div className="about__links">
        <a className="about__link about__link-blog" href="https://velog.io/@ehdgus8054">
          <i class="bx bxl-blogger"></i>
        </a>
        <a className="about__link about__link-github" href="https://github.com/gus8054">
          <i class="bx bxl-github"></i>
        </a>
      </div>
    </section>
  );
}

function MyComponent() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Dong Hyun", "Coder", "Front End Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
}

export default About;
