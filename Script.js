console.log("Page loaded successfully");

function runJS() {
    document.getElementById("output").innerHTML = "<h3>Hello from javascript!</h3>";

    document.getElementById("output").innerHTML += "<p>This line came from JavaScript.</p>";

    console.log(
        "Button was clicked at: " +
        new Date().toLocaleTimeString()
    );
}