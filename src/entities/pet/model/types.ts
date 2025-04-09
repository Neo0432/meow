export interface IPet {
  id: string;
  imageSource: string;

  name: string;
  type: string;
  breed: string;
  sex: 'male' | 'female';
  chipNumber: string;
  medication: boolean;
  birthDate: string;
  age: string;

  lastFeed: string;
  lastWalk: string;
  lastMedical: string;
}
