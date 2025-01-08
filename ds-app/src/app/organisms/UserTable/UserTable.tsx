import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  ColumnDef,
  flexRender,
  SortingState,
} from "@tanstack/react-table";
import { User } from "@/types/User";

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]); // Typed correctly
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 5 });

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "username",
        header: "Username",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "phone",
        header: "Phone",
      },
      {
        accessorKey: "website",
        header: "Website",
      },
    ],
    []
  );

  const table = useReactTable({
    data: users,
    columns,
    state: {
      globalFilter,
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <div className="text-2xl mb-4">User list</div>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <div>
          <label className="mr-2">Rows per page:</label>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
            className="select select-bordered"
          >
            {[5, 10, 20].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="bg-gray-100">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-gray-300 px-4 py-2 text-left text-gray-600 font-medium cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] || ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border border-gray-300 px-4 py-2 text-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
          <button
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
            className="btn btn-sm btn-outline"
          >
            {"<<"}
          </button>
          <button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
            className="btn btn-sm btn-outline"
          >
            Previous
          </button>
        </div>
        <div>
          <span>
            Page{" "}
            <strong>
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
            className="btn btn-sm btn-outline"
          >
            Next
          </button>
          <button
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
            className="btn btn-sm btn-outline"
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
