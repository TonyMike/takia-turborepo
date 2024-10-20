
import { getProfile } from '@/lib/server.action';
import React from 'react';

const DashboardPage: React.FC = async () => {
  const profile = await getProfile()
  return (
    <div className='flex justify-center items-center bg-black/5 w-full h-screen'>
           <h3 className='text-3xl capitalize'>{profile.fullName}</h3>
    </div>

  );
};

export default DashboardPage;
