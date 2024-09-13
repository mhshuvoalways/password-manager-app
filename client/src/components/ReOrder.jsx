import React, { useContext } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Context } from "../app/Context";
import { Bar } from "../assets";
import ModalClose from "../assets/close.svg";
import styles from "../style";
import Axios from "../utils/axios";

const ReOrder = ({ modalHandler }) => {
  const { listPassword, setListPassword } = useContext(Context);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(listPassword);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);

    const updatedItems = reorderedItems.map((el, index) => {
      return {
        ...el,
        itemPosition: index + 1,
      };
    });
    setListPassword(updatedItems);
    Axios.put("/password/reorder", updatedItems)
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div
      className={`${styles.paragraph} w-full sm:w-10/12 m-auto py-10 bg-black-gradient-2 rounded-[20px] box-shadow sm:px-10 px-5`}
    >
      <div className="flex justify-between">
        <p className="text-2xl leading-normal">Reorganize items</p>
        <img
          src={ModalClose}
          alt=""
          className="cursor-pointer hover:bg-gray-600 transition rounded-full p-2 w-8 h-8"
          onClick={modalHandler}
        />
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="lists">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="mt-5 space-y-2 h-[70vh] overflow-y-auto pr-5 reorderScroll"
            >
              {listPassword.map((el, index) => (
                <Draggable key={el._id} draggableId={el._id} index={index}>
                  {(provided) => (
                    <div
                      className="shadow-md py-2 border border-gray-700 rounded-lg px-2 cursor-grab flex items-center justify-between"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        <p>{el.website}</p>
                        <p className="text-gray-300 text-sm">{el.email}</p>
                      </div>
                      <img src={Bar} alt="" className="w-6" />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ReOrder;
