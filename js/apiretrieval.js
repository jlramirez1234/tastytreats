async function callingDesserts() {
  const routes = ["?category=Cookie", "?category=Donut", "?category=Ice_Cream"];
  const baseURL = "https://freerandomapi.cyclic.app/api/v1/desserts";
  const res = await Promise.all(
    routes.map((route) =>
      fetch(`${baseURL}${route}`)
        .then((res) => res.json())
        .then((response) => response.data)
        .then((data) => data.map((info) => {
          info[`isHearted`] = false;
          return info;
        }))
    )
  );
  console.log(res.flat());
  return res.flat();
}

callingDesserts();
