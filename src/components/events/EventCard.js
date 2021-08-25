

function EventCard({ _id, name, image, date, location, attendees }) {

  return (
    <div className="event-cards-container">
      <a href={`/events/${_id}`}>
        <div className="event-card">
          <div className="event-card-left">
            <figure>
              <img className="event-card-image" src={image} alt={name}></img>
            </figure>
          </div>
          <div className="event-card-right">
            <h3>{new Date(date).toString().split('GMT')[0]}</h3>
            <h4>{name}</h4>
            {/* <p><span>{location}</span></p> */}
            <p><span>{attendees.length}</span> attendees</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default EventCard
