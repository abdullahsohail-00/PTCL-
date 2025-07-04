import React from 'react';

const FormSection = ({ title, children, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-green-100 rounded-lg mr-3">
        <Icon className="w-5 h-5 text-green-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  </div>
);

export default FormSection; 