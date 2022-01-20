const noImage = "no_image.jpg";

// function CelestialBody {
//     this.bodyType = bodyType;
//     this.bodyName = bodyName;
//     this.bodyImage = bodyImage;
//     this.smAxis = smAxis;
//     this.aRadius = aRadius;
//     this.mass = mass;
//     this.temp = temp;
// }
// let mercury = new CelestialBody('planet','Меркурий','https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg','');
const solarSysterm = [
    {
        type:'planet',
        name:'Меркурий',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
        smAxis:'57 909 227',
        aRadius:'2439,7',
        mass:{
            wholePart:'3,33022⋅10',
            degree:'23'
        },
        temp:'от -190 до +430'
    },
    {
        type:'planet',
        name:'Венера',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
        smAxis:'57 909 227',
        aRadius:'2439,7',
        mass:{
            wholePart:'3,33022⋅10',
            degree:'23'
        },
        temp:'от -190 до +430'
    },
    {
        type:'planet',
        name:'Венера',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
        smAxis:'57 909 227',
        aRadius:'2439,7',
        mass:{
            wholePart:'3,33022⋅10',
            degree:'23'
        },
        temp:'от -190 до +430'
    },
    {
        type:'planet',
        name:'Венера',
        image:'https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg',
        smAxis:'57 909 227',
        aRadius:'2439,7',
        mass:{
            wholePart:'3,33022⋅10',
            degree:'23'
        },
        temp:'от -190 до +430'
    }
]
const contentTable = document.querySelector('.content_table');
for (let i = 0; i < solarSysterm.length; i++) {
    const template = `<div class="content_cell">
    <div class="cell_image">
        <img src="${solarSysterm[i].image}" />
    </div>
    <div class="cell_info">
        <p><b>Название: </b>${solarSysterm[i].name}</p>
        <p><b>Большая полуось орбиты: </b>${solarSysterm[i].smAxis} км</p>
        <p><b>Средний радиус: </b>${solarSysterm[i].aRadius} км</p>
        <p><b>Масса: </b>${solarSysterm[i].mass.wholePart}<sup>${solarSysterm[i].mass.degree}</sup> кг</p>
        <p><b>Температура: </b>${solarSysterm[i].temp}&deg;C</p>
    </div>
</div>`
    contentTable.innerHTML+=template;
    
}
