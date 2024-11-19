import db from "./DB/connect_DB.js"

const getAllCustomers = (req,res) =>
{
    const query = 'select * from customers'
    try {
        db.query(query,(err,result)=>{
            if(err){
                console.log('error fetching data',err); 
            }
            res.status(200).json(result)
        })
    } catch (error) {
        console.log('error in getAllCustomers CustomersController trycatch block',error);
        
    }
}

const insertCustomers = (req,res) =>
    {   const {customername,contactinfo} = req.body;
        const query = 'insert into customers (CustomerName,ContactInfo) values (?,?)'
        try {
            db.query(query,[customername,contactinfo],(err,result)=>{
                if(err){
                    console.log('error Inserting data',err); 
                }
                res.status(200).json(result)
            })
        } catch (error) {
            console.log('error in insertCustomers ItemController trycatch block',error);
            
        }
    }
const deleteCustomers = (req,res) =>
    {   const {id} = req.body;
        const query = 'delete from Customers where CustomerID = ?'
        try {
            db.query(query,[id],(err,result)=>{
                if(err){
                    console.log('error deleting data',err); 
                }
                res.status(200).json(result)
            })
        } catch (error) {
            console.log('error in deleteItem ItemController trycatch block',error);
            
        }
    }
    const updateCustomers = (req,res) => {
        // Start with an array of the query parameters
        const {id,customername,contactinfo} = req.body; 
        let queryParams = [];
        let query = 'UPDATE customers SET';
      
        // Check if name is provided, and add it to the query
        if (customername) {
          query += ' CustomerName = ?';
          queryParams.push(customername);
        }
      
        // Check if description is provided, and add it to the query
        if (contactinfo) {
          if (queryParams.length > 0) {
            query += ',';  // Add a comma if name was already updated
          }
          query += ' ContactInfo = ?';
          queryParams.push(contactinfo);
        }
      
        // Add the WHERE clause for the item ID
        query += ' WHERE CustomerID = ?';
        queryParams.push(id);
      
        // Execute the query
        pool.query(query, queryParams, (err, results) => {
          if (err) {
            console.error('Error updating record:', err.stack);
            return;
          }
          res.status(200).json('Record updated:', results.affectedRows);
        });
      };

export{getAllCustomers,insertCustomers,deleteCustomers,updateCustomers}