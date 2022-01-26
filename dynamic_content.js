import {solarSystem, noImage} from './data.js';

const contentTable = document.querySelector('.content_table');

function sortByDistance(a,b) {
    return a.smAxis - b.smAxis;
}

function sortByRadius(a,b) {
    return a.aRadius - b.aRadius;
}

function sortByMass(a,b) {
    return ((a.mass.wholePart * (10 ** a.mass.degree))-(b.mass.wholePart * (10 ** b.mass.degree)))
}

function bodyType(type = 'planet'){
    return el=>el.type === type;
}

const filterSelect = document.querySelector('.filter').addEventListener('change', (e)=>console.log(e.target.value));
const sorterSelect = document.querySelector('.sorter');

function contentTableFiller(bodyType,sortType) {
    contentTable.innerHTML = '';
    let dataArray = solarSystem.filter(bodyType).sort(sortType);
    for (let i = 0; i < dataArray.length; i++) {
        setTimeout(()=>{let img = dataArray[i].image?dataArray[i].image:noImage;
            const template = `<div class="content_cell">
            <div class="cell_image">
                                <img src="${img}" />
                            </div>
                            <div class="cell_info">
                                <p><b>Название: </b>${dataArray[i].name}</p>
                                <p><b>Большая полуось орбиты: </b>${dataArray[i].smAxis} км</p>
                                <p><b>Средний радиус: </b>${dataArray[i].aRadius} км</p>
                                <p><b>Масса: </b>${dataArray[i].mass.wholePart}*10<sup>${dataArray[i].mass.degree}</sup> кг</p>
                                <p><b>Температура: </b>${dataArray[i].temp}&deg;C</p>
                            </div>
                        </div>`
        contentTable.innerHTML+=template},500*i);
    }

}

window.onload = contentTableFiller(bodyType('planet'),sortByDistance);
