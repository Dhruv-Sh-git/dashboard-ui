
const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        {/* header */}
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-600" >Announcements</h1>
            <span className="text-xs text-gray-500 ">View All</span>
        </div>
        {/* component box */}
        <div className="flex flex-col gap-4 mt-4">
        <div className="bg-purple-50 rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-gray-700">Lorem ipsum</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1">2025-01-01</span>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-yellow-50 rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-gray-700">Lorem ipsum</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1">2025-01-01</span>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="bg-blue-50 rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-medium text-gray-700">Lorem ipsum</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md px-1 py-1">2025-01-01</span>
            </div>
            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>

        </div>
    </div>
  )
}

export default Announcements