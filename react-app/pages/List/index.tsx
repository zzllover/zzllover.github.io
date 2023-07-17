import React from "react";

// 定义数据结构
const data = [1, 2, 3, 4, 6, 67, 7];

const List = () => {
  return (
    <div className="p-3 flex-1 overflow-y-auto">
      {data.map((v) => {
        return (
          <div key={v} className="flex p-2 bg-white shadow-lg rounded-lg mb-3">
            222
          </div>
        );
      })}
      {data.map((v) => {
        return (
          <div key={v} className="flex p-2 bg-white shadow-lg rounded-lg mb-3">
            222
          </div>
        );
      })}
    </div>
  );
};

export default List;
