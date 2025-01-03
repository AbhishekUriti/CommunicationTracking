import React, { useState, useEffect } from "react";
import { Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar as CalendarIcon, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, ArrowRight } from "lucide-react";

function CalendarView() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [communications, setCommunications] = useState([]);

  // Example mock communications data
  useEffect(() => {
    setCommunications([
      { id: 1, title: 'Meeting with Client', description: 'Discuss project milestones and deliverables.' },
      { id: 2, title: 'Follow-up Email', description: 'Sent follow-up email to the client for document submission.' },
      { id: 3, title: 'Internal Team Meeting', description: 'Weekly sync-up with the team.' },
      { id: 4, title: 'Product Launch', description: 'Announce the new product features.' },
    ]);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Calendar View</h1>

      {/* Calendar Section */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Calendar</h2>
        <div className="grid grid-cols-7 gap-2">
          <div className="bg-gray-200 p-2 rounded text-center">Sun</div>
          <div className="bg-gray-200 p-2 rounded text-center">Mon</div>
          <div className="bg-gray-200 p-2 rounded text-center">Tue</div>
          <div className="bg-gray-200 p-2 rounded text-center">Wed</div>
          <div className="bg-gray-200 p-2 rounded text-center">Thu</div>
          <div className="bg-gray-200 p-2 rounded text-center">Fri</div>
          <div className="bg-gray-200 p-2 rounded text-center">Sat</div>
          
          {/* Render Days */}
          {Array(30).fill(0).map((_, index) => (
            <div
              key={index}
              className={`p-2 rounded cursor-pointer text-center ${selectedDate.getDate() === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleDateChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1))}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Communications Section */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Communications</h2>
        <ul>
          {communications.map((communication) => (
            <li key={communication.id} className="p-2 border border-gray-400 rounded mb-2">
              <h3 className="text-lg font-bold">{communication.title}</h3>
              <p className="text-gray-600">{communication.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Example Icons */}
      <div className="flex space-x-4 mt-4">
        <Heart size={24} />
        <Shield size={24} />
        <Clock size={24} />
        <Users size={24} />
        <Play size={24} />
        <Home size={24} />
        <Search size={24} />
        <Menu size={24} />
        <User size={24} />
        <Settings size={24} />
        <Mail size={24} />
        <Bell size={24} />
        <CalendarIcon size={24} />
        <Star size={24} />
        <Upload size={24} />
        <Download size={24} />
        <Trash size={24} />
        <Edit size={24} />
        <Plus size={24} />
        <Minus size={24} />
        <Check size={24} />
        <X size={24} />
        <ArrowRight size={24} />
      </div>
    </div>
  );
}

export default CalendarView;
