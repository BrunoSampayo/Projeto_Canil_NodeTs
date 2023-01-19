type MenuOptions =''|'all'|'dog'|'cat'|'fish';


export const createMenuObject = (activeMenu:MenuOptions)=>{
    let currentObject ={
        all: false,
        dog:false,
        cat:false,
        fish:false
    }
    if(activeMenu!==''){
        currentObject[activeMenu]=true;
    }


    return currentObject
    }
