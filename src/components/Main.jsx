import ComicsRows from "./MainComponents/ComicsRows";
import LoadMoreBtn from "./BtnsComponents/LoadMoreBtn";

export default function Main({ comics }) {
  return (
    <main>
      <ComicsRows comics={comics} />
      <LoadMoreBtn />
    </main>
  );
}
