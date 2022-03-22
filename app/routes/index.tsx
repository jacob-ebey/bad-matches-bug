import { Link, useLocation } from "remix";

export default function Index() {
  let location = useLocation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Bad bug...</h1>
      <p>
        When a form is submitted the index route of a dynamic layout is removed
        from the matches.
      </p>
      <p>
        It's even worse for a nested dynamic route. Not sure what's going on
        here yet but wanted to get a repo up for debugging.
      </p>
      <ul>
        <li>
          <Link to="/dynamic">
            Removed index from matches and doesn't reload index
          </Link>
        </li>
        <li>
          <Link to="/dynamic/slug">Completely blows up</Link>
        </li>
      </ul>
    </div>
  );
}
