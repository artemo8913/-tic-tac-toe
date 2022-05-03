//Данный скрипт создает таблицу из кнопок для сайта с крестиками-ноликами
var table = document.createElement("table");
//table.setAttribute("class","mainPart");

// Задаем размерность таблицы
var n = 3;
//Размещаем кнопки в таблице размера N
for (let i = 0; i < n; i++) {
    var tr = document.createElement("tr");
    for (let i = 0; i < n; i++) {
        var btn = document.createElement("button");
        btn.name = "btnToPlay";
        var td = document.createElement("td");
        td.appendChild(btn);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);
