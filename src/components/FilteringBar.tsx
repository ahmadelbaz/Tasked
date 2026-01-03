import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { ExpandingSearchDock } from "./uitripled/expanding-search-dock";

interface Props {
  onSearch: (text: string) => void;
  toggleFavoriteFilter: () => void;
}

export default function FilteringBar({
  onSearch,
  toggleFavoriteFilter,
}: Props) {
  return (
    <div className="flex justify-center items-center bg-card px-4 mx-96 rounded-full">
      <ExpandingSearchDock
        placeholder="Search tasks"
        onSearch={(query) => onSearch(query)}
      />
      <motion.button
        key="icon"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        onClick={toggleFavoriteFilter}
        className="flex h-22 w-22 items-center justify-center rounded-full bg-card transition-colors hover:bg-muted"
      >
        <Heart className="h-5 w-5" />
      </motion.button>
    </div>
  );
}
