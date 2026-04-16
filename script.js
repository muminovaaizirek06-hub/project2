// === DATA ===
    const courses = [
      { id: 1, title: "Python негиздери", cat: "Программалоо", time: "8 жума", price: "2 500 сом", desc: "Нөлдөн баштап Python программалоо тилин үйрөнүү.", img: "python.jpg", color: "#306998" },
      { id: 2, title: "JavaScript Pro", cat: "Программалоо", time: "10 жума", price: "3 200 сом", desc: "Заманбап веб-интерфейстерди түзүү.", img:"js.png", color: "#f7df1e" },
      { id: 3, title: "UI/UX Дизайн", cat: "Дизайн", time: "6 жума", price: "2 800 сом", desc: "Figma жана Adobe XD менен иштөө.", img: "dizain.jpg", color: "#ff6b6b" },
      { id: 4, title: "Графикалык Дизайн", cat: "Дизайн", time: "7 жума", price: "2 400 сом", desc: "Photoshop, Illustrator негиздери.", img: "dizaingraf.jpg", color: "#9c88ff" },
      { id: 5, title: "Англис тили B1", cat: "Тилдер", time: "12 жума", price: "1 900 сом", desc: "Сүйлөшүү жана грамматика.", img: "english.png", color: "#0077b6" },
      { id: 6, title: "Корей тили", cat: "Тилдер", time: "9 жума", price: "2 100 сом", desc: "Hangez жана базалык сөздөр.", img: "korei.png", color: "#ef476f" },
      { id: 7, title: "SMM & Таргет", cat: "Маркетинг", time: "5 жума", price: "2 200 сом", desc: "Социалдык тармактарда маркетинг.", img: "smm.png", color: "#118ab2" },
      { id: 8, title: "SEO Оптимизация", cat: "Маркетинг", time: "4 жума", price: "1 800 сом", desc: "Сайтты Google'до алдыга чыгаруу.", img: "seo.png", color: "#06d6a0" },
      { id: 9, title: "Flutter Мобилдик", cat: "Технология", time: "14 жума", price: "4 500 сом", desc: "iOS & Android тиркемелери.", img: "flutter.png", color: "#00f5d4" },
      { id: 10, title: "Киберкоопсуздук", cat: "Технология", time: "11 жума", price: "3 900 сом", desc: "Тармакты коргоо жана тестирлөө.", img: "kiber.png", color: "#7209b7" },
      { id: 11, title: "Excel & Data", cat: "Бизнес", time: "6 жума", price: "1 500 сом", desc: "Маалыматтарды анализдөө.", img: "exsel.png", color: "#219ebc" },
      { id: 12, title: "Бизнес Стратегия", cat: "Бизнес", time: "8 жума", price: "3 100 сом", desc: "Стартап жана башкаруу.", img: "biznes.png", color: "#8ac926" },
      { id: 13, title: "Python AI", cat: "Программалоо", time: "12 жума", price: "4 800 сом", desc: "Машиналык үйрөнүү негиздери.", img: "python ai.png", color: "#ff9f1c" },
      { id: 14, title: "3D Моделирование", cat: "Дизайн", time: "9 жума", price: "3 400 сом", desc: "Blender менен иштөө.", img: "3d.jpeg", color: "#6a4c93" },
      { id: 15, title: "Япон тили", cat: "Тилдер", time: "10 жума", price: "2 300 сом", desc: "Hiragana, Katakana жана грамматика.", img: "japon.jpg", color: "#e63946" },
      { id: 16, title: "Digital Marketing", cat: "Маркетинг", time: "7 жума", price: "2 700 сом", desc: "Контексттик реклама жана аналитика.", img: "market.jpg", color: "#2b2d42" },
      { id: 17, title: "React.js", cat: "Программалоо", time: "11 жума", price: "3 600 сом", desc: "Заманбап фронтенд фреймворк.", img: "react.jpg", color: "#61dafb" },
      { id: 18, title: "Cloud Computing", cat: "Технология", time: "8 жума", price: "3 200 сом", desc: "AWS, Azure негиздери.", img: "cloud.png", color: "#00b4d8" },
      { id: 19, title: "Финансылык сабаттуулук", cat: "Бизнес", time: "5 жума", price: "1 200 сом", desc: "Бюджет, инвестиция, үнөмдөө.", img: "finans.jpg", color: "#38b000" },
      { id: 20, title: "Кыргыз тили адабияты", cat: "Тилдер", time: "6 жума", price: "1 100 сом", desc: "Грамматика жана чыгармачылык.", img: "kyrgyz.png", color: "#9d0208" },
      { id: 21, title: "Cyber Security Pro", cat: "Технология", time: "13 жума", price: "4 200 сом", desc: "Advanced penetration testing.", img: "kbr.jpg", color: "#03071e" },
      { id: 22, title: "Video Editing Pro", cat: "Дизайн", time: "7 жума", price: "2 900 сом", desc: "Premiere Pro & After Effects.", img: "video.jpg", color: "#ffbe0b" }
    ];

    let currentUser = null;
    let selectedRating = 0;

    // === INIT ===
    document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    renderCourses();
    setupEventListeners();
    renderFeedbacks(); // 
   });

    // === THEME ===
    function loadTheme() {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
      updateThemeIcon();
    }
    document.getElementById('themeToggle').addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
      localStorage.setItem('theme', isDark ? 'light' : 'dark');
      updateThemeIcon();
    });
    function updateThemeIcon() {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
    }

    // === MODALS ===
    function openModal(id) {
      document.getElementById(id).classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeModal(id) {
      document.getElementById(id).classList.remove('active');
      document.body.style.overflow = '';
    }
    window.addEventListener('click', e => {
      if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
    });

    // === TABS (Auth) ===
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab + 'Tab').classList.add('active');
      });
    });

    // === AUTH LOGIC ===
    document.getElementById('registerForm').addEventListener('submit', e => {
      e.preventDefault();
      const user = {
        name: document.getElementById('regName').value,
        email: document.getElementById('regEmail').value,
        role: document.getElementById('regRole').value
      };
      localStorage.setItem('user', JSON.stringify(user));
      loginSuccess(user);
      closeModal('authModal');
    });

    document.getElementById('loginForm').addEventListener('submit', e => {
      e.preventDefault();
      // Simulation: accept any email/pass for demo
      const stored = JSON.parse(localStorage.getItem('user') || 'null');
      if (stored) {
        loginSuccess(stored);
      } else {
        alert('Катталган колдонуучу табылган жок. Сураныч, катталыңыз.');
      }
      closeModal('authModal');
    });

    function loginSuccess(user) {
      currentUser = user;
      document.getElementById('logoutBtn').style.display = 'inline-flex';
      document.getElementById('loginBtn').style.display = 'none';
      document.getElementById('registerBtn').style.display = 'none';
      document.getElementById('userBadge').style.display = 'block';
      document.getElementById('userBadge').textContent = `👤 ${user.name} (${user.role === 'teacher' ? 'Мугалим' : 'Студент'})`;
      openModal('dashboardModal');
    }

    document.getElementById('logoutBtn').addEventListener('click', () => {
      currentUser = null;
      localStorage.removeItem('user');
      document.getElementById('logoutBtn').style.display = 'none';
      document.getElementById('loginBtn').style.display = 'inline-flex';
      document.getElementById('registerBtn').style.display = 'inline-flex';
      document.getElementById('userBadge').style.display = 'none';
    });

    // === DASHBOARD (ROLE BASED) ===
    function renderDashboard() {
      const title = document.getElementById('dashTitle');
      const welcome = document.getElementById('dashWelcome');
      const grid = document.getElementById('dashGrid');
      
      if (!currentUser) return;
      title.textContent = currentUser.role === 'teacher' ? '👨‍🏫 Мугалим кабинети' : '👨‍🎓 Студент кабинети';
      welcome.textContent = `Салам, ${currentUser.name}! Сиз ${currentUser.role === 'teacher' ? 'мугалим' : 'студент'} катары кирдиңиз.`;

      const teacherCards = [
        { icon: '📚', title: 'Курстарым', val: '3' },
        { icon: '👥', title: 'Студенттер', val: '142' },
        { icon: '📊', title: 'Кирешелер', val: '85 400 ₽' },
        { icon: '📝', title: 'Тапшырмалар', val: '12' }
      ];
      const studentCards = [
        { icon: '🎓', title: 'Курстарым', val: '2' },
        { icon: '⏱️', title: 'Сааттар', val: '34' },
        { icon: '📜', title: 'Сертификаттар', val: '1' },
        { icon: '✅', title: 'Аякталды', val: '75%' }
      ];

      grid.innerHTML = '';
      const cards = currentUser.role === 'teacher' ? teacherCards : studentCards;
      cards.forEach(c => {
        grid.innerHTML += `
          <div class="dash-card">
            <div class="dash-icon">${c.icon}</div>
            <div class="dash-title">${c.title}</div>
            <div class="dash-val">${c.val}</div>
          </div>`;
      });
    }

    // === COURSES ===
    function renderCourses() {
      const grid = document.getElementById('coursesGrid');
      const filters = document.getElementById('categoryFilters');
      
      const categories = ['Бардыгы', ...new Set(courses.map(c => c.cat))];
      filters.innerHTML = categories.map(cat => `<button class="filter-btn ${cat==='Бардыгы'?'active':''}" data-cat="${cat}">${cat}</button>`).join('');
      
      grid.innerHTML = '';
      courses.forEach(c => {
        grid.innerHTML += `
          <div class="course-card" data-cat="${c.cat}">
            <div class="course-img">
  <img src="${c.img}" alt="${c.title}" style="width:100%; height:100%; object-fit:cover;">
   </div>
            <div class="course-body">
              <span class="course-tag" style="background:${c.color}20; color:${c.color}">${c.cat}</span>
              <h3 class="course-title">${c.title}</h3>
              <p class="course-desc">${c.desc}</p>
              <div class="course-meta">
                <span>⏱ ${c.time}</span>
                <span class="course-price">${c.price}</span>
              </div>
              <button class="btn btn-outline" style="width:100%; margin-top:10px;" onclick="showCourseInfo(${c.id})">ℹ️ Маалымат алуу</button>
            </div>
          </div>`;
      });

      // Filters
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const cat = btn.dataset.cat;
          document.querySelectorAll('.course-card').forEach(card => {
            card.style.display = (cat === 'Бардыгы' || card.dataset.cat === cat) ? 'block' : 'none';
          });
        });
      });
    }

    function showCourseInfo(id) {
      const c = courses.find(x => x.id === id);
      document.getElementById('cmTitle').textContent = c.title;
      document.getElementById('cmDetails').innerHTML = `
        <div class="detail-row"><span class="detail-label">Категория</span><span>${c.cat}</span></div>
        <div class="detail-row"><span class="detail-label">Узактыгы</span><span>${c.time}</span></div>
        <div class="detail-row"><span class="detail-label">Баасы</span><span class="course-price">${c.price}</span></div>
        <div class="detail-row"><span class="detail-label">Сүрөттөмө</span><span>${c.desc}</span></div>
        <div class="detail-row"><span class="detail-label">Мугалим</span><span>Тажрыйбалуу эксперт</span></div>
        <div class="detail-row"><span class="detail-label">Сертификат</span><span>✅ Ооба</span></div>
      `;
      openModal('courseModal');
    }

    function enrollCourse() {
      if (!currentUser) {
        alert('Курска жазылуу үчүн системага кириңиз!');
        closeModal('courseModal');
        openModal('authModal');
        return;
      }
      alert('🎉 Ийгиликтүү жазылдыңыз! Курс материалы дароо жеткиликтүү болот.');
      closeModal('courseModal');
    }

    // === FEEDBACK ===
    const ratingSelect = document.getElementById('ratingSelect');
    ratingSelect.querySelectorAll('span').forEach(star => {
      star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.val);
        ratingSelect.querySelectorAll('span').forEach((s, i) => s.classList.toggle('active', i < selectedRating));
      });
      star.addEventListener('mouseenter', () => {
        const val = parseInt(star.dataset.val);
        ratingSelect.querySelectorAll('span').forEach((s, i) => s.style.color = i < val ? '#ffc107' : '#ccc');
      });
      star.addEventListener('mouseleave', () => {
        ratingSelect.querySelectorAll('span').forEach(s => s.style.color = '');
      });
    });

    document.getElementById('feedbackForm').addEventListener('submit', e => {
  e.preventDefault();

  if (selectedRating === 0) { 
    alert('Баалоону тандаңыз!'); 
    return; 
  }

  const feedback = {
    name: document.getElementById('fbName').value,
    text: document.getElementById('fbText').value,
    rating: selectedRating,
    date: new Date().toLocaleString()
  };

  const list = JSON.parse(localStorage.getItem('feedbacks') || '[]');
  list.unshift(feedback);
  localStorage.setItem('feedbacks', JSON.stringify(list));

  renderFeedbacks();

  document.getElementById('feedbackSuccess').style.display = 'block';
  document.getElementById('feedbackForm').reset();
  selectedRating = 0;

  ratingSelect.querySelectorAll('span').forEach(s => s.classList.remove('active'));

  setTimeout(() => {
    document.getElementById('feedbackSuccess').style.display = 'none';
  }, 3000);
});

    // === MOBILE MENU ===
    document.getElementById('mobileToggle').addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('active');
      document.getElementById('navActions').classList.toggle('active');
    });

    // === EVENT LISTENERS ===
    function setupEventListeners() {
      document.getElementById('loginBtn').addEventListener('click', () => openModal('authModal'));
      document.getElementById('registerBtn').addEventListener('click', () => {
        openModal('authModal');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelector('[data-tab="register"]').classList.add('active');
        document.getElementById('registerTab').classList.add('active');
      });
      
      // Open dashboard on badge click
      document.getElementById('userBadge').addEventListener('click', () => {
        renderDashboard();
        openModal('dashboardModal');
      });
    }
    function renderFeedbacks() {
  const container = document.getElementById('feedbackList');
  const list = JSON.parse(localStorage.getItem('feedbacks') || '[]');

  if (list.length === 0) {
    container.innerHTML = "<p style='text-align:center; color:gray;'>Азырынча пикир жок</p>";
    return;
  }

  container.innerHTML = list.map(f => `
    <div style="
      background: var(--bg-card);
      padding: 15px;
      border-radius: 10px;
      margin-bottom: 15px;
      box-shadow: var(--shadow);
    ">
      <strong>${f.name}</strong> 
      <span style="color:#ffc107;">${'★'.repeat(f.rating)}</span>
      <p>${f.text}</p>
      <small style="color:gray;">${f.date}</small>
    </div>
  `).join('');
}

  const menuBtn = document.getElementById('menuBtn');
  const navLinks = document.getElementById('navLinks');

  menuBtn.addEventListener('click', () => {
    // Менюну ачуу/жабуу
    navLinks.classList.toggle('active');
    
    // Гамбургерди X-ке айлантуу
    menuBtn.classList.toggle('open');
  });

  // Меню ачык турганда экрандын башка жерин бассаңыз жабылып калат
  document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
      menuBtn.classList.remove('open');
    }
  });
