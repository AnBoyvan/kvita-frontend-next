import Notiflix from 'notiflix';

export const updateTags = async data => {
  try {
    const response = await fetch('/api/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    if (response.ok) {
      Notiflix.Notify.success(responseData.message);
    } else {
      Notiflix.Notify.failure('Помилка при зміні типу.');
    }
  } catch (error) {
    console.log(error);
  }
};
