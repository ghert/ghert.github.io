export type Tech = { name: string; icon?: { path: string } };

export default function TechList({ items }: { items: Tech[] }) {
  return (
    <ul className="technologies">
      {items.map(({ name, icon }) => (
        <li key={name}>
          {icon && (
            <svg
              role="img"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d={icon.path} />
            </svg>
          )}
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}
