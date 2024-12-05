import React, { useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

function BookingForm() {
  const { Title } = useParams();
  const [alert, setalert] = useState(false);

  const [Name, setName] = useState("");
  const [Mail, setMail] = useState("");
  const [Contact, setContact] = useState("");
  const [Count, setCount] = useState(1);

  const bookMovie = () => {
    setalert(true);
    console.log(Name, Mail, Contact, Count);
    document.getElementsByClassName("bookingform")[0].reset();
  };
  return (
    <>
      {alert && (
        <div class="alert alert-success" role="alert">
          <div className="text-center my-5">
            <h3>
              Booked {Count} ticket/s for {Title} 
              <br/>
              Ticket Id: {Math.floor(Math.random()*1000)}
            </h3>
          </div>
          <div className="text-center my-2">
            <h5>Name: {Name}</h5>
          </div>
          <div className="text-center my-2">
            <h5>Registered mail: {Mail}</h5>
          </div>
          <div className="text-center my-2">
            <h5>Registered contact: {Contact}</h5>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Exit
          </button>
        </div>
      )}
      {!alert && Title && Title.length > 0 && (
        <div>
          <div className="text-center my-5">
            <h2>Booking for- {Title}</h2>
          </div>
          <form className="px-2 py-2 bookingform">
            <div className="mb-3" style={{ width: "300px" }}>
              <label className="form-label">Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Full name"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-3" style={{ width: "300px" }}>
              <label className="form-label">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="abc@xyz.com"
                required
                value={Mail}
                onChange={(e) => {
                  setMail(e.target.value);
                }}
              />
            </div>
            <div className="mb-3" style={{ width: "300px" }}>
              <label className="form-label">Contact</label>
              <input
                className="form-control"
                type="number"
                placeholder="+91"
                required
                value={Contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
            </div>
            <div className="mb-3" style={{ width: "300px" }}>
              <label className="form-label">Ticket Count</label>
              <select
                className="mx-3"
                value={Count}
                onChange={(e) => {
                  setCount(e.target.value);
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            </div>
            <div className="mb-3">
              <button
                className="btn btn-primary my-2"
                style={{ width: "100px" }}
                type="submit"
                onClick={bookMovie}
              >
                Book
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default BookingForm;
