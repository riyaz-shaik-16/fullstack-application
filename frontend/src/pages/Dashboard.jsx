const Dashboard = () => {
  return (
    <div className="p-6 flex justify-center items-center flex-col min-h-[80vh]">
      <div className="text-center max-w-2xl">
        <div className="mb-6">
          <i className="fa-solid fa-gauge-high text-6xl text-blue-600 mb-4"></i>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Admin Panel
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed">
          Manage projects, clients, contacts and subscribers from your centralized dashboard.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;