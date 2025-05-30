export interface IPetUpsertForm {
  onSubmit: (data: any) => void;
  formType: 'update' | 'create';
}
