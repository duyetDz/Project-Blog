import faker  from '@faker-js/faker';

var listBlogs = [];

for(var index = 0; index < 10 ; index++){
    let data = {
        id: Math.round(Math.random()*9999),
        title: faker.lorem.sentence(10).toUpperCase(),
        abstract: faker.lorem.paragraph(2),
        fullName: faker.name.firstName() + ' ' +  faker.name.lastName(),
        create_at : faker.date.past()
        }
    listBlogs.push(data)
}

export default listBlogs;
