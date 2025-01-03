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
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Location:
        <input type="text" name="location" value={formData.location} onChange={handleChange} required />
      </label>
      <label>
        LinkedIn Profile:
        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleChange} />
      </label>
      <label>
        Emails (comma-separated):
        <input type="text" name="emails" value={formData.emails} onChange={handleChange} />
      </label>
      <label>
        Phone Numbers (comma-separated):
        <input type="text" name="phones" value={formData.phones} onChange={handleChange} />
      </label>
      <label>
        Comments:
        <textarea name="comments" value={formData.comments} onChange={handleChange} />
      </label>
      <label>
        Communication Periodicity:
        <input type="text" name="periodicity" value={formData.periodicity} onChange={handleChange} />
      </label>
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default CompanyForm;
