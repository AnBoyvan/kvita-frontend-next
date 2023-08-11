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
  return formData;
};
