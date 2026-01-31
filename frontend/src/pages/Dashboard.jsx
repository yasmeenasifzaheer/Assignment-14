import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import CustomerForm from "../components/CustomerForm";

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  const loadCustomers = async () => {
    try {
      const res = await api.get("/customers");
      setCustomers(res.data);
    } catch (error) {
      console.error("Fetch error:", error.response?.data);
    }
  };

  const deleteCustomer = async (id) => {
    try {
      await api.delete(`/customers/${id}`);
      setCustomers(customers.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Delete error:", error.response?.data);
      alert("Delete failed. Check token or backend.");
    }
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  return (
    <>
      <Navbar />
      <CustomerForm refresh={loadCustomers} />

      <ul>
        {customers.map((c) => (
          <li key={c._id}>
            {c.name} ({c.company})
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => deleteCustomer(c._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
