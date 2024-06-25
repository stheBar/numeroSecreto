function carregarPessoas() {
    fetch('http://localhost:8080')
        .then(response => response.json())
        .then(data => {
            const pessoasDiv = document.getElementById('pessoas');


            data.forEach(person => {
                const personElement = document.createElement('div');
                personElement.innerHTML = `<p><strong>Nome:</strong> ${person.name}, <strong>Idade:</strong> ${person.age}</p>`;
                pessoasDiv.appendChild(personElement);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar pessoas:', error);
        });
}
