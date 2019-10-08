module.exports = function multiply(first, second) {
  let remember_number = 0;
  let return_mass = [];
  let iter_return_mass = 0;
  let number = 0;

  // разбиваем строки на массивы
  let first_mass = first.split('');
  let second_mass = second.split('');

  // переворачиваем массивы
  first_mass.reverse();
  second_mass.reverse();

  // примерно вычисляем длинну итогового массива и заполняем его нулями,
  // чтобы исключить нечисловые значения
  for (iter_return_mass = 0; iter_return_mass !== (first_mass.length + second_mass.length); iter_return_mass++) {
    return_mass.push(0);
  }

  iter_return_mass = 0;

  // берем по одному элементу первого массива
  for (let iter_first = 0; iter_first !== first_mass.length; iter_first++) {

    // и последовательно перемножаем на все элементы второго массива
    for (let iter_second = 0; iter_second !== second_mass.length; iter_second++) {

      // полученное значение
      number = first_mass[iter_first] * second_mass[iter_second];

      // заполняем итоговый массив
      for (let temp_iter = (iter_second + iter_first); temp_iter !== return_mass.length; temp_iter++) {

        // заполняем первую ячейку
        // берем содержимое ячейки и складываем с полученным числом
        remember_number = return_mass[temp_iter] + number;

        // в ячейку идет младший разряд от полученного числа
        return_mass[temp_iter] = remember_number % 10;

        // вычисляем старший разряд, который переходит в следующую итерацию
        number = Math.trunc(remember_number / 10);

        // если переходных чисел нет, то дальше складывать нули нет смысла
        if (number === 0)
          break;
      }
    }
  }

  // получили массив чисел, теперь надо убрать лишние нули в конце
  for (iter_return_mass = return_mass.length - 1; iter_return_mass !== 0; iter_return_mass--) {
    if (return_mass[iter_return_mass] === 0) {
      return_mass.pop();
    } else break;
  }

  // перевернуть массив
  return_mass.reverse();

  // преобразовать в строку
  let return_str = return_mass.join('');

  return return_str;
}