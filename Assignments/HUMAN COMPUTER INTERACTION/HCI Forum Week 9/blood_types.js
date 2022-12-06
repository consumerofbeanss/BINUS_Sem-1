function canGiveBlood(blood1, blood2){
    if (blood1 == "O+") {
        if (blood2 == "O+" || blood2 == "A+" || blood2 == "AB+" || blood2 == "B+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "O-") {
        if (blood2 == 'string') {
            return "True"
        }
    } else if (blood1 == "A+") {
        if (blood2 == "AB+" || blood2 == "A+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "A-") {
        if (blood2 == "AB+" || blood2 == "A+" || blood2 == "A-" || blood2 == "AB-") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "B+") {
        if (blood2 == "AB+" || blood2 == "B+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "B-") {
        if (blood2 == "AB+" || blood2 == "AB-" || blood2 == "B+" || blood2 == "B-" ) {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "AB+") {
        if (blood2 == "AB+") {
            return "True"
        } else {
            return "False"
        }
    } else if (blood1 == "AB-") {
        if (blood2 == "AB-" || blood2 == "AB+") {
            return "True"
        } else {
            return "False"
        }
    }
}

console.log(canGiveBlood("O+", "A+"))
console.log(canGiveBlood("A-", "B-"))
console.log(canGiveBlood("A-", "AB+"))