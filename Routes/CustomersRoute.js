import express from 'express'
import {getAllCustomers,insertCustomers,deleteCustomers,updateCustomers} from '../Controllers/CustomersController.js' 
const router = express.Router();

router.get('',getAllCustomers)
router.post('',insertCustomers)
router.put('/edit',deleteCustomers)
router.delete('/delete',updateCustomers)

export default router