import React from 'react';
import { FileText, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const RecentOrdersTable = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
    <div className="p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <FileText className="w-5 h-5 mr-2 text-green-600" />
        Recent Orders
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-4 px-6 font-medium text-gray-700">Order ID</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Customer</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Type</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-medium text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'ORD-001', customer: 'John Doe', type: 'New Customer', status: 'pending', date: '2025-07-04' },
              { id: 'ORD-002', customer: 'ABC Corp', type: 'Corporate', status: 'completed', date: '2025-07-03' },
              { id: 'ORD-003', customer: 'Jane Smith', type: 'Existing Customer', status: 'processing', date: '2025-07-02' }
            ].map((order) => (
              <tr key={order.id} className="border-b border-gray-100 hover:bg-green-50 transition-colors duration-200 cursor-pointer">
                <td className="py-4 px-6 font-medium text-gray-900">{order.id}</td>
                <td className="py-4 px-6 text-gray-700">{order.customer}</td>
                <td className="py-4 px-6 text-gray-700">{order.type}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === 'completed' ? 'bg-green-100 text-green-800' :
                    order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {order.status === 'completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                    {order.status === 'processing' && <AlertCircle className="w-3 h-3 mr-1" />}
                    {order.status === 'pending' && <XCircle className="w-3 h-3 mr-1" />}
                    {order.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-700">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default RecentOrdersTable; 