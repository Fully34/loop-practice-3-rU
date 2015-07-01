var students = [{

 name: 'Liz',
 age: 25,
 city: 'Boulder'
},

{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},

{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},

{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},

{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


//===========================================================================//
                        /* ~~~ # 1 ~~~ */ 
//===========================================================================//

function getAge(arr) {

    // loop thru array elements, print object.age
    arr.map(function(obj){

        console.log(obj.age);
    })
}

// -> Victory


//===========================================================================//
                        /* ~~~ # 2 ~~~ */ 
//===========================================================================//

function nameAndCity(arr) {

    // loop thru array elements, print object.age
    arr.map(function(obj){

        console.log(obj.name + ", " + obj.city);
    })
}

// -> Victory

//===========================================================================//
                        /* ~~~ # 3 ~~~ */ 
//===========================================================================//

function writeSentence(arr) {

    // loop thru array elements, print object.age
    arr.map(function(obj){

        console.log(obj.name + " is from " + obj.city);
    })
}

// -> Victory


//===========================================================================//
                        /* ~~~ # 4 ~~~ */ 
//===========================================================================//

function olderThan25(arr) {

    // loop thru array objects
    arr.map(function(obj){

        // if object.age > 25 --> print obj.name + " is older than 25"
        if (obj.age > 25) {

            console.log( obj.name + " is older than 25" );
        }
    })
}

// -> Victory
