import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Utku Ceylan</HighlightSpan>.
      </p>
      <p>
        I'm a <HighlightAlt>Junior Cyber Security Analyst</HighlightAlt> based in Turkey.
      </p>
      <p>
        I am passionate about penetration testing and coding.
      </p>
    </AboutWrapper>
  );
};

export default About;
