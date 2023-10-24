const getProducts = () =>
  fetch("https://comfy-nocountry.azurewebsites.net/products").then((res) =>
    res.json()
  );

export default getProducts;
