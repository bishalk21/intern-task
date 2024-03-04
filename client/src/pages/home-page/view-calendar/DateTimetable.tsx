import Layout from "@/components/layout/Layout";
import MyEventCalendar from "./add-ons/MyEventCalendar";
import EventTimeTable from "./components/EventTimeTable";
// import MyEventCalendar from "./add-ons/MyEventCalendar";

// import { momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import CustomView from "./EventTimeTable";

// const localizer = momentLocalizer(moment);

const DateTimetable = () => {
  return (
    <Layout>
      <div className="flex h-screen flex-col">
        <div className="flex-1 space-y-4 pt-6">
          <MyEventCalendar />
          {/* <EventTimeTable /> */}
        </div>
      </div>
    </Layout>
  );
};

export default DateTimetable;
