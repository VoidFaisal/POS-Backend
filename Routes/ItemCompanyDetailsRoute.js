import express from 'express'
import {getItemCompanyDetails,insertItemCompanyDetails,deleteItemCompanyDetails,updateItemCompanyDetails} from '../Controllers/ItemCompanyDetailsController.js' 
const router = express.Router();

router.get('',getItemCompanyDetails)
router.post('',insertItemCompanyDetails)
router.put('/edit',deleteItemCompanyDetails)
router.delete('/delete',updateItemCompanyDetails)

export default router