import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA Student</h4>
                <h5>Parul University</h5>
              </div>
              <h3>2025-27</h3>
            </div>
            <p>
              Currently pursuing MCA and building skills in AI development,
              prompt engineering, UI/UX design, and modern web experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA</h4>
                <h5>VNSG University</h5>
              </div>
              <h3>2022-25</h3>
            </div>
            <p>
              Completed Bachelor of Computer Applications with an 8.68 CGPA,
              developing a foundation in programming, databases, web
              development, and IT fundamentals.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student</h4>
                <h5>AI, Design &amp; Web Development</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Learning and creating projects across AI tools, prompts, ChatGPT,
              UI/UX workflows, responsive websites, PHP, MySQL, and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
