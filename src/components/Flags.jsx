import { flagData } from "./flagdata";

export default function Flags() {
  const renderFlags = flagData.map((item) => (
    <li key={item.alt}>
      <p className="list-flag">{item.title}</p>
      <p>{item.desc}</p>
      <img src={item.src} alt={item.alt} className="img-flag" />
      <div className="resource-link">
        {item.resources.map((link) => (
          <a href={link.url}>{link.text}</a>
        ))}
      </div>
    </li>
  ));

  return (
    <div>
      <ul className="list-flag">{renderFlags}</ul>
    </div>
  );
}
