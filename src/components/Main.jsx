import ComicsRows from "./Main Components/ComicsRows";
import LoadMoreBtn from "./Btns Components/LoadMoreBtn";

export default function Main({ comics }) {
  return (
    <main>
      <ComicsRows comics={comics} />
      <LoadMoreBtn />
    </main>
  );
}
