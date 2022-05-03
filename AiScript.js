// Очень простой ИИ, который ищет не занятые ячейки и заполняет случайным образом одну ячейку "O"
function aiMove(){
    var emptyIndex = [];
    for (let i = 0; i < gameField.length; i++) {
        if(!gameField[i]){
            emptyIndex.push(i);
        }
    }
    var random = Math.floor(Math.random()*emptyIndex.length);
    gameField[emptyIndex[random]] = "O";  
}