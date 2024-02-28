import { useMemo } from "react";
import { DateLocalizer, Navigate, ViewProps, Views } from "react-big-calendar";
import Calendar from "react-calendar";
import { Grid, GridItem } from "@chakra-ui/react";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function QuarterView({
  date,
  localizer,
  onView,
  onNavigate,
  events,
}: ViewProps) {
  const currRange = QuarterView.range(date, { localizer });

  return (
    <Grid templateColumns={"repeat( auto-fit, minmax(250px, 1fr))"} gap={6}>
      {currRange.map((month, index) => {
        return (
          <GridItem w="100%" key={index}>
            <Calendar
              activeStartDate={month}
              tileClassName={({ date, view }) => {
                if (
                  view === "month" &&
                  events?.find((event) =>
                    moment(event.start).isSame(moment(date), "day")
                  )
                )
                  return "event-day";
                return null;
              }}
              onClickDay={(day) => {
                onView && onView(Views.DAY);
                onNavigate(day);
              }}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
}

QuarterView.range = (
  date: Date,
  { localizer }: { localizer: DateLocalizer }
) => {
  const start = localizer.startOf(date, "year"); // Start of the year
  const end = localizer.add(start, 2, "months"); // End of the third month

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
