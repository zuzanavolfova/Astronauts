let list = [];
const seznam = document.querySelector('#list'); 

//nacist seznam ukolu z local storage
writeList();

//odstanit objekt
function removeAstronaut  (){
    console.log('astronaut si uziva duchodu')
    console.log(list)

//vymazat objekt
//zobrazit seznam
    
}

const createDocElement = (type, className, parent, itemValue, event) => {
    let item = document.createElement(type);
    item.className = className;
    item.textContent = itemValue;
    item.onclick = event;
    parent.appendChild(item);
    return item;
}


const createItem = (jmeno, prijmeni, datumNarozeni, superschopnost) => {
    return { 'jmeno' : jmeno,
             'prijmeni' : prijmeni,
             'datumNarozeni' : datumNarozeni,
             'superschopnost' : superschopnost };
}

function addAstronaut (){
    let jmeno = document.querySelector('#jmeno').value;
    let prijmeni = document.querySelector('#prijmeni').value;
    let datumNarozeni = document.querySelector('#datumNarozeni').value;
    let superschopnost = document.querySelector('#superschopnost').value;
    
    if ( jmeno===''|| prijmeni===''||datumNarozeni===''||superschopnost===''){
        alert ('Zadej všechny hodnoty')
        return
    }
    // console.log('kuk')
    let item = createItem(jmeno, prijmeni, datumNarozeni, superschopnost);

    list.push(item);
    // console.log(list)

    saveList();

    const listItem = createDocElement('div', 'list__item', document.querySelector('.list'));
    const listName = createDocElement('div', 'list__name', listItem);

    const listNameAstronaut = createDocElement('span', 'list__content bold name', listName, jmeno);
    const listSurnameAstronaut = createDocElement('span', 'list__content bold surname', listName, prijmeni);

    const listDescription = createDocElement('div', 'list__description', listItem);
    const listdate = createDocElement('span', 'list__content date', listDescription, datumNarozeni);
    const listSuperpower = createDocElement('span', 'list__content superschopnost', listDescription, superschopnost);

    const listButton = createDocElement('div', 'list__button', listItem);
    const buttonElement = createDocElement('button', 'button', listButton, 'Smazat záznam',removeAstronaut);

    // console.log(list)
}

function saveList() {
    localStorage.list=JSON.stringify(list)
}

function writeList(){
    let hodnota=localStorage.list;
// kryju situaci, kdyz nemam zadane zadne ukoly
	if (hodnota === null || hodnota=== undefined ) {
		list = [];
	} else {
		list = JSON.parse(hodnota);
	}
}