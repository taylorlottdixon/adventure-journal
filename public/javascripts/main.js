function categoryPopUp() {
    let catName = prompt("Enter the category name:", "New Category");
    if (catName === null || catName === "") {
        console.log("User cancelled input")
    } else {
        return catName
    }
}
