import portfolioLink1 from "../images/windows-0.png";

export const Footer = () => {
  return (
    <div class="window footerBar">
      <div
        class="title-bar"
        style={{ background: "none" }}
      >
        <div class="title-bar-controls">
          <button aria-label="Start Menu button, leads to Quinnton Carter portfolio site">
            <a
              className="btnImgText"
              href="https://QCarter.dev"
            >
              <img
                src={portfolioLink1}
                alt="Icon link to Quinnton Carter's homepage"
              />
              Quinnton Carter
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
