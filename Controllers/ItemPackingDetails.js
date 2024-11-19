import db from "./DB/connect_DB.js"

const getAllItemPackingDetails = (req,res) =>
{
    const query = 'select * from itempackingdetails'
    try {
        db.query(query,(err,result)=>{
            if(err){
                console.log('error fetching data',err); 
            }
            res.status(200).json(result)
        })
    } catch (error) {
        console.log('error in getAllItemPackingDetails ItemPackingDetailsController trycatch block',error);
        
    }
}

const insertItemPackingDetails = (req,res) =>
    {   const {PackingName} = req.body;
        const query = 'insert into itempackingdetails (PackingName) values (?,?)'
        try {
            db.query(query,[PackingName],(err,result)=>{
                if(err){
                    console.log('error Inserting data',err); 
                }
                res.status(200).json(result)
            })
        } catch (error) {
            console.log('error in insertItemPackingDetails ItemPackingDetailsController trycatch block',error);
            
        }
    }
const deleteItemPackingDetails = (req,res) =>
    {   const {id} = req.body;
        const query = 'delete from itempackingdetails where PackingID = ?'
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
    const updateItemPackingDetails = (req,res) => {
        // Start with an array of the query parameters
        const {id,PackingName} = req.body; 
        let queryParams = [];
        let query = 'UPDATE itempackingdetails SET';
      
        // Check if name is provided, and add it to the query
        if (PackingName) {
          query += ' PackingName = ?';
          queryParams.push(PackingName);
        }
      
        // Check if description is provided, and add it to the query
       
      
        // Add the WHERE clause for the item ID
        query += ' WHERE PackingID = ?';
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

export{getAllItemPackingDetails,insertItemPackingDetails,deleteItemPackingDetails,updateItemPackingDetails}