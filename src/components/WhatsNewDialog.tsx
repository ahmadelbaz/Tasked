"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AppVersions } from "./AppVersions";

import { appName, appVersion } from "@/config/consts";
import { WHATS_NEW } from "@/config/whatsNew";
import { useMemo, useState } from "react";

interface DialogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsNewDialog({ isOpen, onClose }: DialogModalProps) {
  const [selectedVersion, setSelectedVersion] = useState(appVersion);

  const features = useMemo(() => {
    return WHATS_NEW.find((v) => v.version === selectedVersion)?.items ?? [];
  }, [selectedVersion]);
  return (
    <Dialog open={isOpen} onOpenChange={(v) => !v && onClose()}>
      <DialogContent
        className="
          sm:max-w-md
          bg-[#333]
          text-white
          rounded-xl
          p-6
        "
      >
        {/* Header */}
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            ✨ What’s New in {appName}
          </DialogTitle>

          <DialogDescription>
            Select a version to view its updates.
          </DialogDescription>

          <div className="text-sm opacity-70 mt-1">
            <AppVersions
              value={selectedVersion}
              setSelectedVersion={setSelectedVersion}
            />
          </div>
        </DialogHeader>

        {/* Content */}
        <ul className="mt-4 space-y-3">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className="flex gap-5">
                <Icon
                  className={`text-2xl w-5 min-w-5 ${
                    item.iconClassName ?? ""
                  } text-[#e7fe55]`}
                />
                <p className="text-sm leading-relaxed">{item.text}</p>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="flex justify-center mt-6">
          <Button
            onClick={onClose}
            className="
              bg-[#E7FE55]
              text-black
              rounded-full
              px-8
              hover:bg-[#f1ff97]
            "
          >
            Got it
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
