import React from "react";

import { IconEdit } from "@tabler/icons-react";
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
import { Label } from "@/components/ui/label";

const EditShortUrlButton = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
  longUrl,
  shortCode,
  baseUrl,
}: {
  id: number;
  longUrl: string;
  shortCode: string;
  baseUrl: string;
}) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size="sm" variant="ghost" className="cursor-pointer">
            <IconEdit className="text-muted-foreground " />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit url</DialogTitle>
            <DialogDescription>
              Make changes to your url here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="longUrl">Long url</Label>
              <Input
                type="text"
                id="longUrl"
                name="longUrl"
                defaultValue={longUrl}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="shortCode">Short url</Label>

              <div className="flex rounded-md shadow-xs">
                <span className="border-input bg-background text-muted-foreground -z-10 inline-flex items-center rounded-s-md border px-3 text-sm">
                  {`${baseUrl}/`}
                </span>
                <Input
                  className="-ms-px rounded-s-none shadow-none"
                  id="shortCode"
                  name="shortCode"
                  defaultValue={shortCode}
                  placeholder="custom name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default EditShortUrlButton;
