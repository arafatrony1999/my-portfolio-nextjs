"use client"

import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useCategoryContext } from '@/context/CategoryContext'
import { toast } from 'react-toastify'
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from 'next/link'
import DeleteModal from './DeleteModal '

const Categories = () => {
    const { loading, filteredCategories, getCategories, setFilteredCategories } = useCategoryContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getCategories()
        setDeleteModalShow(false)

        toast.success('Category deleted successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    useEffect(() => {
        setFilteredCategories(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'Image',
            selector: row => <img style={{width: '50px'}} src={row.image} alt="" />
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Type',
            selector: row => row.type,
        },
        {
            name: 'Action',
            cell: row => <>
                <Link href={'edit?id='+row.id} className='btn btn-primary'>
                    <FaEdit />
                </Link>
                <button onClick={() => deleteModal(row.id)} className='btn btn-danger mx-2'>
                    <FaTrash />
                </button>
            </>
        }
    ]


    return (
        <>
            <div className='page-container'>
                <DataTable
                    columns={columns}
                    data={filteredCategories}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Categories'
                    fixedHeader
                    fixedHeaderScrollHeight='75%'
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    subHeader
                    subHeaderComponent={
                        <input type='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='w-25 form-group' />
                    }
                    actions={
                        <Link href='/admin/categories/add' className='btn btn-primary'>ADD NEW CATEGORY</Link>
                    }
                />
            </div>

            
            <DeleteModal 
                show={deleteModalShow}
                onHide={() => setDeleteModalShow(false)}
                deleteID = {sendDeleteId}
                onDeleteSuccess = {onDeleteSuccess}
            />
        </>
    )
}

export default Categories