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
    default:
      return '';
  }
};
