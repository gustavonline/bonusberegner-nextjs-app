import { CheckCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";

const ResponsibleGambling = () => {
  return (
      <div className="flex justify-center items-center space-x-6 text-stoneblack mt-4">
        <div className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white border text-white rounded-full">
            <span className="text-sm text-black font-medium">18+</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircleIcon className="w-6 h-6 text-bonusgreen" />
          <span className="text-sm font-medium">Responsible gambling</span>
        </div>
        <div className="flex items-center space-x-2">
          <LockClosedIcon className="w-6 h-6 text-bonusred" />
          <span className="text-sm font-medium">Secure Betting</span>
        </div>
      </div>
  );
};

export default ResponsibleGambling;
