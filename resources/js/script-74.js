function filterItems(filter) {
        let items = document.querySelectorAll('.texture-item');
        let found = false;
        items.forEach(item => {
            if (filter === 'todos') {
                item.style.display = 'block';
                found = true;
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block';
                    found = true;
                } else {
                    item.style.display = 'none';
                }
            }
        });
        document.getElementById('searchAlert').style.display = found ? 'none' : 'block';
}
