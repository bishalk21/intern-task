import Layout from "@/components/layout/Layout";
// import DayTimetable from "./DayTimetable";
import EventTimeTable from "./EventTimeTable";

// import { momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import CustomView from "./EventTimeTable";

// const localizer = momentLocalizer(moment);

const DateTimetable = () => {
  return (
    <Layout>
      <div className="flex h-screen flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* <CustomView localizer={localizer} /> */}
          {/* <DayTimetable /> */}
          <EventTimeTable />
        </div>
      </div>
    </Layout>
  );
};

export default DateTimetable;
