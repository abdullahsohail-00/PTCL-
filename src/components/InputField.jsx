import React from 'react';

const InputField = ({ label, value, onChange, type = 'text', required = false }) => (
  <div className="space-y-2">
    <label className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 hover:border-green-300 bg-white"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

export default InputField; 