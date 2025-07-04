import React from 'react';
import { Plus } from 'lucide-react';

const OrderButton = ({ title, onClick, primary = false }) => (
  <button
    onClick={onClick}
    className={`group w-full p-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
      primary
        ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-lg'
        : 'bg-white text-green-700 hover:bg-green-50 border-2 border-green-200 hover:border-green-300'
    }`}
  >
    <div className="flex items-center justify-between">
      <span>{title}</span>
      <Plus className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-90 ${primary ? 'text-white' : 'text-green-600'}`} />
    </div>
  </button>
);

export default OrderButton; 