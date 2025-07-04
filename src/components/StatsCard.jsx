import React from 'react';

const StatsCard = ({ title, value, icon: Icon, color = 'green' }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className={`p-3 bg-${color}-100 rounded-xl`}>
        <Icon className={`w-8 h-8 text-${color}-600`} />
      </div>
    </div>
  </div>
);

export default StatsCard; 