const express = require('express');
const cors = require('cors');

var app = express();

app.get('/show', cors(), (req, res) => {
    console.clear();
    console.log("Requested to show all products...");
    console.log("api -- << /show");

    let Data = [
        {
            id: 1,
            name: "Product__1",
            image: "https://www.linkpicture.com/q/cake-g0d335a9e0_640.jpg",
            price: 200,
        },
        {
            id: 2,
            name: "Product__2",
            image: "https://www.linkpicture.com/q/pizza-gf3b401f71_640.jpg",
            price: 200,
        },
        {
            id: 3,
            name: "Product__3",
            image: "https://www.linkpicture.com/q/cake-g0d335a9e0_640.jpg",
            price: 200,
        },
        {
            id: 4,
            name: "Product__4",
            image: "https://www.linkpicture.com/q/pizza-gf3b401f71_640.jpg",
            price: 200,
        },
    ]
    res.json(Data)

})


app.get('/pId', cors(),(req,res) => {
    console.clear();
    console.log("Requested to store one products...");
    console.log("api -- << /pId");
    
})



let port = 7890;
app.listen(port, () => {
    console.log("Port is now live on", port);
});
