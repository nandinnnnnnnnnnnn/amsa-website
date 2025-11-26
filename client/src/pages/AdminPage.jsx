// src/pages/AdminPage.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const AdminPage = () => {
  const { user, authFetch } = useAuth();
  const nav = useNavigate();

  const [blogs, setBlogs] = React.useState([]);
  const [announcements, setAnnouncements] = React.useState([]);
  const [blogForm, setBlogForm] = React.useState({ title: "", content: "", coverImageUrl: "" });
  const [announcementForm, setAnnouncementForm] = React.useState({ title: "", body: "" });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const extractError = (err) => {
    if (!err) return "Something went wrong";
    if (err.message) return err.message;
    if (err.errors?.length) return err.errors.map((e) => e.msg || e.message).join(", ");
    return typeof err === "string" ? err : "Something went wrong";
  };

  React.useEffect(() => {
    if (!user) {
      nav("/login");
      return;
    }
    if (user.role !== "admin") {
      nav("/unauthorized");
      return;
    }
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, nav]);

  const loadData = async () => {
    try {
      setError("");
      const [blogsRes, announcementsRes] = await Promise.all([
        authFetch("/api/blogs"),
        authFetch("/api/announcements"),
      ]);
      setBlogs(blogsRes.blogs || []);
      setAnnouncements(announcementsRes.announcements || []);
    } catch (e) {
      setError(extractError(e) || "Failed to load data");
    }
  };

  const handleCreateBlog = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await authFetch("/api/blogs", {
        method: "POST",
        body: JSON.stringify(blogForm),
      });
      setBlogForm({ title: "", content: "", coverImageUrl: "" });
      await loadData();
    } catch (e) {
      setError(extractError(e) || "Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    try {
      await authFetch(`/api/blogs/${id}`, { method: "DELETE" });
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    } catch (e) {
      setError(extractError(e) || "Failed to delete blog");
    }
  };

  const handleUpdateBlog = async (blog) => {
    const title = prompt("New title", blog.title) || blog.title;
    const content = prompt("New content", blog.content) || blog.content;
    const coverImageUrl = prompt("Cover image URL", blog.coverImageUrl || "") || blog.coverImageUrl;
    try {
      await authFetch(`/api/blogs/${blog.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, content, coverImageUrl }),
      });
      await loadData();
    } catch (e) {
      setError(extractError(e) || "Failed to update blog");
    }
  };

  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await authFetch("/api/announcements", {
        method: "POST",
        body: JSON.stringify(announcementForm),
      });
      setAnnouncementForm({ title: "", body: "" });
      await loadData();
    } catch (e) {
      setError(extractError(e) || "Failed to create announcement");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteAnnouncement = async (id) => {
    try {
      await authFetch(`/api/announcements/${id}`, { method: "DELETE" });
      setAnnouncements((prev) => prev.filter((a) => a.id !== id));
    } catch (e) {
      setError(extractError(e) || "Failed to delete announcement");
    }
  };

  const handleUpdateAnnouncement = async (a) => {
    const title = prompt("New title", a.title) || a.title;
    const body = prompt("New body", a.body) || a.body;
    try {
      await authFetch(`/api/announcements/${a.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, body }),
      });
      await loadData();
    } catch (e) {
      setError(extractError(e) || "Failed to update announcement");
    }
  };

  if (!user || user.role !== "admin") return null;

  return (
    <div className="max-w-6xl mx-auto p-10 bg-white shadow-lg rounded-lg my-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#001A78]">Admin Dashboard</h1>
          <p className="text-gray-700">
            Welcome, {user.firstName} {user.lastName}
          </p>
        </div>
        <Link to="/" className="text-[#001A78] underline">
          Back to site
        </Link>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-2xl font-semibold text-[#001A78] mb-3">Blogs</h2>
          <form onSubmit={handleCreateBlog} className="space-y-3 mb-4">
            <input
              className="input w-full"
              placeholder="Title"
              value={blogForm.title}
              onChange={(e) => setBlogForm((f) => ({ ...f, title: e.target.value }))}
              required
            />
            <input
              className="input w-full"
              placeholder="Cover Image URL (optional)"
              value={blogForm.coverImageUrl}
              onChange={(e) => setBlogForm((f) => ({ ...f, coverImageUrl: e.target.value }))}
            />
            <textarea
              className="input w-full h-24"
              placeholder="Content"
              value={blogForm.content}
              onChange={(e) => setBlogForm((f) => ({ ...f, content: e.target.value }))}
              required
            />
            <button
              type="submit"
              className="bg-[#001A78] text-white px-4 py-2 rounded-md hover:bg-[#073D97] transition"
              disabled={loading}
            >
              {loading ? "Saving..." : "Create Blog"}
            </button>
          </form>

          <div className="space-y-3 max-h-96 overflow-auto pr-2">
            {blogs.map((b) => (
              <div key={b.id} className="border rounded-md p-3 flex justify-between items-start gap-3">
                <div>
                  <p className="font-semibold text-[#001A78]">{b.title}</p>
                  <p className="text-sm text-gray-600 truncate">{b.slug}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateBlog(b)}
                    className="text-sm border border-[#001A78] text-[#001A78] px-3 py-1 rounded hover:bg-[#001A78] hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(b.id)}
                    className="text-sm border border-red-500 text-red-600 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {blogs.length === 0 && <p className="text-sm text-gray-600">No blogs yet.</p>}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#001A78] mb-3">Announcements</h2>
          <form onSubmit={handleCreateAnnouncement} className="space-y-3 mb-4">
            <input
              className="input w-full"
              placeholder="Title"
              value={announcementForm.title}
              onChange={(e) => setAnnouncementForm((f) => ({ ...f, title: e.target.value }))}
              required
            />
            <textarea
              className="input w-full h-24"
              placeholder="Body"
              value={announcementForm.body}
              onChange={(e) => setAnnouncementForm((f) => ({ ...f, body: e.target.value }))}
              required
            />
            <button
              type="submit"
              className="bg-[#001A78] text-white px-4 py-2 rounded-md hover:bg-[#073D97] transition"
              disabled={loading}
            >
              {loading ? "Saving..." : "Create Announcement"}
            </button>
          </form>

          <div className="space-y-3 max-h-96 overflow-auto pr-2">
            {announcements.map((a) => (
              <div key={a.id} className="border rounded-md p-3 flex justify-between items-start gap-3">
                <div>
                  <p className="font-semibold text-[#001A78]">{a.title}</p>
                  <p className="text-sm text-gray-600">{a.body}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUpdateAnnouncement(a)}
                    className="text-sm border border-[#001A78] text-[#001A78] px-3 py-1 rounded hover:bg-[#001A78] hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteAnnouncement(a.id)}
                    className="text-sm border border-red-500 text-red-600 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            {announcements.length === 0 && <p className="text-sm text-gray-600">No announcements yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminPage;
