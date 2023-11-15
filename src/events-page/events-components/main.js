import React from "react";
import EventCard from "./eventcard";
import AlternateTimeline from "./timeline";

export default function Main() {
    return (
      <div className="event-display">
        <section>
            <h1 className="display-title">Events</h1>
            <p>Embark on your journey to data analytics with us</p>
        </section>
        <div className="d-flex justify-content-start">
          <AlternateTimeline />
        </div>
      </div>
    );
  }