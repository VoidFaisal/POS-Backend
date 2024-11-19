import express from 'express'
import {getAllItemPackingDetails,insertItemPackingDetails,deleteItemPackingDetails,updateItemPackingDetails} from '../Controllers/ItemPackingDetailsController.js' 
const router = express.Router();

router.get('',getAllItemPackingDetails)
router.post('',insertItemPackingDetails)
router.put('/edit',updateItemPackingDetails)
router.delete('/delete',deleteItemPackingDetails)

export default router