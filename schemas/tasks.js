import { faker } from '@faker-js/faker';
const random = Math.floor(Math.random() * 4) + 1 ;

export const createTaskBody = {
    "content": faker.commerce.product(),
    "description": faker.lorem.sentence(),
    "priority": random
}

export const updateTaskBody = {
    "content": `Updated ${faker.commerce.product()}`,
    "description": `Updated ${faker.lorem.sentence()}`
}