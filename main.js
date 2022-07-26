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
    let item = {}
    item.jmeno=jmeno;
    item.prijmeni=prijmeni;
    item.datumNarozeni=datumNarozeni;
    item.superschopnost=superschopnost;
    // console.log(item)
    
    list.push(item);
    // console.log(list)

    saveList();

    let listAstronauts = document.querySelector('.list');

    let listItem = document.createElement('div');
    listItem.className = 'list__item';
    listAstronauts.appendChild(listItem);

    let listName = document.createElement('div');
    listName.className = 'list__name';
    listItem.appendChild(listName);
    
    let listNameAstronaut = document.createElement('span');
    listNameAstronaut.className = 'list__content bold name';
    listNameAstronaut.textContent = jmeno;
    listName.appendChild(listNameAstronaut);
    
    let listSurnameAstronaut = document.createElement('span');
    listSurnameAstronaut.className = 'list__content bold surname';
    listSurnameAstronaut.textContent = prijmeni;
    listName.appendChild(listSurnameAstronaut);

    let listDescription = document.createElement('div');
    listDescription.className = 'list__description';
    listItem.appendChild(listDescription);
    
    let listdate = document.createElement('span');
    listdate.className = 'list__content date';
    listdate.textContent = datumNarozeni;
    listDescription.appendChild(listdate);

    let listSuperpower = document.createElement('span');
    listSuperpower.className = 'list__content superschopnost';
    listSuperpower.textContent = superschopnost;
    listDescription.appendChild(listSuperpower);

    let listButton = document.createElement('div');
    listButton.className = 'list__button';
    listItem.appendChild(listButton);

    let buttonElement = document.createElement('button');
    buttonElement.className='button';
    buttonElement.textContent='Smazat záznam';
	buttonElement.onclick = removeAstronaut;
    listButton.appendChild(buttonElement)

    console.log(list)
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