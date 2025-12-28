"use client";

import { Button } from "@/components/ui/button";
import { RiArrowDownSFill } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { appVersion, previousVersions } from "@/config/consts";

type Props = {
  value: string;
  setSelectedVersion: React.Dispatch<React.SetStateAction<string>>;
};

export function AppVersions({ value, setSelectedVersion }: Props) {
  const allVersions = [appVersion, ...previousVersions];

  const onValueChange = (e: string) => {
    console.log(`changed value : ${e}`);
    console.log(`onChange : ${setSelectedVersion}`);
    setSelectedVersion(e);
  };

  console.log(allVersions);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <RiArrowDownSFill /> {value}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 z-[2000]" sideOffset={8}>
        <DropdownMenuLabel>All versions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
          {allVersions.map((version) => {
            return (
              <DropdownMenuRadioItem value={version}>
                V {version}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// "use client"

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { RiArrowDownSFill } from "react-icons/ri"
// import { appVersion, previousVersions } from "@/config/consts"

// export function AppVersions({
//   value,
//   onChange,
// }: {
//   value: string
//   onChange: (v: string) => void
// }) {
//   const versions = [appVersion, ...previousVersions]

//   return (
//     <DropdownMenu modal={false}>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">
//           <RiArrowDownSFill className="mr-1" />
//           v{value}
//         </Button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent className="w-40">
//         <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
//           {versions.map((v) => (
//             <DropdownMenuRadioItem key={v} value={v}>
//               v{v}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
