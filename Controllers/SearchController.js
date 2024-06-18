import BooksModel from "../Models/BooksModel.js";


export const BookSearch = async (req, res) => {

    console.log(req.query);
    const {Searchinput} = req.query

    try {
        
        const searchPattern = new RegExp(Searchinput, 'i');

        // Perform the search on specific fields
        const results = await BooksModel.find({
            $or: [
                { Bookname: { $regex: searchPattern } },
                { Author: { $regex: searchPattern } },
                { Description: { $regex: searchPattern } }
            ]
        });

        if(results){
            res.status(200).send({
                success: true,
                message: "All Categories List",
                results,
    
              });
        }else{
            res.status(404).send({
                success: false,
                message: "No results found",
                results,
    
              });
        }
          
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error while getting all categories",
        });
    }
};