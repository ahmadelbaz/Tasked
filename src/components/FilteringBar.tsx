import { useColor } from "@/context/ColorContext";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { TooltipComp } from "./tooltip";
import { ExpandingSearchDock } from "./uitripled/expanding-search-dock";

interface Props {
  onSearch: (text: string) => void;
  toggleFavoriteFilter: () => void;
  isFavorite: boolean;
}

export default function FilteringBar({
  onSearch,
  toggleFavoriteFilter,
  isFavorite,
}: Props) {
  const { color } = useColor();
  return (
    <div className="bg-card px-4  rounded-full inline-block">
      <TooltipComp
        children={
          <div className="inline-block">
            <ExpandingSearchDock
              placeholder="Search tasks"
              onSearch={onSearch}
            />
          </div>
        }
        text={"Search"}
      />

      <TooltipComp
        children={
          <div className="inline-block">
            <motion.button
              key="icon"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={toggleFavoriteFilter}
              className={`flex h-22 w-22 items-center justify-center rounded-full 
                 bg-card
               transition-colors ${
                 isFavorite ? "hover:bg-accent/90" : "hover:bg-muted"
               }`}
              style={isFavorite ? { backgroundColor: color } : undefined}
            >
              <Heart
                className={`h-5 w-5`}
                color={isFavorite ? "hsl(var(--card))" : "white"}
              />
            </motion.button>
          </div>
        }
        text={"Show only favorite"}
      />
    </div>
  );
}
