const getCategories = (id) =>
  fetch(`https://comfy-nocountry.azurewebsites.net/idcategory/${id}`).then(
    (res) => res.json()
  );

export default getCategories;
