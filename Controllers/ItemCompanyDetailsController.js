import db from "./DB/connect_DB.js"

const getItemCompanyDetails = (req,res) =>
{
    const query = 'select * from itemcompanydetails'
    try {
        db.query(query,(err,result)=>{
            if(err){
                console.log('error fetching data',err); 
            }
            res.status(200).json(result)
        })
    } catch (error) {
        console.log('error in getItemCompanyDetails ItemCompanyDetailsController trycatch block',error);
        
    }
}

const insertItemCompanyDetails = (req,res) =>
    {   const {ItemID,CompanyID,PackingType,SalesPrice} = req.body;
        const query = 'insert into itemcompanydetails (CustomerName,ContactInfo) values (?,?)'
        try {
            db.query(query,[ItemID,CompanyID,PackingType,SalesPrice],(err,result)=>{
                if(err){
                    console.log('error Inserting data',err); 
                }
                res.status(200).json(result)
            })
        } catch (error) {
            console.log('error in getItemCompanyDetails ItemCompanyDetailsController trycatch block',error);
            
        }
    }
const deleteItemCompanyDetails = (req,res) =>
    {   const {id} = req.body;
        const query = 'delete from itemcompanydetails where DetailID = ?'
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
    const updateItemCompanyDetails = (req,res) => {
        // Start with an array of the query parameters
        const {id,ItemID,CompanyID,PackingType,SalesPrice} = req.body; 
        let queryParams = [];
        let query = 'UPDATE customers SET';
      
        // Check if name is provided, and add it to the query
        if (ItemID) {
          query += ' ItemID = ?';
          queryParams.push(ItemID);
        }
      
        // Check if description is provided, and add it to the query
        if (CompanyID) {
          if (queryParams.length > 0) {
            query += ',';  // Add a comma if name was already updated
          }
          query += ' CompanyID = ?';
          queryParams.push(CompanyID);
        }
        if (PackingType) {
          if (queryParams.length > 0) {
            query += ',';  // Add a comma if name was already updated
          }
          query += ' PackingType = ?';
          queryParams.push(PackingType);
        }
        if (SalesPrice) {
          if (queryParams.length > 0) {
            query += ',';  // Add a comma if name was already updated
          }
          query += ' SalesPrice = ?';
          queryParams.push(SalesPrice);
        }
      
        // Add the WHERE clause for the item ID
        query += ' WHERE DetailID = ?';
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

export{getItemCompanyDetails,insertItemCompanyDetails,deleteItemCompanyDetails,updateItemCompanyDetails}