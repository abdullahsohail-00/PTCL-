import React from 'react';
import { ShoppingCart } from 'lucide-react';
import OrderButton from './OrderButton';

const QuickActions = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
    <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center">
      <ShoppingCart className="w-5 h-5 mr-2 text-green-600" />
      Quick Actions
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <OrderButton title="New Customer Order" primary />
      <OrderButton title="New Corporate Customer Order" />
      <OrderButton title="Corporate Customer Orders" />
      <OrderButton title="New FF Customer Order" />
      <OrderButton title="Existing Customer Order" />
      <OrderButton title="Order Details" />
      <OrderButton title="TPN/RD IDs" />
      <OrderButton title="Create User" />
      <OrderButton title="User Status" />
      <OrderButton title="Insert Vendor Code" />
      <OrderButton title="DDS" />
      <OrderButton title="SMB DDS" />
    </div>
  </div>
);

export default QuickActions; 