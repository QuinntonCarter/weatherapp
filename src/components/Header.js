import headerIcon from "../images/world-1.png";

export default function Header() {
  return (
    <div
      class="window"
      style={{ width: "auto" }}
    >
      <div
        class="title-bar"
        style={{ background: "none" }}
      >
        <div
          class="title-bar-text"
          style={{
            color: "black",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <p style={{ margin: "0px", padding: "0px" }}>Weather 98</p>
          <img
            src={headerIcon}
            alt="Header, windows logo and earth pixelated"
          />
        </div>
      </div>
    </div>
  );
}
