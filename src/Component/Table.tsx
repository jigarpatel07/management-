
import React from 'react';

interface columnInterface {
    accessorKey: string,
    header: string
}
const Table = ({ data, columns }: { data: any, columns: columnInterface[] }) => {

    return (
        <div className='flex flex-col gap-4 overflow-y-auto border-box' style={{ height: "calc(100vh - 274px)" }}>
            <table className='bg-white min-w-[600px] rounded-lg overflow-auto '>
                <thead className='sticky top-0 z-[9999]'>
                    <tr className='bg-[#EEEEEE] w-full text-[#282828] text-center capitalize '>
                        {columns.map((column: columnInterface) => (
                            <th key={column.accessorKey} className='px-4 py-5'>{column.header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {data?.slice(0, 10)?.map((item: any, index: number) => (
                        <tr key={index} className='text-center' style={{ width: "calc(100wh - 275px)" }}>
                            {columns.map((column: any) => (
                                <td key={column.accessorKey} className='px-4 py-5' >
                                    {column.cell ? column.cell({ row: { original: item } }) : item[column.accessorKey]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default Table
