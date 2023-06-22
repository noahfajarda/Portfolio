import { useState } from "react";
import "./App.css";
import About from "./components/About";
import BackgroundCircles from "./components/BackgroundCircles";
import CallToAction from "./components/CallToAction";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

// Resume URL link
const resumeLink =
  "https://drive.google.com/file/d/1aUiFaAlnXzcr3Nrz8uu4RTZr9klqImxv/view?usp=sharing";

const resumeCTA = {
  message: `Want to see more of what I can do? Check out my resume.`,
  buttonMessage: "Download resume",
  buttonIcon: <HiOutlineDocumentDownload />,
  linkURL: resumeLink,
};

function App() {
  return (
    <>
      <Header />
      <BackgroundCircles />
      <About />
      <CallToAction {...resumeCTA} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
