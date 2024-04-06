import { faker } from '@faker-js/faker';
import { getTimeDistanceToNow } from '../utils/formatDate';

export const attendees = Array.from({ length: 200 }).map(() => {
  return {
    id: faker.number.int({ min: 10000, max: 20000 }),
    name: faker.person.fullName(),
    email: faker.internet.email().toLocaleLowerCase(),
    createdAt: getTimeDistanceToNow(faker.date.recent({ days: 30 })),
    checkedInAt: getTimeDistanceToNow(faker.date.recent({ days: 7 })),
  };
});
