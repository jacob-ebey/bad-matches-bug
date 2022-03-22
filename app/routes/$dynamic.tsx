import { Outlet, Form, useLoaderData } from "remix";

export let loader = () => {
  return "loader data";
};

export let action = () => {
  return "yay!";
};

export default function Dynamic() {
  let data = useLoaderData();
  return (
    <>
      <h1>Dynamic</h1>
      <p>{data}</p>
      <Form method="post">
        <button type="submit">Click Me</button>
      </Form>
      <Outlet />
    </>
  );
}
