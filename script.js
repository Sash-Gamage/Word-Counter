document.getElementById('textInput').addEventListener('input', () => {
    const text = document.getElementById('textInput').value;
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    const charCount = text.length;

    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('charCount').textContent = charCount;
});
