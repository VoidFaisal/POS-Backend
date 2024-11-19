import express from 'express'
import {getAllItems,insertItems,deleteItems,updateItems} from '../Controllers/ItemController.js' 
const router = express.Router();

router.get('',getAllItems)
router.post('',insertItems)
router.put('/edit',updateItems)
router.delete('/delete',deleteItems)

export default router