//Задаем действие кнопки, при нажатии на нее пользователем и задаем кнопке id по индексу массива из кнопок
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = playerMove;  
    btns[i].id = i;
}
// Функция заполнения значений ячеек-кнопок по данным из матрицы
function btnFill(){
    for (let i = 0; i < btns.length; i++) {
        btns[i].innerHTML = gameField[i];
    }
}
// Закрашивает "победные" ячейки зеленным цветом
function btnWinColor(index){
    for (let i = 0; i < winPositions[index].length; i++) {
        btns[winPositions[index][i]].setAttribute("class","winColor");
    }
}