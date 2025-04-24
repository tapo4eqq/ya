document.addEventListener('DOMContentLoaded', function() {

    // Обработчик отправки формы комментария
    const commentForm = document.getElementById('comment-form');
    if (commentForm) { // Проверка на наличие формы
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const comment = document.getElementById('comment').value;
            alert('Комментарий отправлен: ' + comment); // Замените это на реальную отправку данных
            document.getElementById('comment').value = ''; // Очистка поля комментария
        });
    } // <-- Вот скобка, которую я пропустил

    // Обработчик лайков (пример, не сохраняет лайки на самом деле)
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const itemType = this.dataset.place ? 'место' : 'книгу';
            const itemName = this.dataset.place || this.dataset.book;
            alert('Вы поставили лайк ' + itemType + ': ' + itemName);
        });
    });

    // Функция для обновления новостной ленты (пример)
    function updateNewsFeed() {
        const newsItems = [
            'На странице "Любимые места" добавлен новый лайк!',
            'Кто-то оставил комментарий на главной странице.',
            'На странице "Любимые книги" вы посмотрели книгу "Книга 1".'
        ];

        const newsFeed = document.getElementById('news-feed');
        if (newsFeed) {
            newsFeed.innerHTML = ''; // Очищаем ленту

            newsItems.forEach(item => {
                const p = document.createElement('p');
                p.textContent = item;
                newsFeed.appendChild(p);
            });
        }
    }

    // Вызываем функцию обновления новостной ленты при загрузке страницы (пример)
    updateNewsFeed();
});