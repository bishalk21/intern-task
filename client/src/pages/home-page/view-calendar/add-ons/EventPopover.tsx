import moment from "moment";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { EventForm } from "../components/EventTimeTable";
import { Dialog, DialogContent } from "@/components/ui/dialog";
export interface EventPopoverProps {
  date: Date;
  open: boolean;
  events?: EventForm[] | undefined;
  onClose: () => void;
}
const EventPopover: React.FC<EventPopoverProps> = ({
  date,
  open,
  events,
  onClose,
}) => {
  console.log(events);
  if (!events) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        Events on {moment(date).format("MMMM D, YYYY")}
        {events.map((event) => (
          <div key={event.id}>
            <strong>{event.title}</strong>
            <p>{event.message}</p>
            <p>Date: {event.date}</p>
            <p>Start Time: {event.startTime}</p>
            <p>End Time: {event.endTime}</p>
          </div>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default EventPopover;
