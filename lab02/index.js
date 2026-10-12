// Czekamy, aż cały dokument HTML zostanie załadowany
document.addEventListener('DOMContentLoaded', () => {
    
    // Pobieramy formularz za pomocą jego ID
    const form = document.getElementById('productForm');

    // Nasłuchujemy na zdarzenie 'submit' (wysłanie formularza)
    form.addEventListener('submit', (event) => {
        // Zatrzymujemy domyślną akcję wysyłania (która przeładowałaby stronę)
        event.preventDefault();

        // Obiekt FormData zbiera wszystkie dane z pól formularza posiadających atrybut 'name'
        const formData = new FormData(form);

        console.log('=== DANE Z FORMULARZA ZATWIERDZONE ===');
        
        // Pobieranie pojedynczych wartości
        console.log('Full name:', formData.get('fullName'));
        console.log('Email:', formData.get('email') || 'Brak emaila');
        console.log('Phone:', formData.get('phone'));
        
        // Sprawdzanie checkboxa (zwróci 'on' jeśli zaznaczony, w przeciwnym razie null)
        const createAccount = formData.get('createAccount') !== null;
        console.log('Create account:', createAccount ? 'Tak' : 'Nie');
        
        console.log('Product type:', formData.get('productType') || 'Nie wybrano');
        console.log('Price:', formData.get('price'));
        console.log('Maker:', formData.get('maker') || 'Nie wpisano');
        console.log('Warranty:', formData.get('warranty') ? formData.get('warranty') + ' months' : 'Nie wybrano');
        console.log('Purchased date:', formData.get('purchasedDate'));
        
        // Pobieranie wielu wartości z select multiple (Tagi)
        const tags = formData.getAll('tags');
        console.log('Tags:', tags.length > 0 ? tags.join(', ') : 'Brak wybranych tagów');

        console.log('======================================');
    });
});