function fill() {
    const name = document.getElementById("name").value;
    const occupation = document.getElementById("occ").value;
    const portfolio = document.getElementById("portfolio").value;
    const about = document.getElementById("about").value;
    
    document.getElementById('prename').innerText = name || "Your Name";
    document.getElementById('preocc').innerText = occupation || "Your Occupation";
    document.getElementById('preabt').innerText = about || "About yourself";

    const urlElement = document.getElementById('preurl');
    urlElement.innerText = portfolio || "Portfolio Link";
    urlElement.href = portfolio || "#";

    const imgInput = document.getElementById("img");
    
    if (imgInput.files && imgInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('preimg').src = e.target.result;
        }
        reader.readAsDataURL(imgInput.files[0]);
    }
}

function saveCard() {
    const element = document.getElementById("card-capture");
    
    if (typeof html2canvas === 'undefined') {
        alert("Error: The screenshot library didn't load. check your internet connection.");
        return;
    }

    html2canvas(element, {
        useCORS: true, 
        scale: 2
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'my-profile-card.png';
        link.href = canvas.toDataURL("image/png");
        link.click();
    }).catch(err => {
        console.error("Screenshot failed:", err);
        alert("Oops! Screenshot failed. If you haven't uploaded an image, try uploading one first.");
    });
}