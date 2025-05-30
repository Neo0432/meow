import * as yup from 'yup';
import {userEditFormScheme} from '@features/user/edit-user-form/model/scheme';

export type IEditUserForm = yup.InferType<typeof userEditFormScheme>;
