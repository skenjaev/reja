// Form submission handling
function itemTemplate(item) {
    return  `<li class="list-group-item">
                <span class="item-text">${item.reja}</span>
                <div class="button-group">
                    <button data-id="${item._id}" class="btn btn-sm btn-edit">Ozgartirish</button>
                    <button data-id="${item._id}" class="btn btn-sm btn-delete">Ochirish</button>
                </div>
            </li>`
}
let createField = document.getElementById("create-field");
document.getElementById("create-form").addEventListener("submit", function (e) {
    // Step 1: Frontend ma'lumotni Backendga yuboradi
    e.preventDefault();
    
    if (createField.value.trim() === "") return;  // Prevent empty submissions
    
    axios
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            // Step 6: Frontend qabul qilib UI ni yangilaydi
            if (response.data._id) {
                document.getElementById("item-list").insertAdjacentHTML(
                    "beforeend", 
                    itemTemplate(response.data)
                );
                createField.value = "";  // Clear the input field
                createField.focus();     // Return focus to input
            }
        })
        .catch((err) => {
            console.log("Xatolik yuz berdi:", err);
        });
});

// Delete all items functionality
document.querySelector(".delete-all").addEventListener("click", function() {
    if(confirm("Hamma rejalarni o'chirishni xohlaysizmi?")) {
        axios.post("/delete-all")
            .then((response) => {
                if(response.data.success) {
                    location.reload();
                }
            })
            .catch((err) => {
                console.log("Xatolik yuz berdi");
            });
    }
});

document.addEventListener("click", function(e) {
    // Delete oper
    console.log(e.target);
    if(e.target.classList.contains("delete-me")) {
        if(confirm("Aniq o'chirmoqchimisiz?")) {
            // Step 1: Frontend ma'lumotni Backendga yuboradi
            axios
                .post("/delete-item", {id: e.target.getAttribute("data-id")})
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();
                 })
                .catch((err) => {
                    console.log("iltimos qaytadan harakat qiling");
                });
        }
    }

    // Edit button
    if(e.target.classList.contains("btn-edit")) {
        let userInput = prompt(
            "O'zgartirish kiriting", 
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML
        );
        
        if(userInput) {
            // Step 1: Frontend ma'lumotni Backendga yuboradi
            axios
                .post("/edit-item", {
                    id: e.target.getAttribute("data-id"),
                    new_reja: userInput
                })
                .then((response) => {
                    // Step 6: Frontend qabul qilib UI ni yangilaydi
                    if(response.data.success) {
                        e.target.parentElement.parentElement.querySelector(
                            ".item-text"
                        ).innerHTML = userInput;
                    }
                })
                .catch((err) => {
                    console.log("Xatolik yuz berdi");
                });
        }
    }
});

// Edit operatsiyasi
if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    
    if (userInput) {
        axios.post("/edit-item", {
            id: e.target.getAttribute("data-id"),
            new_input: userInput,
        })
        .then((response) => {
            console.log(response.data);
            e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
        })
        .catch((err) => {
            console.log("Iltimos qaytadan harakat qiling!");
        });
    }
}

// Barchasini tozalash operatsiyasi
document.getElementById("clean-all").addEventListener("click", function() {
    axios.post("/delete-all", {
        delete_all: true
    })
    .then((response) => {
        alert(response.data.state);
        document.location.reload();
    })
    .catch((err) => {
        console.log("Xatolik yuz berdi!");
    });
});