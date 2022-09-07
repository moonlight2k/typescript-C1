"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Kenneth',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
};
var favouriteActivites;
favouriteActivites = ['string'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
if (person.role === Role.ADMIN) {
    console.log('is admin');
}
