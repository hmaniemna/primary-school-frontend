import React from 'react';
import {TableRow,TableCell } from '@material-ui/core';
import { NavItem } from 'react-bootstrap';
<<<<<<< HEAD
const ReadOnlyRow = ({val,handleEditClick,updateName,deleteClass,refreshPage}) => 
=======
import Popup from '../../../components/Popup';
import DeleteC from './DeleteC/DeleteC';
const ReadOnlyRow = ({val,handleEditClick,deleteClass,refreshPage,openPopup,setOpenPopup}) => 
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
{
    return(
        <TableRow key={NavItem.id_classe}>
            <TableCell>
                <button type="button" class="ui blue basic button"  
                    onClick={(event)=>{
                        handleEditClick(event,val)
                    }}
                >
                    تعديل
                </button> 
                <button class="ui red basic button"
                    onClick={()=>{
                        deleteClass(val.id_classe)
                        refreshPage()
                    }}
                >
                    حذف
                </button>
            </TableCell>    
            <TableCell>{val.anneescolaire}</TableCell> 
            <TableCell>{val.nb}</TableCell>
            <TableCell>{val.nom}</TableCell> 
<<<<<<< HEAD
            <TableCell>{val.niveau}</TableCell>
            
        </TableRow>
=======
            <TableCell>{val.niveau}</TableCell>  
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <DeleteC setOpenPopup={setOpenPopup}/>
            </Popup> 
        </TableRow>
        
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
    );
};


<<<<<<< HEAD
export default ReadOnlyRow;
=======
export default ReadOnlyRow
>>>>>>> 04a225d03b638b34ee940213a923e808503a051a
