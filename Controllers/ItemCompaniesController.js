import db from "./DB/connect_DB.js"

const getAllItemCompanies = (req,res) =>
{
    const query = 'select * from itemcompanies'
    try {
        db.query(query,(err,result)=>{
            if(err){
                console.log('error fetching data',err); 
            }
            res.status(200).json(result)
        })
    } catch (error) {
        console.log('error in getAllItemCompanies ItemCompaniesController trycatch block',error);
        
    }
}

const insertItemCompanies = (req,res) =>
    {   const {CompanyName,ContactInfo} = req.body;
        const query = 'insert into itemcompanies (CompanyName,ContactInfo) values (?,?)'
        try {
            db.query(query,[CompanyName,ContactInfo],(err,result)=>{
                if(err){
                    console.log('error Inserting data',err); 
                }
                res.status(200).json(result)
            })
        } catch (error) {
            console.log('error in insertItemCompanies insertItemCompaniesController trycatch block',error);
            
        }
    }
const deleteItemCompanies = (req,res) =>
    {   const {id} = req.body;
        const query = 'delete from insertItemCompanies where CompanyID = ?'
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
    const updateItemCompanies = (req,res) => {
        // Start with an array of the query parameters
        const {id,CompanyName,ContactInfo} = req.body; 
        let queryParams = [];
        let query = 'UPDATE customers SET';
      
        // Check if name is provided, and add it to the query
        if (CompanyName) {
          query += ' CustomerName = ?';
          queryParams.push(CompanyName);
        }
      
        // Check if description is provided, and add it to the query
        if (ContactInfo) {
          if (queryParams.length > 0) {
            query += ',';  // Add a comma if name was already updated
          }
          query += ' ContactInfo = ?';
          queryParams.push(ContactInfo);
        }
      
        // Add the WHERE clause for the item ID
        query += ' WHERE CompanyID = ?';
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

export{getAllItemCompanies,insertItemCompanies,deleteItemCompanies,updateItemCompanies}