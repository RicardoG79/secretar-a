let selectedUser = null;

function selectUser(user) {
    selectedUser = user;
    document.getElementById('selected-user').textContent = user;
}

document.getElementById('upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!selectedUser) {
        alert('Por favor, selecciona un usuario.');
        return;
    }

    const fileInput = document.getElementById('pdf-file');
    const endDate = document.getElementById('end-date').value;
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('user_role', selectedUser);
    if (endDate) {
        formData.append('end_date', endDate);
    }

    try {
        const response = await fetch('/subir/', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();

        if (response.ok) {
            document.getElementById('total-days').textContent = data.dias_totales;
            document.getElementById('end-date-result').textContent = data.fecha_fin;
            document.getElementById('download-pdf').href = data.url_pdf;
            document.getElementById('download-word').href = data.url_word;
            document.getElementById('result').style.display = 'block';
        } else {
            alert('Error: ' + data.detail);
        }
    } catch (error) {
        alert('Error al procesar el archivo.');
    }
});