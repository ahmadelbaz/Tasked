import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiDeleteBin6Fill } from "react-icons/ri";

type Props = {
  deleteTodo: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export function DeleteIcon({ deleteTodo }: Props) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <div className="del-icon icon">
            <RiDeleteBin6Fill size={18} color="crimson" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="">
            <DialogTitle>Delete todo ?</DialogTitle>
            <div className="grid gap-4">
              <div className="grid gap-3"></div>
            </div>
            <DialogDescription>
              This todo will be deleted forever, are you sure you want to delete
              it ?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={deleteTodo}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
