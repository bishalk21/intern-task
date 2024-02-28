import {
  Calendar as BigCalendar,
  momentLocalizer,
  Views,
  View,
} from "react-big-calendar";
import moment from "moment";
import React, { useCallback, useMemo, useState } from "react";
import QuarterView from "./QuarterView";
import events from "./events";

const localizer = momentLocalizer(moment);

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CustomDialog = React.memo(({ open, onClose, handleSaveEvent }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTrigger />
    <DialogContent>
      <DialogHeader>
        <DialogTitle>New Meeting</DialogTitle>
      </DialogHeader>
      <div className="flex items-center gap-3">
        <Label htmlFor="title" className="font-extrabold text-xl">
          Title:
        </Label>
        <Input type="text" onChange={(e) => handleSaveEvent(e.target.value)} />
      </div>

      <button onClick={handleSaveEvent}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </DialogContent>
  </Dialog>
));

export default function EventTimeTable() {
  const [myEvents, setEvents] = useState(events);
  const [view, setView] = useState(Views.WEEK);
  const [date, setDate] = useState(new Date());

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelectSlot = useCallback(({ start, end }) => {
    setSelectedSlot({ start, end });
    setIsDialogOpen(true);
  }, []);

  const handleSaveEvent = (title) => {
    if (title && selectedSlot) {
      setEvents((prev) => [
        ...prev,
        { start: selectedSlot.start, end: selectedSlot.end, title },
      ]);
      setIsDialogOpen(false);
    }
  };

  const handleSelectEvent = useCallback(
    (event) => window.alert(event.title),
    []
  );

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 12),
      scrollToTime: new Date(1970, 1, 1, 6),
    }),
    []
  );

  return (
    <>
      <BigCalendar
        defaultDate={defaultDate}
        localizer={localizer}
        defaultView={Views.WEEK}
        view={view}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
        date={date}
        onView={(view) => setView(view)}
        onNavigate={(date) => setDate(date)}
        events={myEvents}
        views={
          {
            day: true,
            week: true,
            month: true,
            year: QuarterView,
          } as any
        }
        messages={{ year: "Quarter" } as any}
      />
      <CustomDialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        handleSaveEvent={handleSaveEvent}
      />
    </>
  );
}
