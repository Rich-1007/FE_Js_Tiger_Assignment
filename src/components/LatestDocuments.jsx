import React from "react";

const LatestDocuments = ({ documentsData }) => {
  return (
    <>
      <div className="overflow-y-auto flex flex-col gap-4 px-1 py-5">
        {documentsData?.data.map((item) => {
          return (
            <div className="flex border-b items-center">
              <div>
                <img src="public/PDF-img.png" alt="" className="h-8" />
              </div>
              <div className="flex flex-row justify-between w-full items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-sm">{item.title}</span>
                  <span className="text-xs text-gray-400">
                    {item.description}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">Nov 29,2023</span>
                  <span className="text-xs text-gray-500">10:27 Am</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default LatestDocuments;
