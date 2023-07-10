// Function to convert file to PDF format
function convertToPdf() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const error = document.getElementById('error');
    error.innerHTML = '';

    if (!file) {
        error.innerHTML = 'Please select a file.';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const originalContent = e.target.result;
        const convertedContent = originalContent; // Modify this line with your PDF conversion logic
        const convertedFile = new Blob([convertedContent], { type: 'application/pdf' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(convertedFile);
        downloadLink.download = file.name.replace(/\.[^/.]+$/, ".pdf"); // Change the file extension to .pdf
        downloadLink.innerHTML = 'Click here to download the converted file';
        const result = document.getElementById('result');
        result.innerHTML = '';
        result.appendChild(downloadLink);
    };
    reader.readAsDataURL(file);
}

// Function to convert file to DOCX format
function convertToDocx() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const error = document.getElementById('error');
    error.innerHTML = '';

    if (!file) {
        error.innerHTML = 'Please select a file.';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const originalContent = e.target.result;
        const convertedContent = originalContent; // Modify this line with your DOCX conversion logic
        const convertedFile = new Blob([convertedContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(convertedFile);
        downloadLink.download = file.name.replace(/\.[^/.]+$/, ".docx"); // Change the file extension to .docx
        downloadLink.innerHTML = 'Click here to download the converted file';
        const result = document.getElementById('result');
        result.innerHTML = '';
        result.appendChild(downloadLink);
    };
    reader.readAsDataURL(file);
}

// Function to convert file to JPG format
function convertToJpg() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const error = document.getElementById('error');
    error.innerHTML = '';

    if (!file) {
        error.innerHTML = 'Please select a file.';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const originalContent = e.target.result;
        const convertedContent = originalContent; // Modify this line with your JPG conversion logic
        const convertedFile = new Blob([convertedContent], { type: 'image/jpeg' });
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(convertedFile);
        downloadLink.download = file.name.replace(/\.[^/.]+$/, ".jpg"); // Change the file extension to .jpg
        downloadLink.innerHTML = 'Click here to download the converted file';
        const result = document.getElementById('result');
        result.innerHTML = '';
        result.appendChild(downloadLink);
    };
    reader.readAsDataURL(file);
}
