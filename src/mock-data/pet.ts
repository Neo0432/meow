import {IPet} from '@entities/pet/model/types';

export const petArray: IPet[] = [
  {
    imageSource:
      'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
    name: 'Astrodestroyer',
    age: 3,
    sex: 'Male',
    breed: '',
    birthDate: '12.12.2012',
    chipNumber: '12345678',
    type: 'cat',
    lastFeed: new Date().toISOString(),
    lastWalk: new Date().toISOString(),
    lastMedical: new Date().toISOString(),
    medication: true,
    id: '123456123',
  },

  {
    imageSource:
      'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
    name: 'Astrodestroyer',
    age: 3,
    sex: 'Male',
    breed: '',
    birthDate: '12.12.2012',
    chipNumber: '13345678',
    type: 'cat',
    lastFeed: new Date().toISOString(),
    lastWalk: new Date().toISOString(),
    lastMedical: new Date().toISOString(),
    medication: true,
    id: '133456123',
  },

  {
    imageSource:
      'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
    name: 'Astrodestroyer',
    age: 3,
    sex: 'Male',
    breed: '',
    birthDate: '12.12.2012',
    chipNumber: '14345678',
    type: 'cat',
    lastFeed: new Date().toISOString(),
    lastWalk: new Date().toISOString(),
    lastMedical: new Date().toISOString(),
    medication: true,
    id: '143456123',
  },

  {
    imageSource:
      'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
    name: 'Astrodestroyer',
    age: 3,
    sex: 'Male',
    breed: '',
    birthDate: '12.12.2012',
    chipNumber: '15345678',
    type: 'cat',
    lastFeed: new Date().toISOString(),
    lastWalk: new Date().toISOString(),
    lastMedical: new Date().toISOString(),
    medication: true,
    id: '153456123',
  },
];

export const pet: IPet = {
  imageSource:
    'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
  name: 'Asteroid destroyer',
  age: 3,
  sex: 'Male',
  breed: '',
  birthDate: '12.12.2012',
  chipNumber: '12345678',
  type: 'cat',
  lastFeed: new Date('2025-04-14T23:00:00Z').toISOString(),
  lastWalk: new Date('2025-04-15T02:04:31.873Z').toISOString(),
  lastMedical: new Date('2025-04-13T03:09:31.873Z').toISOString(),
  medication: true,
  id: '123456123',
};
