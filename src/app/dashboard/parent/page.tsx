import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
  return (
    <div className='flex-1 p-4 flex gap-4 flex-col md:flex-row'>
      {/* md */}
      {/* LEFT */}
       {/* <div className="w-full xl:w-2/3"> */}
       {/* flex flex-col gap-8 */}
       <div className="w-full lg:w-2/3">
        <div className="h-full bg-white p-4 rounded-md text-zinc-800">
          <h1 className="text-xl font-semibold text-gray-700">Schedule (Dhruv)</h1>
          <BigCalendar/>
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};
export default ParentPage;