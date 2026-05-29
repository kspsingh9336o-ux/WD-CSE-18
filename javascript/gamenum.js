let gameNum = 55;
    let user = prompt("enter the gamenumber:");
    while (gameNum!==user) {
        user = prompt("you entered wrong number:");
    }
    if(gameNum!==user){
    console.log("you enterd correct num:");
    }