import {
  MdAutoAwesome,
  MdDeleteForever,
  MdEdit,
  MdFileDownload,
  MdFileUpload,
  MdLanguage,
  MdNewReleases,
  MdPalette,
  MdPhoneIphone,
  MdSave,
  MdTextFields,
} from "react-icons/md";
import { RiArrowDownSFill } from "react-icons/ri";

export type WhatsNewItem = {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  iconClassName?: string;
};

export type WhatsNewVersion = {
  version: string;
  items: WhatsNewItem[];
};

export const WHATS_NEW: WhatsNewVersion[] = [
  {
    version: "1.1.0",
    items: [
      {
        icon: MdAutoAwesome,
        text: "Introducing Faseela — a fresh new name and logo for a cleaner, more meaningful experience.",
      },
      {
        icon: MdEdit,
        text: "You can now edit your todos easily without deleting and recreating them.",
      },
      {
        icon: MdDeleteForever,
        text: "Added a confirmation step before deleting a todo to prevent accidental loss.",
      },
      {
        icon: MdPalette,
        text: "Improved dialog styling and smoother UI transitions.",
      },
      {
        icon: MdNewReleases,
        text: "New version selector added to the What’s New dialog.",
      },
    ],
  },
  {
    version: "1.0.0",
    items: [
      {
        icon: MdSave,
        text: "Todos are now stored locally to keep your data safe.",
      },
      {
        icon: MdFileDownload,
        text: "Export your todos to a file and save them anywhere.",
      },
      {
        icon: MdFileUpload,
        text: "Import previously saved todos back into the app.",
      },
      {
        icon: MdPhoneIphone,
        text: "The app is now fully responsive on all screen sizes.",
      },
      {
        icon: MdLanguage,
        text: "Improved text input & todos titles to support automatic RTL/LTR detection for Arabic and English.",
      },
      {
        icon: MdPalette,
        text: "New UI improvements for a cleaner and smoother experience.",
      },
      {
        icon: RiArrowDownSFill,
        text: "A new options menu for quick access to features.",
      },
      {
        icon: MdTextFields,
        iconClassName: "text-[#ffb74d]",
        text: "Long task titles are now truncated with ellipsis (…) and can be expanded with a click for better readability.",
      },
    ],
  },
];
