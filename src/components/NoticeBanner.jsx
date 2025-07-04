import React from 'react';
import { AlertCircle } from 'lucide-react';

const NoticeBanner = () => (
  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mx-4 sm:mx-6 lg:mx-8 mt-4 rounded-r-lg">
    <div className="flex items-center">
      <AlertCircle className="w-5 h-5 text-blue-400 mr-2" />
      <p className="text-sm text-blue-800">
        <strong>Note:</strong> Dear User, You are requested to verify your info displayed on this page & send correct info to HQs Sales team for update, if incorrect/missing. In case of any wrong info, user will not be eligible for sale incentives. Thank you.
      </p>
    </div>
  </div>
);

export default NoticeBanner; 