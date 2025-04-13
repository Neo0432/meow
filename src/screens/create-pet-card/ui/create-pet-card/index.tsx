import {PetCreateForm} from '@features/pets/pet-create-form/ui/pet-create-form';
import {ModalsScreensLayout} from '@entrypoint/layouts/modals-screens-layout';
import {ModalScreenHeader} from '@entrypoint/headers';

export function CreatePetCard() {
  return (
    <ModalsScreensLayout>
      <ModalScreenHeader title="Create pet card" goBackButton={true} />
      <PetCreateForm />
    </ModalsScreensLayout>
  );
}
