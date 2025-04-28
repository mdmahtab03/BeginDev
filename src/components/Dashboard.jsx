export default function Dashboard() {
    return (
      <div className="flex min-h-screen">
        
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
          <nav className="flex flex-col gap-4">
            <a href="#" className="hover:bg-gray-700 p-2 rounded">Home</a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded">Analytics</a>
            <a href="#" className="hover:bg-gray-700 p-2 rounded">Settings</a>
          </nav>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <h2 className="text-3xl font-bold mb-6">Welcome back!</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Revenue</h3>
              <p>$24,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Users</h3>
              <p>1,200</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">New Orders</h3>
              <p>320</p>
            </div>
          </div>
  
        </main>
      </div>
    )
  }
  