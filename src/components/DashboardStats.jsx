import React from 'react';
import { ShoppingCart, Users, FileText } from 'lucide-react';
import StatsCard from './StatsCard';

const DashboardStats = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <StatsCard title="Total Orders" value="1,234" icon={ShoppingCart} />
    <StatsCard title="Active Users" value="856" icon={Users} />
    <StatsCard title="Pending Orders" value="42" icon={FileText} />
  </div>
);

export default DashboardStats; 