const AdminPage = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 text-center text-xl font-semibold bg-gray-200">
          Admin Dashboard
        </div>
        <nav className="mt-4">
          <ul>
            <li>
              <a href="#" className="block p-4 text-gray-600 hover:bg-gray-200">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block p-4 text-gray-600 hover:bg-gray-200">
                Users
              </a>
            </li>
            <li>
              <a href="#" className="block p-4 text-gray-600 hover:bg-gray-200">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block p-4 text-gray-600 hover:bg-gray-200">
                Reports
              </a>
            </li>
            <li>
              <a href="#" className="block p-4 text-gray-600 hover:bg-gray-200">
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-gray-700">Welcome to the Admin Panel</h1>
        <div className="mt-6 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mt-2 text-gray-600">
            This is your admin area. You can manage users, view reports, and change settings.
          </p>
        </div>

        {/* Example Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold">User Statistics</h3>
            <p className="text-gray-600">Manage and view user data.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold">Sales Reports</h3>
            <p className="text-gray-600">Analyze your sales performance.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold">System Settings</h3>
            <p className="text-gray-600">Configure your application settings.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminPage;
