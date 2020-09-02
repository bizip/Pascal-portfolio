//getting question from the database
//================================================================================================
//create element and render single question
let renderQuery = (doc) => {
    var queryList = document.getElementById("single__article");
    let box = document.createElement("div");
    let name = document.createElement('h4');
    let message = document.createElement("p")
    box.setAttribute('data-id', doc.id);
    box.className = "item1";
    name.textContent = doc.data().fullName;
    message.textContent = doc.data().message;
    box.appendChild(name);
    box.appendChild(message);
    queryList.appendChild(box);
    queryList.className = "article";


}
db.collection("messages").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderQuery(doc);
    });
});