import React, { useState, useEffect } from 'react';

function UserModule() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [communicationMethods, setCommunicationMethods] = useState([]);
  const [selectedCommunicationMethod, setSelectedCommunicationMethod] = useState(null);
  const [communicationDate, setCommunicationDate] = useState('');
  const [communicationNotes, setCommunicationNotes] = useState('');
  const [communicationLogs, setCommunicationLogs] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/companies');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    const fetchCommunicationMethods = async () => {
      try {
        const response = await fetch('/api/communication-methods');
        const data = await response.json();
        setCommunicationMethods(data);
      } catch (error) {
        console.error('Error fetching communication methods:', error);
      }
    };

    fetchCompanies();
    fetchCommunicationMethods();
  }, []);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleSelectCommunicationMethod = (method) => {
    setSelectedCommunicationMethod(method);
  };

  const handleLogCommunication = () => {
    if (!selectedCompany || !selectedCommunicationMethod || !communicationDate || !communicationNotes) {
      alert('Please fill out all fields before logging the communication.');
      return;
    }

    const communicationLog = {
      company: selectedCompany,
      method: selectedCommunicationMethod,
      date: communicationDate,
      notes: communicationNotes,
    };

    setCommunicationLogs([...communicationLogs, communicationLog]);
    console.log('Updated Logs:', communicationLogs);
    setSelectedCompany(null);
    setSelectedCommunicationMethod(null);
    setCommunicationDate('');
    setCommunicationNotes('');
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">User Module</h1>
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Company Selection</h2>
        <select
          value={selectedCompany}
          onChange={(e) => handleSelectCompany(e.target.value)}
          className="p-2 mb-2 border border-gray-400 rounded"
        >
          <option value="">Select a Company</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Communication Method Selection</h2>
        <select
          value={selectedCommunicationMethod}
          onChange={(e) => handleSelectCommunicationMethod(e.target.value)}
          className="p-2 mb-2 border border-gray-400 rounded"
        >
          <option value="">Select a Communication Method</option>
          {communicationMethods.map((method, index) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Log Communication</h2>
        <input
          type="date"
          value={communicationDate}
          onChange={(e) => setCommunicationDate(e.target.value)}
          placeholder="Communication Date"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={communicationNotes}
          onChange={(e) => setCommunicationNotes(e.target.value)}
          placeholder="Communication Notes"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <button
          onClick={handleLogCommunication}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Log Communication
        </button>
      </div>
    </div>
  );
}

export default UserModule;
