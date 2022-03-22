import { useLoaderData, useMatches } from "remix";

export let loader = () => {
  return "loader data";
};

export default function DynamicIndex() {
  let data = useLoaderData();
  let matches = useMatches();
  return (
    <>
      <h1>Slug</h1>
      <p>{data}</p>
      <pre>
        <code>{JSON.stringify(matches, null, 2)}</code>
      </pre>
    </>
  );
}
