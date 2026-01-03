import { ExpandingSearchDock } from "./uitripled/expanding-search-dock";

interface Props {
  onSearch: (text: string) => void;
}

export default function FilteringBar({ onSearch }: Props) {
  return (
    <div className="flex justify-center">
      <ExpandingSearchDock
        placeholder="Search tasks"
        onSearch={(query) => onSearch(query)}
      />
    </div>
  );
}
