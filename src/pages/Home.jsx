import ManAvatarCard from '../components/ManAvatarCard';
import MillAvatar from '../components/MillAvatar';
import { SmallCard } from '../components/SmallCard';

const Home = () => {
  return (
    <div className="overflow-x-auto h-full w-full">
      <div className="text-white px-3 py-4 flex flex-wrap gap-4 justify-center">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
      <div className=" px-3">
        <div className="mb-4">
          <p className="text-white">Today Bazzer</p>
          <ManAvatarCard />
        </div>
        <div className="">
          <p className="text-white">Towmorro Bazzer</p>
          <ManAvatarCard />
        </div>
      </div>
      <div className=" p-4 text-gray-200">
        <div className="bg-gray-400 rounded-xl mb-4 pl-3 pb-1">
          <p className="font-bold">Dinner Mill Running</p>
          <MillAvatar />
        </div>
        <div className="bg-gray-400 rounded-xl pl-3 pb-1">
          <p className="font-bold">Lanch Mill Running</p>
          <MillAvatar />
        </div>
      </div>
    </div>
  );
};

export default Home;
