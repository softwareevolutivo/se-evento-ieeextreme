export const rumour = (a, b) => {
  var cont = 0;
  while (a != b) {
    if (a > b) {
      a = parseInt(a / 2);
    } else {
      b = parseInt(b / 2);
    }
    cont++;
  }

  return cont;
};

export default { rumour };
