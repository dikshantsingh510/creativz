import React from "react";
import { IconTrash } from "@tabler/icons-react";
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
import { Input } from "@/components/ui/input";
import { deleteLinkAction } from "@/actions/links.action";
import { toast } from "sonner";

const DeleteShortUrlButton = ({ id, url }: { id: number; url: string }) => {
  const handleDelete = async () => {
    const response = await deleteLinkAction(id);
    if (response?.success) {
      toast.success("Url deleted successfully");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="ghost" className="cursor-pointer">
          <IconTrash className="text-rose-700" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Deleting this Url will remove all its analytics. This action cannot
            be undone.
          </DialogDescription>
        </DialogHeader>
        <Input type="text" disabled value={url} />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={handleDelete}>
              Confirm Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteShortUrlButton;
