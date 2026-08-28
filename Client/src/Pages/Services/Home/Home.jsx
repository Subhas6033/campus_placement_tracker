import { Target } from "lucide-react";
import { Button } from "../../../Components/index";

const Home = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <Button onClick={() => window.location.reload()}>
        <span className="flex justify-center gap-5">
          <span>Clcik here to reload the page</span>
          <span>
            <Target />
          </span>
        </span>
      </Button>
    </div>
  );
};

export default Home;
