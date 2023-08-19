export type ConfirmDeleteModalProps = {
  open: boolean;
  title: string;
  content: string;
  setOpen: (open: boolean) => void;
  onConfirm: () => void;
};
