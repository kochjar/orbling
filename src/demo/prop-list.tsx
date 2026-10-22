import { PROPS } from "./copy";

export function PropList() {
  return (
    <dl className="props">
      {PROPS.map((prop) => (
        <div key={prop.name} className="prop">
          <dt>
            {prop.name}
            <span className="prop-type">{prop.type}</span>
          </dt>
          <dd>{prop.line}</dd>
        </div>
      ))}
    </dl>
  );
}
