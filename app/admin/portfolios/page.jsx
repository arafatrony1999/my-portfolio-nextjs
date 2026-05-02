'use client'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { usePortfolioContext } from '@/context/PortfolioContext'
import DeleteModal from './DeleteModal'
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from 'next/link'

const Portfolios = () => {
    const { loading, filteredPortfolios, getPortfolios, setFilteredPortfolios } = usePortfolioContext();

    const [deleteModalShow, setDeleteModalShow] = useState(false);

    const [sendDeleteId, setSendDeleteId] = useState('')
    const [search, setSearch] = useState('')
    
    const deleteModal = (deleteID) => {
        setSendDeleteId(deleteID)
        setDeleteModalShow(true)
    }
    
    const onDeleteSuccess = () => {
        getPortfolios()
        setDeleteModalShow(false)
    }

    useEffect(() => {
        setFilteredPortfolios(search)
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
            name: 'Link',
            selector: row => <a href={row.link} target='_blank' rel='noreferrer'>{row.link}</a>,
            sortable: true
        },
        {
            name: 'Category',
            selector: row => row.categories.name,
            sortable: true
        },
        {
            name: 'Action',
            cell: row => <>
                <Link href={'/admin/portfolios/edit?id='+row.id} className='btn btn-primary'>
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
                    data={filteredPortfolios}
                    pagination
                    progressPending={loading && 'Loading...'}
                    title='Portfolios'
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
                        <Link href='add' className='btn btn-primary'>ADD NEW PORTFOLIO</Link>
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

export default Portfolios