
export function RandomBalance() {
    return Math.floor(Math.random() * 20000)
}

export function RandomDigits(){
    let x = []
    for (let i = 0; i < 4; i++) {
        let num = Math.floor(Math.random()*10)
        x.push(num)
    }
    return x
}