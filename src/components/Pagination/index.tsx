import React, { FC } from "react";
import ReactPaginate from "react-paginate";

const PAGE_BUTTON_CLASSNAME = "transition-all active:translate-y-0.5";

const PAGE_LINK_CLASSNAME =
  "bg-blue-light mr-2.5 mb-2.5 py-2 px-4 text-center font-medium border rounded cursor-pointer select-none transition-all";

interface Props {
  itemsCount: number;
  limit: number;
}

export const Pagination: FC<Props> = ({ itemsCount, limit }) => {
  const pageCount = Math.ceil(itemsCount / limit);

  return (
    <ReactPaginate
      containerClassName="flex flex-wrap justify-center items-center pb-10"
      pageClassName={PAGE_BUTTON_CLASSNAME}
      pageLinkClassName={PAGE_LINK_CLASSNAME}
      breakClassName={PAGE_BUTTON_CLASSNAME}
      breakLinkClassName={PAGE_LINK_CLASSNAME}
      nextClassName={PAGE_BUTTON_CLASSNAME}
      nextLinkClassName={PAGE_LINK_CLASSNAME}
      previousClassName={PAGE_BUTTON_CLASSNAME}
      previousLinkClassName={PAGE_LINK_CLASSNAME}
      activeLinkClassName="bg-blue-primary text-white"
      disabledClassName="pointer-events-none"
      disabledLinkClassName="bg-gray-200 pointer-events-none"
      pageCount={pageCount}
      onPageChange={(e) => {
        console.log(e);
      }}
    />
  );
};
