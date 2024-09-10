import ArrowLeftIcon from "../assets/arrowLeft.svg";
import ArrowRightIcon from "../assets/arrowRight.svg";
import ListBox from "./ListBox";

const Button = ({ place, onClick }) => {
  const IconComponent = place === "left" ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <img
      src={IconComponent}
      className="w-7 h-7 cursor-pointer bg-gray-700 flex justify-center items-center p-1.5 rounded-full shadow-sm hover:border border-primary transition"
      onClick={onClick}
    />
  );
};

const index = ({ currentPage, totalPage, pageHandler }) => {
  const items = Array.from({ length: totalPage }, (_, index) =>
    (index + 1).toString()
  );

  return (
    <div className="flex justify-end items-center gap-5 mt-10">
      <p>
        {currentPage} of {totalPage}
      </p>
      <div className="flex items-center gap-2">
        <div>
          <Button place="left" onClick={() => pageHandler(currentPage - 1)} />
        </div>
        <ListBox
          allCategory={items}
          className="w-20 px-3 !py-0 bg-gray-700"
          value={currentPage?.toString()}
          categoryHandler={(value) => pageHandler(Number(value))}
        />
        <div>
          <Button place="right" onClick={() => pageHandler(currentPage + 1)} />
        </div>
      </div>
    </div>
  );
};

export default index;
