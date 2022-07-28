let list = [];
const elementList = document.querySelector('#list'); 

const createDocElement = (type, className, parent, itemValue, event) => {
    let item = document.createElement(type);
    item.className = className;
    item.textContent = itemValue;
    item.onclick = event;
    parent.appendChild(item);
    return item;
}

//nacist seznam astronautu z local storage
loadList();
//zobrazit seznam astronautu z local storage
displayList();

function loadList(){
    let items=localStorage.list;
// kryju situaci, kdyz nemam zadane zadne hodnoty
	if (items === null || items=== undefined ) {
		list = [];
	} else {
		list = JSON.parse(items);
	}
}

function saveList() {
    localStorage.list=JSON.stringify(list)
}

function displayList(){
    elementList.innerHTML = '';
    if (list.length > 0){
        for (let i =0; i<list.length; i++ ) {
            let item = createCard(list[i].jmeno, list[i].prijmeni, list[i].datumNarozeni, list[i].superschopnost, i);

            elementList.appendChild(item);
        }
    }
}

function createCard(jmeno, prijmeni, datumNarozeni, superschopnost, i) {
    const listItem = createDocElement('div', 'list__item', document.querySelector('.list'));
    const listName = createDocElement('div', 'list__name', listItem);

    const listNameAstronaut = createDocElement('span', 'list__content bold name', listName, jmeno);
    const listSurnameAstronaut = createDocElement('span', 'list__content bold surname', listName, prijmeni);

    const listDescription = createDocElement('div', 'list__description', listItem);
    const listdate = createDocElement('span', 'list__content date', listDescription, datumNarozeni);
    const listSuperpower = createDocElement('span', 'list__content superschopnost', listDescription, superschopnost);

    const listButton = createDocElement('div', 'list__button', listItem);
    const buttonElement = createDocElement('button', 'button', listButton, 'Smazat záznam', removeAstronaut)
    buttonElement.dataset.index = i

    return listItem
}

//odstanit objekt
function removeAstronaut (){
    console.log('astronaut si uziva duchodu')
    let index = this.dataset.index;
	list.splice(index,1);
    console.log(this)

	saveList();
	displayList();
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

    let object = {};
    object.jmeno =jmeno;
    object.prijmeni=prijmeni;
    object.datumNarozeni = datumNarozeni;
    object.superschopnost = superschopnost;
    
    list.push(object);

    saveList();

    displayList(jmeno, prijmeni, datumNarozeni, superschopnost);
}