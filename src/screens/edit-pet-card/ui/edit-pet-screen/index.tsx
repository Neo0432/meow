import {ModalsScreensLayout} from '@entrypoint/layouts/modals-screens-layout';
import {ModalScreenHeader} from '@entrypoint/headers';
import {PetEditForm} from '@features/pets/pet-edit-form/ui/pet-edit-form';

export function EditPetCard() {
  return (
    <ModalsScreensLayout>
      <ModalScreenHeader title="Edit pet card" goBackButton={true} />
      <PetEditForm />
    </ModalsScreensLayout>
  );
}
