import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import {useClerk, UserButton , useUser} from '@clerk/clerk-react'

const Navbar = () => {
  const navigate = useNavigate();
  const {user} = useUser()
  const { openSignIn } = useClerk();


  return (

    <div className="w-full fixed top-0 left-0 z-50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <img
          src={assets.logo}
          alt="logo"
          className="w-32 sm:w-44 cursor-pointer"
          onClick={() => navigate('/')}
        />

        {
          user ? <UserButton /> : (
            <button onClick={() => openSignIn()} className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-[#0f172a] text-white px-10 py-2.5">
          Get Started <ArrowRight className="w-4 h-4" />
          </button> 
          )
        }

      </div>
    </div>
  );
};

export default Navbar;
