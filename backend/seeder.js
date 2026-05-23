const mongoose = require("mongoose");
const Book = require("./models/book");

mongoose.connect("mongodb://127.0.0.1:27017/readingClub")
.then(async () => {

    await Book.deleteMany()

    await Book.insertMany([
        {
            title: "مخطوطة ابن اسحاق",
            author: "حسن الجندي",
            category: "Horror",
            summary: "رواية رعب عربية مشوقة",
            description: "قصة مليئة بالغموض والأحداث المرعبة",
            pdf: "http://localhost:3000/uploads/pdfs/ibnishaq3.pdf",
            cover: "http://localhost:3000/uploads/images/ibnishaq3.jpg",
            price: 0,
            isPaid: false,
            moods:["مشوق","غامض","مخيف"],
            addedBy: "6a0377657a7075cf78e65cc4"
        },
        {
            title: "the adventure of empty house",
            author: "Arthur conan doyle",
            category: "mastry",
            summary: "عودة شيرلوك هولمز للتحقيق في قضية غامضة بعد اختفائه الطويل",
            description: "قصة بوليسية مشوقة من سلسلة شيرلوك هولمز",
            pdf: "http://localhost:3000/uploads/pdfs/emptyhouse.pdf",
            cover: "http://localhost:3000/uploads/images/emptyhouse.jpg",
            audio:"http://localhost:3000/uploads/audio/emptyhouse.mp3",
            price: 0,
            isPaid: false,
            moods:["ذكي","سريع","مشوق","غامض"],
            addedBy: "6a0377657a7075cf78e65cc4"
        },
        // {
        //     title: "The Alchemist",
        //     author: "Paulo Coelho",
        //     category: "Fiction",
        //     summary: "A journey of following dreams",
        //     description: "A philosophical story about destiny",
        //     pdf: "https://example.com/alchemist.pdf",
        //     cover: "https://example.com/alchemist.jpg",
        //     price: 0,
        //     isPaid: false,
        //     addedBy: "6a0377657a7075cf78e65cc4"
        // }
    ]);

    console.log("3 BOOKS INSERTED");
    process.exit();
});