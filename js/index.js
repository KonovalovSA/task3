btn.onclick = function() {
    // Узнаём сколько параграфов на страничке
  sumP = document.getElementsByTagName( "p" ).length;
    // Проверяем есть ли на страничке параграфы
  if (sumP == 0) {
        // если нет выводим сообщение
    alert('Хватит нажимать на кнопку OK!!!');
  } else {
        // Генерируем рандомное значение от 0 до максимального значения имеющихся параграфов на страничке
    randP = (Math.floor(Math.random() * sumP));
        // Удаляем параграф
    document.getElementsByTagName( "p" )[randP].remove(); 
  }
}

