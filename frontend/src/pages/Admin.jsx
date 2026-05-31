const addPizza = async () => {
  const formData = new FormData();

  formData.append("name", name);
  formData.append("price", price);
  formData.append("category", category);
  formData.append("image", imageFile);

  await API.post("/pizzas", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};