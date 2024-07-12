// Other Imports
import { keyWordsConfig } from "./config";

const Keywords = () => {
  return (
    <div className="flex gap-x-14 h-[100vh] overflow-x-auto hideScrollbar scrollHorizontal">
      {keyWordsConfig?.map((keyword:any,idx:number) => {
        return (
          <div className="flex min-w-[80vw] items-center" key={idx}>
            <p className="font-bold text-[10rem]"> {keyword?.title} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Keywords;



