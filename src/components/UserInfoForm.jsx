import React from 'react';
import FormSection from './FormSection';
import InputField from './InputField';
import { User, MapPin, CreditCard, Settings } from 'lucide-react';

const UserInfoForm = ({ formData, handleInputChange, handleFormSubmit }) => (
  <div className="sticky top-24">
    <h2 className="text-2xl font-bold text-gray-900 mb-6">User Information</h2>
    <form onSubmit={handleFormSubmit}>
      {/* Personal Information */}
      <FormSection title="Personal Information" icon={User}>
        <InputField
          label="Full Name"
          value={formData.fullName}
          onChange={(value) => handleInputChange('fullName', value)}
          required
        />
        <InputField
          label="CNIC"
          value={formData.cnic}
          onChange={(value) => handleInputChange('cnic', value)}
          required
        />
        <InputField
          label="Mobile"
          value={formData.mobile}
          onChange={(value) => handleInputChange('mobile', value)}
          type="tel"
          required
        />
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="active"
                checked={formData.active}
                onChange={() => handleInputChange('active', true)}
                className="text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">Active</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="active"
                checked={!formData.active}
                onChange={() => handleInputChange('active', false)}
                className="text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-700">Inactive</span>
            </label>
          </div>
        </div>
      </FormSection>
      {/* Location Details */}
      <FormSection title="Location Details" icon={MapPin}>
        <InputField
          label="Admin Region"
          value={formData.adminRegion}
          onChange={(value) => handleInputChange('adminRegion', value)}
        />
        <InputField
          label="Retailer Address"
          value={formData.retailerAddress}
          onChange={(value) => handleInputChange('retailerAddress', value)}
        />
        <InputField
          label="Territories"
          value={formData.territories}
          onChange={(value) => handleInputChange('territories', value)}
        />
        <InputField
          label="Latitude"
          value={formData.latitude}
          onChange={(value) => handleInputChange('latitude', value)}
          type="number"
        />
        <InputField
          label="Longitude"
          value={formData.longitude}
          onChange={(value) => handleInputChange('longitude', value)}
          type="number"
        />
        <InputField
          label="Company Name"
          value={formData.companyName}
          onChange={(value) => handleInputChange('companyName', value)}
        />
      </FormSection>
      {/* Account Information */}
      <FormSection title="Account Information" icon={CreditCard}>
        <InputField
          label="PCRM Number"
          value={formData.pcrmNumber}
          onChange={(value) => handleInputChange('pcrmNumber', value)}
        />
        <InputField
          label="Sales Point Name"
          value={formData.salesPointName}
          onChange={(value) => handleInputChange('salesPointName', value)}
        />
        <InputField
          label="Bank Account Number"
          value={formData.bankAccountNumber}
          onChange={(value) => handleInputChange('bankAccountNumber', value)}
        />
        <InputField
          label="Third Party EPI"
          value={formData.thirdPartyEpi}
          onChange={(value) => handleInputChange('thirdPartyEpi', value)}
        />
      </FormSection>
      {/* Technical Details */}
      <FormSection title="Technical Details" icon={Settings}>
        <InputField
          label="Region"
          value={formData.region}
          onChange={(value) => handleInputChange('region', value)}
        />
        <InputField
          label="Exchange"
          value={formData.exchange}
          onChange={(value) => handleInputChange('exchange', value)}
        />
        <InputField
          label="Designation"
          value={formData.designation}
          onChange={(value) => handleInputChange('designation', value)}
        />
        <InputField
          label="Ufone Wallet"
          value={formData.ufoneWallet}
          onChange={(value) => handleInputChange('ufoneWallet', value)}
        />
        <InputField
          label="OSID"
          value={formData.osid}
          onChange={(value) => handleInputChange('osid', value)}
        />
      </FormSection>
      {/* Save Button */}
      <div className="mt-6">
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          💾 Save Information
        </button>
      </div>
    </form>
  </div>
);

export default UserInfoForm; 