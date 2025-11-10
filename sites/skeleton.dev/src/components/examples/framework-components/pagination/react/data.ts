import { en_US, Faker, generateMersenne32Randomizer } from '@faker-js/faker';

const randomizer = generateMersenne32Randomizer();

randomizer.seed(0);

const faker = new Faker({
	locale: en_US,
	randomizer: randomizer,
});

export const users = Array.from({ length: 500 }, (_, i) => ({
	id: i + 1,
	name: faker.person.fullName(),
	email: faker.internet.email(),
	country: faker.location.country(),
}));
