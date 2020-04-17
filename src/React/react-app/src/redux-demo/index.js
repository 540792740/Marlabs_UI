/*
* Action is the only way your application can interact with store
* Carry some information from the app to the store
* Can be created as POJO(Plain old hs object)
* have a type property that indicates the type of action
* */


//Define an action
const BUY_CAKE = 'BuyCake';


//Create an action by define a function
function buyCake()
{
    return{
        type:BUY_CAKE,
        info:'BuyCake action'
    }
}
