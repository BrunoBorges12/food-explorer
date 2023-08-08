export default async function getProducts(token: string | undefined) {
  const res = await fetch(`${process.env.BASE_URL_LOCAL}/products`, {
    headers: {
      Authorization: "Bearer " + token,
      "content-Type": "application/json",
    },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    return "ok";
    // This will activate the closest `error.js` Error Boundary
  }

  return res.json();
}
