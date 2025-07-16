import CurrentSeries from "./BtnsComponents/CurrentSeries";
import JumboImg from "./HeaderComponents/JumboImg";
export default function Jumbotron() {
  return (
    <>
      <div className="jumboContainer">
        <JumboImg />
      </div>
      <CurrentSeries />
    </>
  );
}
