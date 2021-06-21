import "./PortfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected }) {
  return (
    <li
      className={"portfolioList " + (active && "active")}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
