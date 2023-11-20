
    function generatePDF() {
        const eventName = document.getElementById('eventName').value;
        const eventType = document.getElementById('eventType').value;
        const guests = document.getElementById('guests').value;
        const decorations = document.getElementById('decorations').value;
        const catering = document.getElementById('catering').value;
        const clientNotes = document.getElementById('clientNotes').value;

        const pdf = new jsPDF();

        pdf.text(`Orçamento de Eventos - Black Eventos`, 20, 20);
        pdf.text(`Nome do Evento: ${eventName}`, 20, 30);
        pdf.text(`Tipo de Evento: ${eventType}`, 20, 40);
        pdf.text(`Número de Convidados: ${guests}`, 20, 50);
        pdf.text(`Decorações: ${decorations}`, 20, 60);
        pdf.text(`Catering: ${catering}`, 20, 70);
        pdf.text(`Notas do Cliente: ${clientNotes}`, 20, 80);

        pdf.save('orcamento_black_eventos.pdf');
    }
