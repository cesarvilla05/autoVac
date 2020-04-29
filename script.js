// var db = firebase.firestore();

$("#Frw").click(function(){
    var DirectionStatus=$(this).is(':checked');
    db.collection('DirectionStatus').doc("ovO4eKhm8xbMzSXPILPr")
    .set({
        forward: DirectionStatus
    })
})
//right will be known as status
$("#R").click(function(){
    var DirectionStatus=$(this).is(':checked');
    db.collection('DirectionStatus').doc("ovO4eKhm8xbMzSXPILPr")
    .set({
        status: DirectionStatus
    })
})
//left will be left
$("#L").click(function(){
    var DirectionStatus=$(this).is(':checked');
    db.collection('DirectionStatus').doc("ovO4eKhm8xbMzSXPILPr")
    .set({
        Left: DirectionStatus
    })
})
//////proof that our API key is being used on our website
// db.collection('DirectionStatus').get().then((snapshot) => {
//     console.log(snapshot.docs);
// });


/////real time data showing up
db.collection('DirectionStatus').onSnapshot(function(Snapsort){
    Snapsort.docChanges().forEach(function(change){
        //Goind Forward
        if(change.type==="added"){
            // console.log("Status: ",change.doc.data());
            $("#Frw").prop('checked', change.doc.data().forward);
        }
        if(change.type==="modified"){
            // console.log("Status: ",change.doc.data());
            $("#Frw").prop('checked', change.doc.data().forward);
        }
        //Going Right
        if(change.type==="added"){
            // console.log("Status: ",change.doc.data());
            $("#R").prop('checked', change.doc.data().status);
        }
        if(change.type==="modified"){
            // console.log("Status: ",change.doc.data());
            $("#R").prop('checked', change.doc.data().status);
        }
        //Going Left
        if(change.type==="added"){
            // console.log("Status: ",change.doc.data());
            $("#L").prop('checked', change.doc.data().Left);
        }
        if(change.type==="modified"){
            // console.log("Status: ",change.doc.data());
            $("#L").prop('checked', change.doc.data().Left);
        }
    });
});