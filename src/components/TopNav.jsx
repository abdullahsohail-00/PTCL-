import React from 'react';
import { User, Search, Bell, ChevronDown, Menu } from 'lucide-react';
import { Settings, LogOut } from 'lucide-react';

const TopNav = ({ navigationItems, activeTab, setActiveTab, showMobileMenu, setShowMobileMenu }) => (
  <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo - Left Side */}
        <div className="flex items-center flex-shrink-0">
          <div className="flex items-center">
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
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">Order Management System</span>
            </div>
          </div>
        </div>

        {/* Navigation Items - Center (Desktop Only) */}
        <div className="hidden lg:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <div key={item.id} className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                onClick={() => !item.submenu && setActiveTab(item.id)}
              >
                <item.icon className="w-4 h-4 mr-2" />
                <span className="whitespace-nowrap">{item.label}</span>
                {item.submenu && <ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />}
              </button>
              {item.submenu && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="py-3">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => setActiveTab(subItem.id)}
                        className="flex items-center w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Side - Search, Notifications, Profile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          
          {/* Search - Hidden on mobile */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search orders..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-48 lg:w-64 transition-all duration-200 hover:border-green-300"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center animate-pulse">3</span>
          </button>

          {/* Profile */}
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-green-600 hover:bg-green-50 px-2 sm:px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-2 shadow-md">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden xl:block">PCRM/Admin</span>
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
            className="lg:hidden p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {showMobileMenu && (
        <div className="lg:hidden border-t border-gray-200 py-4">
          <div className="space-y-1">
            
            {/* Mobile Search */}
            <div className="px-4 pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Mobile Navigation Items */}
            {navigationItems.map((item) => (
              <div key={item.id}>
                <button
                  className="flex items-center w-full text-left px-4 py-3 text-base font-medium text-gray-700 hover:bg-green-50 hover:text-green-600"
                  onClick={() => !item.submenu && setActiveTab(item.id)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-auto" />}
                </button>
                {item.submenu && (
                  <div className="bg-gray-50">
                    {item.submenu.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={() => {
                          setActiveTab(subItem.id);
                          setShowMobileMenu(false);
                        }}
                        className="block w-full text-left px-8 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
);

export default TopNav;