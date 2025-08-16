import Section from '../components/Section';
import aboutIllustration from '/assets/about-illustration.png'; // add your PNG here

export default function About() {
  return (
    <Section id="about">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-display font-bold mb-6"
          >
            About Me
          </h2>
          <p className="max-w-5xl leading-relaxed opacity-90">
            Front-End Developer skilled in React, JavaScript, and Tailwind, with a focus on responsive design and smooth user experiences. 
            Strong problem-solving background in DSA and OOP, with hands-on experience in Git/GitHub and collaborative development.
          </p>

        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={aboutIllustration}
            alt="About illustration"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </Section>
  );
}
