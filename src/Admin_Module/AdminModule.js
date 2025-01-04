import React, { useState } from 'react';

function AdminModule() {
  const [companies, setCompanies] = useState([]);
  const [communicationMethods, setCommunicationMethods] = useState([]);
  
  const [companyName, setCompanyName] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [companyLinkedIn, setCompanyLinkedIn] = useState('');
  const [companyEmails, setCompanyEmails] = useState('');
  const [companyPhoneNumbers, setCompanyPhoneNumbers] = useState('');
  const [companyComments, setCompanyComments] = useState('');
  const [communicationPeriodicity, setCommunicationPeriodicity] = useState('');

  const [methodName, setMethodName] = useState('');
  const [methodDescription, setMethodDescription] = useState('');
  const [methodSequence, setMethodSequence] = useState('');
  const [methodMandatory, setMethodMandatory] = useState(false);

  const handleAddCompany = () => {
    if (!companyName || !companyLocation || !companyLinkedIn || !companyEmails || !companyPhoneNumbers || !communicationPeriodicity) {
      alert('Please fill in all the fields for the company.');
      return;
    }

    setCompanies([
      ...companies,
      {
        name: companyName,
        location: companyLocation,
        linkedin: companyLinkedIn,
        emails: companyEmails,
        phoneNumbers: companyPhoneNumbers,
        comments: companyComments,
        communicationPeriodicity,
      }
    ]);
    
    setCompanyName('');
    setCompanyLocation('');
    setCompanyLinkedIn('');
    setCompanyEmails('');
    setCompanyPhoneNumbers('');
    setCompanyComments('');
    setCommunicationPeriodicity('');
  };

  const handleAddCommunicationMethod = () => {
    if (!methodName || !methodDescription || !methodSequence) {
      alert('Please fill in all the fields for the communication method.');
      return;
    }

    setCommunicationMethods([
      ...communicationMethods,
      {
        name: methodName,
        description: methodDescription,
        sequence: methodSequence,
        mandatory: methodMandatory,
      }
    ]);

    setMethodName('');
    setMethodDescription('');
    setMethodSequence('');
    setMethodMandatory(false);
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Module</h1>

      {/* Company Management Section */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Company Management</h2>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={companyLocation}
          onChange={(e) => setCompanyLocation(e.target.value)}
          placeholder="Company Location"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={companyLinkedIn}
          onChange={(e) => setCompanyLinkedIn(e.target.value)}
          placeholder="Company LinkedIn"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={companyEmails}
          onChange={(e) => setCompanyEmails(e.target.value)}
          placeholder="Company Emails"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={companyPhoneNumbers}
          onChange={(e) => setCompanyPhoneNumbers(e.target.value)}
          placeholder="Company Phone Numbers"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={companyComments}
          onChange={(e) => setCompanyComments(e.target.value)}
          placeholder="Company Comments"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={communicationPeriodicity}
          onChange={(e) => setCommunicationPeriodicity(e.target.value)}
          placeholder="Communication Periodicity"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <button
          onClick={handleAddCompany}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Company
        </button>
      </div>

      {/* Communication Method Management Section */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Communication Method Management</h2>
        <input
          type="text"
          value={methodName}
          onChange={(e) => setMethodName(e.target.value)}
          placeholder="Method Name"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={methodDescription}
          onChange={(e) => setMethodDescription(e.target.value)}
          placeholder="Method Description"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          value={methodSequence}
          onChange={(e) => setMethodSequence(e.target.value)}
          placeholder="Method Sequence"
          className="p-2 mb-2 border border-gray-400 rounded"
        />
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            checked={methodMandatory}
            onChange={(e) => setMethodMandatory(e.target.checked)}
            className="mr-2"
          />
          Mandatory
        </label>
        <button
          onClick={handleAddCommunicationMethod}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Communication Method
        </button>
      </div>

      {/* Companies and Communication Methods List */}
      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Companies List</h2>
        <ul>
          {companies.map((company, index) => (
            <li key={index} className="p-2 mb-2 border border-gray-400 rounded">
              <h3 className="font-bold">{company.name}</h3>
              <p>{company.location}</p>
              <p>{company.linkedin}</p>
              <p>{company.emails}</p>
              <p>{company.phoneNumbers}</p>
              <p>{company.comments}</p>
              <p>{company.communicationPeriodicity}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col mb-4">
        <h2 className="text-xl font-bold mb-2">Communication Methods List</h2>
        <ul>
          {communicationMethods.map((method, index) => (
            <li key={index} className="p-2 mb-2 border border-gray-400 rounded">
              <h3 className="font-bold">{method.name}</h3>
              <p>{method.description}</p>
              <p>{method.sequence}</p>
              <p>{method.mandatory ? 'Mandatory' : 'Optional'}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminModule;
