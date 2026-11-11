const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

const projectDetails = {
  dashboard: {
    title: 'Analytics Dashboard',
    text: 'Build a dashboard with responsive statistic cards, a chart area, date filters, and a searchable activity table. Use JavaScript to update the interface when filters change.'
  },
  store: {
    title: 'Product Storefront',
    text: 'Create a product catalogue with category filters, product cards, a cart count, and a mobile-friendly layout. Add JavaScript interactions and clear empty states.'
  },
  planner: {
    title: 'Task Planner',
    text: 'Build a task manager where users can add tasks, mark them complete, delete them, and filter by status. Consider localStorage if you want tasks to persist after refresh.'
  }
};
const dialog = document.getElementById('projectDialog');
document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', () => {
    const project = projectDetails[button.dataset.project];
    document.getElementById('dialogTitle').textContent = project.title;
    document.getElementById('dialogText').textContent = project.text;
    dialog.showModal();
  });
});
document.getElementById('dialogClose').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
