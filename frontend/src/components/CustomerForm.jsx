import { useState } from "react";
import api from "../services/api";

function CustomerForm({ refresh }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await api.post("/customers", { name, email, phone, company });
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    refresh();
  };

  return (
    <form onSubmit={submitHandler}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
      <input placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
      <button>Add Customer</button>
    </form>
  );
}

export default CustomerForm;
