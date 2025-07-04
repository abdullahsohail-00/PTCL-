import React, { useState } from 'react';
import TopNav from './TopNav';
import NoticeBanner from './NoticeBanner';
import UserInfoForm from './UserInfoForm';
import DashboardStats from './DashboardStats';
import QuickActions from './QuickActions';
import RecentOrdersTable from './RecentOrdersTable';
import Footer from './Footer';
import { Home, ShoppingCart, Settings, Shield } from 'lucide-react';

const PTCLOrderManagement = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    cnic: '',
    mobile: '',
    active: true,
    adminRegion: '',
    retailerAddress: '',
    territories: '',
    latitude: '',
    longitude: '',
    companyName: '',
    pcrmNumber: '',
    salesPointName: '',
    bankAccountNumber: '',
    thirdPartyEpi: '',
    region: '',
    exchange: '',
    designation: '',
    ufoneWallet: '',
    osid: ''
  });

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { 
      id: 'orders', 
      label: 'Orders', 
      icon: ShoppingCart,
      submenu: [
        { id: 'new-customer', label: 'New Customer Order' },
        { id: 'new-corporate', label: 'New Corporate Customer Order' },
        { id: 'existing-customer', label: 'Existing Customer Order' },
        { id: 'corporate-orders', label: 'Corporate Customer Orders' },
        { id: 'new-ff', label: 'New FF Customer Order' }
      ]
    },
    { 
      id: 'management', 
      label: 'Management', 
      icon: Settings,
      submenu: [
        { id: 'order-details', label: 'Order Details' },
        { id: 'tpn-rd-ids', label: 'TPN/RD IDs' },
        { id: 'user-management', label: 'User Management' },
        { id: 'vendor-management', label: 'Vendor Management' },
        { id: 'dds', label: 'DDS' },
        { id: 'smb-dds', label: 'SMB DDS' }
      ]
    },
    { 
      id: 'administration', 
      label: 'Administration', 
      icon: Shield,
      submenu: [
        { id: 'create-user', label: 'Create User' },
        { id: 'user-status', label: 'User Status' },
        { id: 'vendor-code', label: 'Insert Vendor Code' }
      ]
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Information saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNav
        navigationItems={navigationItems}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <NoticeBanner />
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <UserInfoForm
              formData={formData}
              handleInputChange={handleInputChange}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          <div className="lg:col-span-2">
            <DashboardStats />
            <QuickActions />
            <RecentOrdersTable />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PTCLOrderManagement;