import db from "./DB/connect_DB.js"

const getAllItems = (req,res) =>
{
    const query = 'select * from item'
    try {
        db.query(query,(err,result)=>{
            if(err){
                console.log('error fetching data',err); 
            }
            res.status(200).json(result)
        })
    } catch (error) {
        console.log('error in getAllItem ItemController trycatch block',error);
        
    }
}

const insertItems = (req,res) =>
    {   const {name,description} = req.body;
        const query = 'insert into item (name,description) values (?,?)'
        try {
            db.query(query,[name,description],(err,result)=>{
                if(err){
                    console.log('error Inserting data',err); 
                }
                res.status(200).json(result)
            })
        } catch (error) {
            console.log('error in insertItem ItemController trycatch block',error);
            
        }
    }
const deleteItems = (req,res) =>
    {   const {id} = req.body;
        const query = 'delete from item where id = ?'
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
    const updateItems = (req,res) => {
        // Start with an array of the query parameters
        const {id,name,description} = req.body; 
        let queryParams = [];
        let query = 'UPDATE item SET';
      
        // Check if name is provided, and add it to the query
        if (name) {
          query += ' name = ?';
          queryParams.push(name);
        }
      
        // Check if description is provided, and add it to the query
        if (description) {
          if (queryParams.length > 0) {
            query += ',';  // Add a comma if name was already updated
          }
          query += ' description = ?';
          queryParams.push(description);
        }
      
        // Add the WHERE clause for the item ID
        query += ' WHERE id = ?';
        queryParams.push(itemId);
      
        // Execute the query
        pool.query(query, queryParams, (err, results) => {
          if (err) {
            console.error('Error updating record:', err.stack);
            return;
          }
          res.status(200).json('Record updated:', results.affectedRows);
        });
      };

export{getAllItems,insertItems,deleteItems,updateItems}