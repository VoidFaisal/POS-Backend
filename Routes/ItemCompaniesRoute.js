import express from 'express'
import {getAllItemCompanies,insertItemCompanies,deleteItemCompanies,updateItemCompanies} from '../Controllers/ItemCompaniesController.js' 
const router = express.Router();

router.get('',getAllItemCompanies)
router.post('',insertItemCompanies)
router.put('/edit',deleteItemCompanies)
router.delete('/delete',updateItemCompanies)

export default router