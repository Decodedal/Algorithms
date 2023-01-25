const jokerLaugh = (num) =>{
    if (num > 10) return console.log("BatMan!")
    console.log("HAAHHAHAHAHA")
    return jokerLaugh(num + 1)
}

jokerLaugh(1)