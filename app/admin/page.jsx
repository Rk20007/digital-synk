"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const fetchEmails = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/send-email", { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to fetch data");
      
      const data = await res.json();

      if (data.success) {
        // Sort by newest first
        const sortedData = Array.isArray(data.data) 
          ? data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) 
          : [];
        setEmails(sortedData);
      } else {
        setError("Failed to load data.");
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isAuth = sessionStorage.getItem("isAdminLoggedIn");
    if (isAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchEmails();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple password check
    if (password === "robin@77408") {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAdminLoggedIn", "true");
    } else {
      alert("Incorrect Password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full p-3 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex gap-3">
            <button 
              onClick={fetchEmails}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
            >
              Refresh
            </button>
            <button 
              onClick={() => {
                setIsAuthenticated(false);
                sessionStorage.removeItem("isAdminLoggedIn");
              }}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors shadow-sm"
            >
              Logout
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
            {error}
          </div>
        ) : emails.length === 0 ? (
          <div className="bg-white p-10 rounded-lg shadow text-center text-gray-500">
            No submissions found.
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message / Details</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {emails.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(item.createdAt).toLocaleDateString()}
                        <div className="text-xs text-gray-400">{new Date(item.createdAt).toLocaleTimeString()}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div>{item.email}</div>
                        <div className="text-xs text-gray-400">{item.phone}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {item.type || 'Contact'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {item.service && <div className="font-semibold text-xs text-gray-700 mb-1">Service: {item.service}</div>}
                        {item.preferredDate && <div className="text-xs mb-1">Pref. Date: {item.preferredDate}</div>}
                        <div className="max-w-xs truncate" title={item.message}>{item.message}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}