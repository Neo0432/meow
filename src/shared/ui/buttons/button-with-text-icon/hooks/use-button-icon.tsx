import {SvgDelete24DpE8EaedFill0Wght400Grad0Opsz241} from '@shared/assets/icons/components/pet-forms-buttons/delete-24dp-e8eaed-fill0-wght400-grad0-opsz24-1';
import {useMemo} from 'react';
import {TButtonIcons} from '@shared/ui/buttons/types';

const icons = {
  ['delete']: () => (
    <SvgDelete24DpE8EaedFill0Wght400Grad0Opsz241
      width={20}
      height={20}
      fill="#E8EAED"
    />
  ),
};

export const useButtonIcon = (name: TButtonIcons) => {
  return useMemo(() => icons[name], [name]);
};
