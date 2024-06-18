import BooksModel from "../Models/BooksModel.js";


export const Addnewbook = async (req, res) => {

    const{Name,Author,Description}= req.body

    try {
        const books = await new BooksModel({
            Bookname:Name,
            Author:Author,
            Description:Description
        }).save()
        res.status(201).send({
            success: true,
            message: "New book created",
            books
          });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Failed to create"
          });
    }
};