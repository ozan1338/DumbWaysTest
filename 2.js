var list1 = [
    { firstName: 'Lingard', lastName: 'Y.', country: 'England', continent: 'British', age: 35, language: 'JavaScript' },
    { firstName: 'Joseph', lastName: 'A.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
];


const produce = (list1) => {
    for (let i = 0; i<list1.length(); i++){
        if(list1[i].firstName === 'Lingard'){
            list1[i].greeting = 'Hi Lingard, what do you like the most about JavaScript?'
        }
        else{
            list1[i].greeting = 'Hi Lukas, what do you like the most about Python?'
        }
    }
    return console.log(list1);
}

produce(list1)



