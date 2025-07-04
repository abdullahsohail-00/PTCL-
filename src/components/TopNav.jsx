import React from 'react';
import { User, Search, Bell, ChevronDown, Menu } from 'lucide-react';
import { Settings, LogOut } from 'lucide-react';

const TopNav = ({ navigationItems, activeTab, setActiveTab, showMobileMenu, setShowMobileMenu }) => (
  <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="https://tashheer.com/wp-content/uploads/2024/01/ptcl.png" 
              alt="PTCL Logo" 
              className="h-8 w-auto mr-3"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3" style={{display: 'none'}}>
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">PTCL</span>
              <span className="text-xs text-gray-500 -mt-1">Order Management System</span>
            </div>
          </div>
        </div>
        {/* Navigation Items - Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          {navigationItems.map((item) => (
            <div key={item.id} className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105"
                onClick={() => !item.submenu && setActiveTab(item.id)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
                {item.submenu && <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />}
              </button>
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-3">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveTab(subItem.id)}
                        className="flex items-center w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-2"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 transition-opacity duration-200 hover:opacity-100"></div>
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 transition-colors duration-200" />
            <input
              type="text"
              placeholder="Search orders, users..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64 transition-all duration-200 hover:border-green-300 focus:w-72"
            />
          </div>
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 transform hover:scale-110">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center animate-pulse">3</span>
          </button>
          {/* Profile */}
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-2 shadow-md">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden lg:block">PCRM/Admin</span>
              <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
            </button>
            <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="py-3">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">admin@ptcl.com.pk</p>
                </div>
                <button className="flex items-center w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200">
                  <User className="w-4 h-4 mr-3" />
                  My Profile
                </button>
                <button className="flex items-center w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200">
                  <Settings className="w-4 h-4 mr-3" />
                  Account Settings
                </button>
                <hr className="my-2" />
                <button className="flex items-center w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-all duration-200">
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 transform hover:scale-110"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default TopNav; 