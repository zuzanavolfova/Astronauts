let A = document.querySelector('.list');

function addAstronaut(){
    addListItem();
}

function removeAstronaut  (){

}

function addListItem (){
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

    
    let listItem = document.createElement('div');
    listItem.className = 'list__item';
    A.appendChild(listItem);

    let listName = document.createElement('div');
    listItem.className = 'list__name';
    listItem.appendChild(listName);
    
    let listNameAstronaut = document.createElement('span');
    listNameAstronaut.className = 'list__content bold name';
    listNameAstronaut.textContent = jmeno;
    listName.appendChild(listNameAstronaut);
}

function displayItem ( jmeno, prijmeni, datumNarozeni, superschopnost){
    let listClass = document.querySelector('#list');
    
    let listItem = document.createElement('div');
    listItem.className = 'list__item';
    listClass.appendChild(listItem);

    let listName = document.createElement('div');
    listItem.className = 'list__name';
    listItem.appendChild(listName);
    
    let listNameAstronaut = document.createElement('span');
    listNameAstronaut.className = 'list__content bold name';
    listNameAstronaut.textContent = jmeno;
    listName.appendChild(listNameAstronaut);
    console.log (jmeno)
   
}

function createDiv(className){
    let div = document.createElement('div');
    div.className = className;
}
function createSpan(className){
    let span = document.createElement('span');
    span.className = className;
}
