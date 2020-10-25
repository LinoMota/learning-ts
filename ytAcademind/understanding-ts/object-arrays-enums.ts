enum Role { ADMIN, READ_ONLY, AUTHOR }

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: 'Lino',
    age: 20,
    hobbies: ['Cooking', 'Fishing'],
    role: Role.ADMIN
}

person.role.push('adm')

for (const str of person.hobbies) {
    console.log(str.toUpperCase())
}