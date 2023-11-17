
const pool =require('../db')

const getProducts=(req,res)=>{
    
    
    let sort=req.query.sort||'price'
    let search=req.query.search||''
    let limit=2
    let page=req.query.page||1;
    let offset=limit*(page-1)
    
            pool.query(`SELECT * FROM products WHERE name ILIKE $1 ORDER BY ${sort} ${'ASC'} LIMIT $2 OFFSET $3`,[`%${search}%`,limit,offset],(error,result)=>{
                if(error) throw error;
                res.status(200).json(result.rows)
            })
    
   
   
 
}

const productView=(req,res)=>{
   
    let id=req.query.id
    

    pool.query(`SELECT * FROM products WHERE id = $1`,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows)
    })
}

const addproduct=(req,res)=>{
    console.log(req.body)
    const {name,price,category}=req.body
   
    pool.query(`INSERT INTO products(name,price,category) VALUES($1,$2,$3)`,[name,price,category],(error,result)=>{
        if(error) throw error
        res.status(200).send('Product added successfully')
    })

}

module.exports={
    getProducts,
    productView,
    addproduct
}