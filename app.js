function createArrayFromTextArea() {
    const textArea = document.getElementById("member-list");
    const lines = textArea.value.split("\n");
    const trimmedLines = lines.map(line => line.trim()).filter(line => line !== "");
    return trimmedLines;
}

console.log(createArrayFromTextArea());