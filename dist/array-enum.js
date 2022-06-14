"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Kenneth',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
let favouriteActivites;
favouriteActivites = ['string'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase);
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
