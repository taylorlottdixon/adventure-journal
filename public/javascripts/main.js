function categoryPopUp() {
    let catName = prompt("Enter the category name:", "New Category");
    if (catName === null || catName === "") {
        console.log("User cancelled input")
    } else {
        return catName
    }
}

function formatDate(date) {
        console.log(date)
        let formattedDate = `${date.getMonth()}-`
            formattedDate += `${date.getDate()}-`
            formattedDate += `${date.getFullYear()} `
            formattedDate += `${date.getHours()}:`
            formattedDate += `${date.getMinutes()}`
        return formattedDate
    }