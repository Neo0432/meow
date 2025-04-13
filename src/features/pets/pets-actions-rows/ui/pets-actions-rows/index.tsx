import {ActionRow} from '@features/pets/pets-actions-rows/ui/action-row';
import {usePetActions} from '@shared/hooks/use-pet-actions';

interface IPetActionRowProps {
  lastFeed: Date;
  lastWalk: Date;
  lastMedication: Date;

  petId: string;
}

export function PetsActionsRows({
  petId,
  lastMedication,
  lastWalk,
  lastFeed,
}: IPetActionRowProps) {
  const {onFeed, onWalk, onMedication} = usePetActions(petId);
  return (
    <>
      <ActionRow
        actionName={'Last feed'}
        icon={'feed'}
        value={lastFeed}
        onActionClick={onFeed}
      />
      <ActionRow
        actionName={'Last walk'}
        icon={'walk'}
        value={lastWalk}
        onActionClick={onWalk}
      />
      <ActionRow
        actionName={'Last medication'}
        icon={'pill'}
        value={lastMedication}
        onActionClick={onMedication}
      />
    </>
  );
}
