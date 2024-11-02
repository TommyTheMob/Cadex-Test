import React from 'react';
import Card from "@/components/card/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import ReactPlayer from 'react-player';
import {Link} from "react-router-dom";

const HomePage: React.FC = () => {

  return (
      <main className={'lg:w-3/5 w-full'}>
        <section className={'flex flex-col justify-center md:flex-row md:justify-between p-7 pb-20 bg-zinc-100'}>
          <div className={'md:w-1/2 w-full'}>
            <h1 className={'text-5xl font-bold pb-5'}>Most important title on the page</h1>
            <span className={'font-medium'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante</span>
          </div>
          <div className={'w-full mt-5 md:m-0 md:w-1/2 md:ml-8'}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              width="100%"
              height="235px"
            />
          </div>
        </section>
        <section>
          <h2 className={'text-5xl font-bold p-8 text-center'}>Also very important title</h2>
          <div className={'grid grid-cols-1 gap-y-14 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-y-28 p-8'}>
            {[...Array(6)].map(i => <Card key={i} />)}
          </div>
          <div className={'text-center p-8'}>
            <Button asChild className={'w-40 h-8 text-base tracking-wider'}>
              <Link to='/contact'>Contact us</Link>
            </Button>
          </div>
        </section>
        <section className={'text-center bg-zinc-100 p-14 border-t'}>
          <h3 className={'text-5xl font-bold mb-10'}>Less important title</h3>
          <Button className={'w-40 h-8 text-base tracking-wider'}>
            <Link to='/contact'>Contact us</Link>
          </Button>
        </section>
      </main>
  );
};

export default HomePage;
