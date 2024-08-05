document.addEventListener('DOMContentLoaded', async function () {
  try {
    // Fetch data from the JSON file
    const response = await fetch('data.json');
    const data = await response.json();

    // Extract items from the data
    const items = data.items;

    // Extract unique tags from data
    const uniqueTags = Array.from(new Set(items.flatMap(item => item.tags)));
    uniqueTags.unshift('all'); // Add 'all' to the beginning

    // Render tag buttons
    const tagButtonsContainer = document.getElementById('tag-buttons');
    uniqueTags.forEach(tag => {
      const button = document.createElement('button');
      button.classList.add('tag-button');
      if (tag === 'all') button.classList.add('all-button', 'active');
      button.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
      button.dataset.tag = tag;
      button.addEventListener('click', () => handleTagClick(tag, button));
      tagButtonsContainer.appendChild(button);
    });

    // Render table rows
    const tableBody = document.querySelector('#data-table tbody');
    items.forEach(item => {
      const row = document.createElement('tr');
      row.dataset.tags = item.tags.join(',');
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.tags.join(', ')}</td>
      `;
      tableBody.appendChild(row);
    });

    // Handle tag button click
    function handleTagClick(tag, button) {
      const allButton = document.querySelector('.all-button');
      const buttons = document.querySelectorAll('.tag-button');

      if (tag === 'all') {
        // Show all rows
        buttons.forEach(btn => btn.classList.remove('active'));
        allButton.classList.add('active');
        filterTable([]);
      } else {
        button.classList.toggle('active');
        allButton.classList.remove('active');

        // Get all active tags
        const activeTags = Array.from(buttons)
          .filter(btn => btn.classList.contains('active') && btn.dataset.tag !== 'all')
          .map(btn => btn.dataset.tag);

        if (activeTags.length === 0) {
          allButton.classList.add('active');
          filterTable([]);
        } else {
          filterTable(activeTags);
        }
      }
    }

    // Filter table rows based on tags
    function filterTable(tags) {
      const rows = document.querySelectorAll('#data-table tbody tr');
      rows.forEach(row => {
        const rowTags = row.dataset.tags.split(',');
        if (tags.length === 0 || tags.some(tag => rowTags.includes(tag))) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });
    }
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
