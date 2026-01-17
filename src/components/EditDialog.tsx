import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { MdEdit } from "react-icons/md";
import { Input } from "./ui/input";

interface props {
  id: string;
  title: string;
  editTodo: (id: string, newTitle: string) => void;
}

export function EditDialog({ id, title, editTodo }: props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <MdEdit size={18} className="text-primary w-4 h-4 mr-4" />
      </DialogTrigger>

      <DialogContent
        className="sm:max-w-[425px]"
        onOpenAutoFocus={(e) => {
          e.preventDefault();

          requestAnimationFrame(() => {
            const el = inputRef.current;
            if (!el) return;
            el.focus();
            const len = el.value.length;
            el.setSelectionRange(len, len);
          });
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editTodo(id, inputRef.current!.value);
            setOpen(false);
          }}
        >
          <DialogHeader>
            <DialogTitle>Edit todo</DialogTitle>
            <DialogDescription>
              Make changes to your todo. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <div className="grid gap-3">
              <Label htmlFor={title}>Title</Label>
              <Input ref={inputRef} id={id} name={title} defaultValue={title} />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)} variant="outline">
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={() => editTodo(id, inputRef.current!.value)}
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
