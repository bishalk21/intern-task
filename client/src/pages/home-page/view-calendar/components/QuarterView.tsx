import { DateLocalizer, Navigate, ViewProps } from "react-big-calendar";
import Calendar from "react-calendar";
import { Grid, GridItem } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useState } from "react";
import EventPopover from "../add-ons/EventPopover";
import { EventForm } from "./EventTimeTable";

export default function QuarterView({
  date,
  localizer,
  onView,
  onNavigate,
  events,
  ...otherProps
}: ViewProps & {
  events: EventForm[];
}): JSX.Element {
  const [isPopover, setIsPopover] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const currRange = QuarterView.range(date, { localizer });

  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  const handleClosePopover = () => {
    setIsPopover(false);
  };

  return (
    <>
      <Grid templateColumns={"repeat( auto-fit, minmax(290px, 1fr))"} gap={4}>
        {currRange.map((month, index) => {
          return (
            <GridItem w="100%" key={index}>
              <Calendar
                onClickDay={(day) => {
                  // console.log(day);
                  handleDayClick(day);
                  setIsPopover(true);
                }}
                activeStartDate={month}
                tileClassName={({ date }) => {
                  const eventOnDay = events?.some((event) =>
                    moment(event.start).isSame(moment(date), "day")
                  );
                  return eventOnDay ? "event-day" : null;
                }}
              />
            </GridItem>
          );
        })}
      </Grid>
      {selectedDate && (
        <EventPopover
          open={isPopover}
          date={selectedDate}
          onClose={handleClosePopover}
          events={events?.filter((event) =>
            moment(event.start).isSame(selectedDate, "day")
          )}
          // onClose={() => setSelectedDate(null)}
        />
      )}
    </>
  );
}

QuarterView.range = (
  date: Date,
  { localizer }: { localizer: DateLocalizer }
) => {
  const start = localizer.startOf(date, "year"); // Start of the year
  const end = localizer.add(start, 2, "month"); // End of the third month

  const range = [];
  let current = start;

  while (localizer.lte(current, end, "month")) {
    range.push(current);
    current = localizer.add(current, 1, "month");
  }

  return range;
};

QuarterView.navigate = (
  date: Date,
  action: any,
  { localizer }: { localizer: DateLocalizer }
) => {
  if (action instanceof Date) return action;

  switch (action) {
    case Navigate.NEXT:
      return localizer.add(date, 1, "year");
    case Navigate.PREVIOUS:
      return localizer.add(date, -1, "year");
    default:
      return date;
  }
};

QuarterView.title = (
  date: Date,
  { localizer }: { localizer: DateLocalizer }
) => {
  return localizer.format(date, "YYYY");
};
