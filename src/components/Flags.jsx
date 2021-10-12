import { flagData } from "./flagdata";

export default function Flags() {
  const renderFlags = flagData.map((item) => (
    <li key={item.alt}>
      <img src={item.src} alt={item.alt} className="img-flag" />
    </li>
  ));

  return <ul>{renderFlags}</ul>;
}
