"use client";
import { type EventForm as FormData } from "./EventTimeTable";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TableForm } from "./TableForm";
interface DialogProps {
  open: boolean;
  onClose(): void;
  handleSaveEvent: (data: FormData) => void;
  selectedSlot: { start: Date; end: Date } | null;
}

export function TableDialogCustom({
  open,
  onClose,
  handleSaveEvent,
  selectedSlot,
}: DialogProps): JSX.Element {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-fit">
        <DialogHeader>
          <DialogTitle>Add a Meeting</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 w-full">
          <div className="grid items-center gap-4 max-w-fit">
            <TableForm
              handleSaveEvent={handleSaveEvent}
              selectedSlot={selectedSlot}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
