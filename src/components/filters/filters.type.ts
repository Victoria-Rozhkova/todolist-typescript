export type FiltersProps = {
  filters: { title: string }[];
  currentFilter: string;
  onChange: (filter: string) => void;
};
