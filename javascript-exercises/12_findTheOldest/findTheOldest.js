const findTheOldest = function(people) {
    return people.reduce( (oldest, person) => { // (what_reduce_returns, current_value)
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let personAge = getAge(person.yearOfBirth, person.yearOfDeath)
        if ( oldestAge < personAge ) { // if current value is older, change oldest
            oldest = person
        }
        return oldest // return what_reduce_returns or get error
    })
};

const getAge = function(yearOfBirth, yearOfDeath) {
    if ( !yearOfDeath ) { // in case yearOfDeath isn't listed, assume 1900yo
        yearOfDeath = new Date().getFullYear()
    }
    return yearOfDeath - yearOfBirth
}

// Do not edit below this line
module.exports = findTheOldest;