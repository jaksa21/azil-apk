import React, { useState } from "react";
import "./NotificationStylees.css"

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [important, setImportant] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImportantChange = (event) => {
    setImportant(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newNotification = {
      title: title,
      text: text,
      important: important,
      time: new Date(),
    };

    setNotifications([newNotification, ...notifications]);
    setTitle("");
    setText("");
    setImportant(false);
  };

  const handleDelete = (time) => {
    const filteredNotifications = notifications.filter(
      (notification) => notification.time !== time
    );

    setNotifications(filteredNotifications);
  };

  const sortedNotifications = notifications.slice().sort((a, b) => b.time - a.time);


  const handleToggleAdmin = () => {
    setIsAdmin((prevMode) => !prevMode)
  }

  return (
    <>
    <label><input type="checkbox" checked={isAdmin} onChange={handleToggleAdmin}/> Are you admin? </label>
    {isAdmin ? (<div className="wrapper">
      <h1>Notifications</h1>
      
      <div className="show-notification-div">
      <ul className="notification-list">
        {sortedNotifications.map((notification) => (
          <li className="single-notification" key={notification.time}>
            <h2 style={notification.important ? { color:"#87CEEB"} : null}>
              {notification.title}
            </h2>
            <p>{notification.text}</p>
            <p>
              {notification.time.toLocaleDateString()}{" "}
              {notification.time.toLocaleTimeString()}
            </p>
            
              <button className="delete-notification-button" onClick={() => handleDelete(notification.time)}>
                Delete
              </button>
            
          </li>
        ))}
      </ul>
      </div>
      


      <div className="new-notification-div">
      <h2 className="new-notification">New notificationn</h2>
        <form className="notification-form" onSubmit={handleSubmit}>
        <label className="notification-label">
          Title:
          <input className="notification-input" type="text" value={title} onChange={handleTitleChange} required maxLength={20} />
        </label>
        <br />
        <label className="notification-label">
          Text:
          <textarea className="notification-textarea" value={text} onChange={handleTextChange} required minLength={10} maxLength={200} />
        </label>
        <br />
        
          <label className="notification-label">
            Important:
            <input className="notification-input" type="checkbox" checked={important} onChange={handleImportantChange} />
          </label>
       
        <br />
        <button className="notification-button" type="submit">Add notification</button>
      </form>
      </div>
      </div>)
      
      :
      
      (<div className="show-notification-div">
      <ul className="notification-list">
        {sortedNotifications.map((notification) => (
          <li className="single-notification" key={notification.time}>
            <h2 style={notification.important ? { color:"#87CEEB"} : null}>
              {notification.title}
            </h2>
            <p>{notification.text}</p>
            <p>
              {notification.time.toLocaleDateString()}{" "}
              {notification.time.toLocaleTimeString()}
            </p>
            
              
            
          </li>
        ))}
      </ul>
      </div>)}
    
      
 
    
      </>
  );
};

export default Notification;
