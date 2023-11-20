// components/Organism/profile-section/index.js
import { useState, useEffect } from "react";
import AtomProfileSection from "../../Atom/profile-section";
import MoleculePBPortfolioList from "../../Molecule/pb-portfolio-list";

const OrganismProfileSection = () => {
  const [introductionData, setIntroductionData] = useState({
    type: "introduction",
    introduction: "안녕하세요. 고객을 위한 PB OOO입니다. ",
  });

  const [experienceData, setExperienceData] = useState({
    type: "experience",
    experience: [
      {
        position: "Frontend Developer",
        company: "ABC Inc.",
        period: "2020-2022",
      },
      {
        position: "Backend Developer",
        company: "XYZ Corp.",
        period: "2018-2020",
      },
    ],
  });

  const [educationData, setEducationData] = useState({
    type: "education",
    education: [
      { school: "University of ABC", period: "2014-2018" },
      { school: "High School XYZ", period: "2010-2014" },
    ],
  });

  const [certificateData, setCertificateData] = useState({
    type: "certificate",
    certificates: [
      "자산관리사(FP)",
      "한국재무관리사(AFPK)",
      "국제공인재무설계사(CFP)",
    ],
  });

  useEffect(() => {
    fetch("api/introduction")
      .then((response) => response.json())
      .then((data) => setIntroductionData(data))
      .catch((error) =>
        console.error("Error fetching introduction data:", error)
      );

    fetch("api/experience")
      .then((response) => response.json())
      .then((data) => setExperienceData(data))
      .catch((error) =>
        console.error("Error fetching experience data:", error)
      );

    fetch("api/education")
      .then((response) => response.json())
      .then((data) => setEducationData(data))
      .catch((error) => console.error("Error fetching education data:", error));

    fetch("api/certificate")
      .then((response) => response.json())
      .then((data) => setCertificateData(data))
      .catch((error) =>
        console.error("Error fetching certificate data:", error)
      );
  }, []);

  return (
    <div>
      <AtomProfileSection title="자기소개" content={introductionData} />
      <AtomProfileSection title="경력" content={experienceData} />
      <AtomProfileSection title="학력" content={educationData} />
      <AtomProfileSection title="자격증" content={certificateData} />
      <MoleculePBPortfolioList title="포트폴리오" />
    </div>
  );
};

export default OrganismProfileSection;
