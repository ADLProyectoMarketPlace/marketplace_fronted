import bgHome from "../assets/marketplace.jpg";

export default function Background() {
  return (
    <div className="background">
      <div
        className="background-home"
        style={{
          backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
          ),
          url('${bgHome}')`,
        }}
      ></div>
      <div className="ms-5 text-white">
        <h1 className="display-1 col-sm-6">Bienvenidos al MarketPlace</h1>
        <h2>💻🖲🚐🏠👩</h2>
      </div>
    </div>
  );
}
