import {ModalsScreensLayout} from '@entrypoint/layouts/modals-screens-layout';
import {PetEditForm} from '@features/pets/pet-edit-form/ui/pet-edit-form';

export function EditPetCard() {
  return (
    <ModalsScreensLayout>
      <PetEditForm />
    </ModalsScreensLayout>
  );
}
