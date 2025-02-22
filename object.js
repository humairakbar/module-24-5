const nayok = {
    name : 'Shahrukh Khan',
    id : 121,
    address : 'Delhi',
    isMarried : true,
    friends : ['Salman', 'Saif', "Amir"],
    movies : [{name : 'Badshah', year : 2001}, {name : 'My name is khan', year : 2012}],
    act : function(){
        console.log("The king of Bollywood!");
    },
    car : {
        brand : 'BMW',
        price : 50000000,
        made : 2025,
        manufacturer : {
            name : 'BMW',
            ceo : 'ABC',
            country : 'Germany'
        }
    }
}

console.log(nayok.act());