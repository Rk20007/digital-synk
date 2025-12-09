"use client";

import { useEffect, useState } from "react";

export default function EmailsPage() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  // ----------------------------
  // 🔹 Fetch Data From API (GET)
  // ----------------------------
  const fetchEmails = async () => {
    try {
      const res = await fetch("/api/send-email");
      const data = await res.json();

      if (data.success) {
        setEmails(data.data);
      }
    } catch (error) {
      console.error("Error fetching emails:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEmails();
  }, []);

  if (loading) return <p className="text-center p-5 text-lg">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-5">Saved Form Submissions</h1>

      {emails.length === 0 ? (
        <p>No data found.</p>
      ) : (
        <div className="space-y-4">
          {emails.map((item) => (
            <div
              key={item._id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Phone:</strong> {item.phone}</p>
              <p><strong>Type:</strong> {item.type}</p>
              {item.service && <p><strong>Service:</strong> {item.service}</p>}
              {item.preferredDate && (
                <p><strong>Preferred Date:</strong> {item.preferredDate}</p>
              )}
              <p><strong>Message:</strong> {item.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                <strong>Created:</strong>{" "}
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
