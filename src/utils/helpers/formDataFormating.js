export const newProductFormData = product => {
  const {
    name,
    price,
    description,
    calories,
    proteins,
    fats,
    carbohydrates,
    category,
    image,
    gallery,
  } = product;
  const formData = new FormData();
  formData.append('name', name);
  formData.append('price', price);
  formData.append('description', description);
  formData.append('calories', calories);
  formData.append('proteins', proteins);
  formData.append('fats', fats);
  formData.append('carbohydrates', carbohydrates);
  formData.append('category', category);
  formData.append('image', image);
  for (let i = 0; i < gallery.length; i++) {
    formData.append('gallery', gallery[i]);
  }
  return formData;
};

export const newPictureFormData = product => {
  const { title, description, tags, image } = product;
  const formData = new FormData();

  tags.forEach(value => {
    formData.append('tags[]', value);
  });
  formData.append('title', title);
  formData.append('description', description);
  formData.append('image', image);
  return formData;
};
