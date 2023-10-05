function receivesAFunction(peel){
    return peel()
}
function peel (){return 'I can peel fruits'}
function returnsANamedFunction(){
    function chop (){
        console.log("I can chop veggies")
    }
    return chop
}
function returnsAnAnonymousFunction(){
   return function (){console.log ("trust the process")}
}