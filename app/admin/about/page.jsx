'use client'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import DeleteModal from './DeleteModal'
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from 'next/link'
import { useAboutContext } from '@/context/AboutContext';

const AboutPage = () => {
    const { loadingAbout, filteredAbout, getAbout, setFilteredAbout } = useAboutContext();
    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getAbout()
        setDeleteModalShow(false)
    }

    useEffect(() => {
        setFilteredAbout(search)
        //eslint-disable-next-line
    }, [search])
    
    const columns = [
        {
            name: 'ID',
            selector: row => row.id
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true
        },
        {
            name: 'Number',
            selector: row => row.number,
            sortable: true
        },
        {
            name: 'Action',
            cell: row => <>
                <Link href={'/admin/about/edit?id='+row.id} className='btn btn-primary'>
                    <FaEdit />
                </Link>
                <button onClick={() => deleteModal(row.id)} className='btn btn-danger mx-2'>
                    <FaTrash />
                </button>
            </>
        }
    ]

    return(
        <>
            <div className='page-container'>
                <DataTable
                    columns={columns}
                    data={filteredAbout}
                    pagination
                    progressPending={loadingAbout && 'Loading...'}
                    title='About'
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
                        <Link href='about/add' className='btn btn-primary'>ADD NEW ABOUT</Link>
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
export default AboutPage;