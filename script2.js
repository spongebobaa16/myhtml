const content = document.getElementById("content");
const date = document.getElementById("date");
const time = document.getElementById("time");
const addedBtn = document.getElementById("addedBtn");
const deletedBtn = document.getElementById("deletedBtn");

const listContent = []

addedBtn.addEventListener("click", function(){
    
    listContent.push({
        content: content.value,
        date: date.value,
        time: time.value
    })

    let htmlStr = ""

    listContent.forEach(function (item){
        htmlStr = htmlStr +`
        <div class="item">
            <div>
                <p>Content: ${item.content}</p>
                <p>Date: ${item.date} ${item.time} </p>
            </div>
        </div>

        `
    })

    list.innerHTML = htmlStr


})

deletedBtn.addEventListener("click", function(){
    listContent.pop({
        content: content.value,
        date: date.value,
        time: time.value
    })

    let htmlStr = ""

    listContent.forEach(function (item){
        htmlStr = htmlStr +`
        <div class="item">
            <div>
                <p>Content: ${item.content}</p>
                <p>Date: ${item.date} ${item.time} </p>
            </div>
        </div>

        `
    })

    list.innerHTML = htmlStr
})

