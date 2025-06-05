export interface IPet {
  id: string;

  //TODO Rename to imageUrl
  imageUrl: string;

  name: string;
  type: string;
  breed: string;
  sex?: 'Male' | 'Female';
  chipNumber: string;
  medication: boolean;
  birthDate: string;
  age: string;

  lastFeed: Date | string;
  lastWalk: Date | string;
  lastMedical: Date | string;
}

export interface IPetState {
  pets: IPet[];
  selectedPetId: string | null;
}

export interface IPetUpdateDto {
  imageUrl: string;

  name: string;
  type: string;
  breed: string;
  sex?: 'Male' | 'Female';
  chipNumber: string;
  medication: boolean;
  birthDate: string;
  age: string;

  lastFeed: Date | string;
  lastWalk: Date | string;
  lastMedical: Date | string;
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
