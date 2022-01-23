import {solarSystem, noImage} from './data.js';

const contentTable = document.querySelector('.content_table');
for (let i = 0; i < solarSystem.length; i++) {
    let img = solarSystem[i].image?solarSystem[i].image:noImage; 
    const template = `<div class="content_cell">
                        <div class="cell_image">
                            <img src="${solarSystem[i].image}" />
                        </div>
                        <div class="cell_info">
                            <p><b>Название: </b>${solarSystem[i].name}</p>
                            <p><b>Большая полуось орбиты: </b>${solarSystem[i].smAxis} км</p>
                            <p><b>Средний радиус: </b>${solarSystem[i].aRadius} км</p>
                            <p><b>Масса: </b>${solarSystem[i].mass.wholePart}*10<sup>${solarSystem[i].mass.degree}</sup> кг</p>
                            <p><b>Температура: </b>${solarSystem[i].temp}&deg;C</p>
                        </div>
                    </div>`
    contentTable.innerHTML+=template;

}
