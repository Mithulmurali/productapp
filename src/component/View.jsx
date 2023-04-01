import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const View = () => {
    var[update,setUpdate] = useState(false)
    var[Selectd,setSelectd] =useState([])
    var[student,setproduct]= useState([])
    useEffect(()=>{
        axios.get(" http://localhost:3006/students")
        .then(response=>{
            Set(student=response.data)
            console.log(student)
        })
        .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete(" http://localhost:3006/students"+id)
        .then(response=>{
            alert("Successfully deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    const updateValue=(value)=>{
        setSelectd(value)
        setUpdate(true)

    }
    var finalJSX=<TableContainer>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Brand</TableCell>
                <TableCell>Quality</TableCell>
                <TableCell>price</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {student.map((value,index)=>{
                return <TableRow key={index}>
                    <TableCell>{value.id}</TableCell>
                    <TableCell>{value.name}</TableCell>
                    <TableCell>{value.grade}</TableCell>
                    <TableCell>
                        <Button></Button>
                        <Button onClick={()=>deleteValue(value.id)}>Delete</Button></TableCell>
                        <TableCell><Button onClick={()=>updateValue(value)}>Upadte</Button></TableCell>
                </TableRow>
            })}
        </TableBody>
    </Table>
</TableContainer>

if(update)
finalJSX=<Add data={Selectd} method ="put"/>
  return (
    finalJSX
  )
   


}

export default View