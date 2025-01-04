import React, { useState } from 'react';

const CompanyForm = ({ company = {}, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: company.name || '',
    location: company.location || '',
    linkedin: company.linkedin || '',
    emails: company.emails || '',
    phones: company.phones || '',
    comments: company.comments || '',
    periodicity: company.periodicity || '2 weeks',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...company, ...formData });
  };

  return (
          <form className="company-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name:</label><br/>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Location:</label><br/>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>LinkedIn Profile:</label><br/>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Emails:</label><br/>
          <input
            type="text"
            name="emails"
            value={formData.emails}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Phone Number:</label><br/>
          <input
            type="text"
            name="phones"
            value={formData.phones}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Comments:</label><br/>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <div className="form-field">
          <label>Communication Periodicity:</label><br/>
          <input
            type="text"
            name="periodicity"
            value={formData.periodicity}
            onChange={handleChange}
          />
        </div>
        <div className="form-actions"><br/>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>

  );
};

export default CompanyForm;
