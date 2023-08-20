export const toUkrainian = item => {
  switch (item) {
    case 'pie':
      return 'Торти';
    case 'cake':
      return 'Солодощі';
    case 'dessert':
      return 'Десерти';
    case 'other':
      return 'Смаколики';
    case 'customer':
      return 'Клієнт';
    case 'manager':
      return 'Менеджер';
    case 'admin':
      return 'Адміністратор';
    case 'superuser':
      return 'Суперюзер';
    default:
      return '';
  }
};

export const toEnglish = item => {
  switch (item) {
    case 'Торти':
      return 'pie';
    case 'Солодощі':
      return 'cake';
    case 'Десерти':
      return 'dessert';
    case 'Смаколики':
      return 'other';
    case 'Клієнт':
      return 'customer';
    case 'Менеджер':
      return 'manager';
    case 'Адміністратор':
      return 'admin';
    case 'Суперюзер':
      return 'superuser';
    default:
      return '';
  }
};
