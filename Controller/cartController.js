
const pool=require('../db')
const addtoCart=(req,res)=>{
    console.log(req.body)
    const{productid,userid,productname,count}=req.body


// Check if the product is already in the cart
pool.query(`SELECT * FROM cart WHERE productid = ${productid} AND userid = ${userid}`, (error, result) => {
    if (error) {
        throw error;
    }

    if (result.rows.length === 0) {
        // No existing data found, proceed to insert
        pool.query(
            `INSERT INTO cart(productid, userid, productname, count) VALUES($1, $2, $3, $4)`,
            [productid, userid, productname, count],
            (error, result) => {
                if (error) {
                    throw error;
                }
                res.status(200).send('Data added to cart');
            }
        );
    } else {
        // Data already exists, increment the count by one
        const currentCount = result.rows[0].count;
        const newCount = currentCount + 1;

        // Update the existing record with the incremented count
        pool.query(
            `UPDATE cart SET count = $1 WHERE productid = $2 AND userid = $3`,
            [newCount, productid, userid],
            (error, result) => {
                if (error) {
                    throw error;
                }
                res.status(200).send('Count incremented in the cart');
            }
        );
    }
});

    

}

module.exports={
    addtoCart
}