type menuOptions= ''|'dogs'|'cats'|'fishes'|'all';



export const creatMenuObject=(activeMenu:menuOptions)=>{
    let returnObject={
        all:false,
        dogs:false,
        cats:false,
        fishes:false
    }
    if(activeMenu!==''){
        returnObject[activeMenu]=true;
    }
    return returnObject;

}