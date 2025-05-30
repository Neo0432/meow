export interface IEditPetFormData {
  imageUrl: string;
  name: string;
  type: string;
  sex: 'Male' | 'Female';
  vaccine: boolean;
  birthDate: string;
  breed: string;
  chipNumber: string;
}
