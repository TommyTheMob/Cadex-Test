import React from 'react';
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {

  return (
      <header className={'lg:w-3/5 w-full sticky top-0'}>
        <nav className={'bg-white px-10 py-8 border-b flex justify-between items-center'}>
          <span className={'text-xl font-bold'}>Some Company</span>
          <Button asChild className={'w-24 md:w-40 h-8 text-base tracking-wider'}>
            <Link to='/contact'>Contact us</Link>
          </Button>
        </nav>
      </header>
  );
};

export default Navbar;
