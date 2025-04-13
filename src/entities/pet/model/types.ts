export interface IPet {
  id: string;
  imageSource: string;

  name: string;
  type: string;
  breed: string;
  sex?: 'male' | 'female';
  chipNumber: string;
  medication: boolean;
  birthDate: string;
  age: number;

  lastFeed: Date;
  lastWalk: Date;
  lastMedical: Date;
}

export interface IPetState {
  pets: IPet[];
}

// id: '',
// imageSource: '',
//
// name: '',
// type: '',
// breed: '',
// sex: undefined,
// chipNumber: '',
// medication: false,
// birthDate: '',
// age: '',
//
// lastFeed: '',
// lastWalk: '',
// lastMedical: '',
