function myDisplayer(some){
    console.log(some);
}

let myPromise=new Promise(function(resolve, reject){
    let x=0;
    if(x==0){
        resolve("Ok");
    } else{
        reject("Error");
    }
});
myPromise.then(
    function(value) {myDisplayer(value);},
    function(error){myDisplayer(error);}
);