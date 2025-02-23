// const numbers = [12, 34, 56, 78, 89];

// for(let i = 0; i< numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

// for(const number of numbers){
//     // console.log(number);
// }

const products = [
    {id : 1, name : 'xiomi phone one night', price : 19000},
    {id : 2, name : 'iphone', price : 29000},
    {id : 3, name : 'mac book air', price : 129000},
    {id : 4, name : 'lenovo yoga laptop 2025', price : 19000},
    {id : 5, name : 'Dell ispiron laptop', price : 19000},
    {id : 6, name : 'Samsung phone note 7', price : 19000},
    {id : 7, name : 'Nokia', price : 19000},
    {id : 8, name : 'One plus', price : 19000}
    
];

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);