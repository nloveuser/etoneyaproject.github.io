// Subscription categories data
const subCategories = [
  {
    title: "ТОЛЬКО БЕЛЫЕ СПИСКИ",
    icon: "shield-check",
    links: [
      { label: "Основа", url: "https://etoneya.a9fm.site/whitelist" },
      { label: "Зеркало №1", url: "https://alley.serv00.net/whitelist" },
      { label: "Зеркало №2", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/whitelist" },
      { label: "Зеркало №3", url: "https://cdn.jsdelivr.net/gh/EtoNeYaProject/EtoNeYaProject.github.io@refs/heads/main/whitelist" },
      { label: "Зеркало №4", url: "https://translate.yandex.ru/translate?url=https://etoneya.a9fm.site/whitelist&lang=en-ru" },
      { label: "Зеркало №5", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/whitelist" }
    ]
  },
  {
    title: "РАБОТАЕТ ГЕМИНИ",
    icon: "bot",
    links: [
      { label: "Основа", url: "https://etoneya.a9fm.site/gemini" },
      { label: "Зеркало №1", url: "https://alley.serv00.net/gemini" },
      { label: "Зеркало №2", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/gemini" },
      { label: "Зеркало №3", url: "https://cdn.jsdelivr.net/gh/EtoNeYaProject/EtoNeYaProject.github.io@refs/heads/main/gemini" },
      { label: "Зеркало №4", url: "https://translate.yandex.ru/translate?url=https://etoneya.a9fm.site/gemini&lang=en-ru" },
      { label: "Зеркало №5", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/gemini" }
    ]
  },
  {
    title: "РАБОТАЕТ ЮТУБ",
    icon: "youtube",
    links: [
      { label: "Основа", url: "https://etoneya.a9fm.site/youtube" },
      { label: "Зеркало №1", url: "https://alley.serv00.net/youtube" },
      { label: "Зеркало №2", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/youtube" },
      { label: "Зеркало №3", url: "https://cdn.jsdelivr.net/gh/EtoNeYaProject/EtoNeYaProject.github.io@refs/heads/main/youtube" },
      { label: "Зеркало №4", url: "https://translate.yandex.ru/translate?url=https://etoneya.a9fm.site/youtube&lang=en-ru" },
      { label: "Зеркало №5", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/youtube" }
    ]
  },
  {
    title: "РАБОТАЕТ ЮТУБ МУЗЫКА",
    icon: "music",
    links: [
      { label: "Основа", url: "https://etoneya.a9fm.site/ytm" },
      { label: "Зеркало №1", url: "https://alley.serv00.net/ytm" },
      { label: "Зеркало №2", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/ytm" },
      { label: "Зеркало №3", url: "https://cdn.jsdelivr.net/gh/EtoNeYaProject/EtoNeYaProject.github.io@refs/heads/main/ytm" },
      { label: "Зеркало №4", url: "https://translate.yandex.ru/translate?url=https://etoneya.a9fm.site/ytm&lang=en-ru" },
      { label: "Зеркало №5", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/ytm" }
    ]
  },
  {
    title: "ДРУГИЕ",
    icon: "globe",
    links: [
      { label: "Основа", url: "https://etoneya.a9fm.site/other" },
      { label: "Зеркало №1", url: "https://alley.serv00.net/other" },
      { label: "Зеркало №2", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/other" },
      { label: "Зеркало №3", url: "https://cdn.jsdelivr.net/gh/EtoNeYaProject/EtoNeYaProject.github.io@refs/heads/main/other" },
      { label: "Зеркало №4", url: "https://translate.yandex.ru/translate?url=https://etoneya.a9fm.site/other&lang=en-ru" },
      { label: "Зеркало №5", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/other" }
    ]
  },
  {
    title: "ВСЕ ВМЕСТЕ",
    icon: "layers",
    links: [
      { label: "Основа №1", url: "https://etoneya.a9fm.site/1" },
      { label: "Основа №2", url: "https://etoneya.a9fm.site/2" },
      { label: "Зеркало №1", url: "https://alley.serv00.net/1" },
      { label: "Зеркало №2", url: "https://alley.serv00.net/2" },
      { label: "Зеркало №3", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/1" },
      { label: "Зеркало №4", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/2" },
      { label: "Зеркало №5", url: "https://cdn.jsdelivr.net/gh/EtoNeYaProject/EtoNeYaProject.github.io@refs/heads/main/1" },
      { label: "Зеркало №6", url: "https://translate.yandex.ru/translate?url=https://etoneya.a9fm.site/1&lang=en-ru" },
      { label: "Зеркало №7", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/1" },
      { label: "Зеркало №8", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/2" }
    ]
  },
  {
    title: "ТЕСТОВАЯ",
    icon: "flask-conical",
    links: [
      { label: "Основа", url: "https://etoneya.a9fm.site/test" },
      { label: "Зеркало №1", url: "https://alley.serv00.net/test" },
      { label: "Зеркало №2", url: "https://raw.githubusercontent.com/EtoNeYaProject/etoneyaproject.github.io/refs/heads/main/test" },
      { label: "Зеркало №3", url: "https://cdn.jsdelivr.net/gh/EtoNeYaProject/EtoNeYaProject.github.io@refs/heads/main/test" },
      { label: "Зеркало №4", url: "https://translate.yandex.ru/translate?url=https://etoneya.a9fm.site/test&lang=en-ru" },
      { label: "Зеркало №5", url: "https://gitverse.ru/api/repos/nloverx/EtoNeYa_Subs/raw/branch/master/test" }
    ]
  }
];

// DOM Elements
const gridContainer = document.getElementById('keysGrid');
const toastContainer = document.getElementById('toastContainer');
const devModal = document.getElementById('devModal');
const openDevModal = document.getElementById('openDevModal');
const closeModal = document.getElementById('closeModal');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  renderKeyCards();
  initializeEventListeners();
});

// Render key cards dynamically
function renderKeyCards() {
  let html = '';
  
  subCategories.forEach((cat, index) => {
    let linksHtml = '';
    cat.links.forEach(link => {
      linksHtml += `
        <button class="key-btn" data-url="${link.url}">
          <div class="key-label">
            <span class="key-tag">${link.label}</span>
            <span class="key-desc mono">Скопировать ключ</span>
          </div>
          <div class="icon-wrapper">
            <i data-lucide="copy" style="width: 20px; height: 20px;"></i>
          </div>
        </button>
      `;
    });
    
    html += `
      <div class="card" style="animation-delay: ${0.6 + index * 0.1}s">
        <div class="card-header">
          <div class="card-icon">
            <i data-lucide="${cat.icon}"></i>
          </div>
          <h3 class="card-title">${cat.title}</h3>
        </div>
        <div class="keys-list">
          ${linksHtml}
        </div>
      </div>
    `;
  });
  
  gridContainer.innerHTML = html;
  lucide.createIcons();
}

// Initialize all event listeners
function initializeEventListeners() {
  // Copy buttons
  document.querySelectorAll('.key-btn').forEach(btn => {
    btn.addEventListener('click', handleCopyClick);
  });
  
  // Modal controls
  openDevModal.addEventListener('click', (e) => {
    e.preventDefault();
    devModal.classList.add('active');
  });
  
  closeModal.addEventListener('click', () => {
    devModal.classList.remove('active');
  });
  
  devModal.addEventListener('click', (e) => {
    if (e.target === devModal) {
      devModal.classList.remove('active');
    }
  });
}

// Handle copy button click
async function handleCopyClick() {
  const url = this.getAttribute('data-url');
  const iconWrapper = this.querySelector('.icon-wrapper');
  
  try {
    await navigator.clipboard.writeText(url);
    
    // Success state
    this.classList.add('success');
    iconWrapper.innerHTML = '<i data-lucide="check" style="width: 20px; height: 20px;"></i>';
    lucide.createIcons({ root: iconWrapper });
    
    showToast('Ключ успешно скопирован!');
    
    // Reset after 2 seconds
    setTimeout(() => {
      this.classList.remove('success');
      iconWrapper.innerHTML = '<i data-lucide="copy" style="width: 20px; height: 20px;"></i>';
      lucide.createIcons({ root: iconWrapper });
    }, 2000);
    
  } catch (err) {
    console.error('Ошибка копирования', err);
    alert('Не удалось скопировать. Пожалуйста, скопируйте вручную: ' + url);
  }
}

// Show toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i data-lucide="check-circle-2"></i> <span>${message}</span>`;
  
  toastContainer.appendChild(toast);
  lucide.createIcons({ root: toast });
  
  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('animationend', () => toast.remove());
  }, 3000);
}