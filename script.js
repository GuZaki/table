'use strict';

const sectionTable = document.querySelector('.table');

//порядок, описание
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => createTable(json))


const createThead = (data) =>{
    const th = document.createElement('thead');
    th.innerHTML = '<tr></tr>';
    const keys = Object.keys(data[0]);
    keys.map(item => th.children[0].innerHTML += `<th>${item}</th>`);
    return th;
}

const createTbody = (data) =>{
    const tBody = document.createElement('tbody');
    

    for(let i = 0; i < data.length; i++){
        const tr = document.createElement('tr');
        tBody.append(tr);

        const arrValue = Object.values(data[i]);
        for(let j = 0; j < arrValue.length; j++){
            delete arrValue[j].geo;
            const td = document.createElement('td');
            td.innerHTML = typeof (arrValue[j]) === 'object' ? Object.values(arrValue[j]).join('; ') : arrValue[j];
            tr.append(td)
        }
    }
    return tBody
}

const createTable = (data) =>{
    const table = document.createElement('table');
    const th = createThead(data);
    const tbody = createTbody(data);
    table.append(th, tbody);
    sectionTable.append(table);
}



