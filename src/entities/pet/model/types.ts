export interface IPet {
  id: string;
  imageSource: string;

  name: string;
  type: string;
  breed: string;
  sex?: 'Male' | 'Female';
  chipNumber: string;
  medication: boolean;
  birthDate: string;
  age: number;

  lastFeed: string;
  lastWalk: string;
  lastMedical: string;
}

export interface IPetState {
  pets: IPet[];
  selectedPet: IPet;
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
