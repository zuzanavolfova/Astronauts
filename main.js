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
}