mongoose.connect('mongodb://localhost/testdb')
mongoose.connect.once('open',function () {
   console.log("Connected successfully.") 
}).on('error',function () {
    
})