// Скрипт задает общее управление игрой

// В данной матрице содержится значения ячеек поля для игры в крестики-нолики. Принимает значения null, "X" и "O"
var gameField = [null, null, null, null, null, null, null, null, null];
// Группы "победных" ячеек
var winPositions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
// Находим в HTML документе все элементы с именем btnToPlay (кнопки в поле для игры)
var btns = document.getElementsByName("btnToPlay");
// Переменные для определения заверешенности игры и вывода определенного текста 
var gameOverText;
var gameIsOver = false;
/**
При нажатии пользователя на ячейку провяряется, не закончена ли игра, не заполнена ли ячейка поля крестиком или ноликом,
вызывается функция ИИ, заполняются значения HTML кнопок данными из матрицы значений поля и в конце концов проверяются условия 
завершения игры
*/
function playerMove() {
    if (gameIsOver) alert("Игра уже закончена! Для новой игры перезапустите страницу!");
    else {
        if (!gameField[this.id]) {
            gameField[this.id] = "X";
            aiMove();
        }
        else alert("Место уже занято!");
        btnFill();
        gameOver();
        if (gameIsOver) alert(gameOverText);
    }
}
/**
 * Условия завершения игры. Если определенные ячейки матрицы (по вертикале, по горизонтале, по диагоналям) заполнены "Х", то побеждает игрок
 * если "O", то побеждает компьютер. Если данные условия не выполнены, но при это заняты все ячейки, то объявляется ничья
 */
function gameOver() {
    for (let i = 0; i < winPositions.length; i++) {
        if (checkWin(winPositions[i], "X")) {
            btnWinColor(i);
            gameIsOver = true;
            gameOverText = "Вы - самый умный игрок в крестики-нолики!";
            return
        }
        else if (checkWin(winPositions[i], "O")) {
            btnWinColor(i);
            gameIsOver = true;
            gameOverText = "Не расстраивайтесь! Вы проиграли самому продвинутому ИИ в мире!";
            return
        }
    }
    let isDraw = true;
    for (let i = 0; i < gameField.length; i++) {
        if (gameField[i] == null) {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        gameIsOver = true;
        gameOverText = "Ничья! Но Вы заставили ИИ попотеть!";
    }


}
function checkWin(winPosition = Array(), value) {
    for (let j = 0; j < winPosition.length; j++) {
        if (gameField[winPosition[j]] !== value) {
            return false;
        }
    }
    return true;
}
