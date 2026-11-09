const resources = [
  { id: 'youtube', type: 'video', typeLabel: '동영상', title: '담당교수 추천 유튜브', description: '세미나 주제와 연결해 먼저 살펴볼 외부 학습자료입니다.', source: 'YouTube', status: 'verified', statusLabel: '외부 링크 확인', externalUrl: 'https://www.youtube.com/watch?v=C1AGXvJZeb0' },
  { id: 'infographic', type: 'image', typeLabel: '인포그래픽', title: '일본 지방 균형 발전 정책 변천사', description: '정책 단계와 시행착오를 한눈에 비교하는 제공 이미지입니다.', source: '제공 이미지', status: 'verified', statusLabel: '파일 확인됨', file: 'assets/learning/japan-balance-infographic.png', visual: true },
  { id: 'policy-report', type: 'report', typeLabel: '정책분석보고서', title: '일본 국토 개발 정책의 변천과 시행착오를 통해 본 한국 지방 발전 전략', description: '일본 국토 개발 정책을 바탕으로 한국 지방 발전 전략을 살펴보는 제공 PDF입니다.', source: '제공 PDF', status: 'verified', statusLabel: '파일 확인됨', file: 'assets/learning/policy-analysis.pdf' },
  { id: 'comparison-report', type: 'report', typeLabel: '비교분석보고서', title: '한·일 지방 균형 발전 정책의 역사와 구조적 한계', description: '한국과 일본의 지방 균형 발전 정책을 비교해 읽는 제공 PDF입니다.', source: '제공 PDF', status: 'verified', statusLabel: '파일 확인됨', file: 'assets/learning/comparison-analysis.pdf' },
  { id: 'concept-guide', type: 'report', typeLabel: '개념해설', title: '일본 사례로 풀어보는 수도권 집중과 지방 소멸 문제의 이해', description: '수도권 집중과 지방 소멸 문제를 일본 사례와 함께 읽는 제공 PDF입니다.', source: '제공 PDF', status: 'verified', statusLabel: '파일 확인됨', file: 'assets/learning/concept-guide.pdf' },
  { id: 'local-extinction', type: 'report', typeLabel: '연구보고서', title: '일본의 실패에서 찾는 지방소멸 해법 보고서', description: '일본 사례를 바탕으로 지방소멸 대응 방향을 살펴보는 제공 PDF입니다.', source: '제공 PDF', status: 'verified', statusLabel: '파일 확인됨', file: 'assets/learning/local-extinction.pdf' },
];

const presentations = [
  { no: '01', name: '윤태영 원우님', title: '베트남 부동산시장의 현황, 주요 특징 및 향후 전망', status: '표기 확인 대기 · 발표자와 아카이브 성명이 다릅니다.' },
  { no: '02', name: '정혜빈 원우님', title: '「빈 건축물 정비 및 지원에 관한 특별법」과 부동산 중개·관리 실무의 역할', status: '발표용 원본 파일 확인 중' },
  { no: '03', name: '김윤주 원우님', title: '비욘드 조닝의 건축물에의 적용', status: '발표용 원본 파일 확인 중' },
  { no: '04', name: '조광환 원우님', title: '공공기관 지방이전 정책의 실증적 효과와 국토공간 패러다임 전환 방향', status: '발표용 원본 파일 확인 중' },
  { no: '05', name: '박준영 원우님', title: '수분양자 보호는 대주 보호인가 (분양보증의 간접 금융효과와 대주의 위험관리 책임)', status: '발표용 원본 파일 확인 중' }
];

const students = [
  { no: '01', name: '김상열', title: '장사시설과 도시재생의 연계가능성', files: true },
  { no: '02', name: '김원택', title: '대한민국 상하수도 시설의 효율적 관리 방안', files: true },
  { no: '03', name: '김윤주', title: '비욘드 조닝의 건축물에의 적용', files: true },
  { no: '04', name: '박준영', title: '수분양자 보호는 대주 보호인가', files: true },
  { no: '05', name: '박태영', title: '미제출', notSubmitted: true },
  { no: '06', name: '석광옥', title: '스마트시티와 인테리어의 초연결 시대: 도시는 유기체처럼 살아 움직인다', files: true },
  { no: '07', name: '성민우', title: '지방소멸 대응을 위한 한국형 최적 다핵화 모델 연구', files: true },
  { no: '08', name: '유태영', title: '베트남 부동산시장의 현황, 주요 특징 및 향후 전망', files: true },
  { no: '09', name: '이강석', title: '미제출', notSubmitted: true },
  { no: '10', name: '임선옥', title: '국토공간과 관련한 부동산과 문화', files: true },
  { no: '11', name: '정혜빈', title: '「빈 건축물 정비 및 지원에 관한 특별법」과 부동산 중개·관리 실무의 역할', files: true },
  { no: '12', name: '조광환', title: '공공기관 지방이전 정책의 실증적 효과와 국토공간 패러다임 전환 방향', files: true },
  { no: '13', name: '조은경', title: '인구의 수도권 집중에 따른 지역 격차와 국토 균형발전 방안', files: true },
  { no: '14', name: '최정윤', title: '미래형 산업단지와 ESG의 RE100 산단, 기업이 선택하는 상품이 되려면', files: true }
];

const archiveFiles = {
  '01': { submission: 'assets/archive/01/submission.pdf', evaluation: 'assets/archive/01/evaluation.pdf' },
  '02': { submission: 'assets/archive/02/submission.pdf', evaluation: 'assets/archive/02/evaluation.pdf' },
  '03': { submission: 'assets/archive/03/submission.pdf', evaluation: 'assets/archive/03/evaluation.pdf' },
  '04': { submission: 'assets/archive/04/submission.pdf', evaluation: 'assets/archive/04/evaluation.pdf' },
  '06': { submission: 'assets/archive/06/submission.pdf', evaluation: 'assets/archive/06/evaluation.pdf' },
  '07': { submission: 'assets/archive/07/submission.pdf', evaluation: 'assets/archive/07/evaluation.pdf' },
  '08': { submission: 'assets/archive/08/submission.pdf', evaluation: 'assets/archive/08/evaluation.pdf' },
  '10': { submission: 'assets/archive/10/submission.pdf', evaluation: 'assets/archive/10/evaluation.pdf' },
  '11': { submission: 'assets/archive/11/submission.pdf', evaluation: 'assets/archive/11/evaluation.pdf' },
  '12': { submission: 'assets/archive/12/submission.pdf', evaluation: 'assets/archive/12/evaluation.pdf' },
  '13': { submission: 'assets/archive/13/submission.pdf', evaluation: 'assets/archive/13/evaluation.pdf' },
  '14': { submission: 'assets/archive/14/submission.pdf', evaluation: 'assets/archive/14/evaluation.pdf' }
};

const resourceGrid = document.querySelector('#resource-grid');
const presentationGrid = document.querySelector('#presentation-grid');
const archiveBody = document.querySelector('#archive-body');
const resourceDialog = document.querySelector('#resource-dialog');
const resourceDialogTitle = document.querySelector('#resource-dialog-title');
const resourceDialogBody = document.querySelector('#resource-dialog-body');
const mascot = document.querySelector('#scroll-mascot');
const mascotImage = document.querySelector('[data-mascot-image]');
const mascotDirection = document.querySelector('[data-mascot-direction]');
const mascotLabel = document.querySelector('[data-mascot-label]');
const mascotAnchor = document.querySelector('[data-mascot-anchor]');
const scrollSections = [
  { id: 'welcome', label: '인사말' },
  { id: 'learning', label: '학습자료' },
  { id: 'presentations', label: '발표연구' },
  { id: 'archive', label: '과제·평가' },
  { id: 'links', label: '공식 링크' }
];
const mascotAssets = {
  down: { src: 'assets/mascots/handoli.jpg', alt: '한돌이 안내 캐릭터', text: '아래로 이동' },
  up: { src: 'assets/mascots/hansuni.jpg', alt: '한순이 안내 캐릭터', text: '위로 이동' }
};
let lastScrollY = window.scrollY;
let scrollFrame = null;
let scrollDirection = 'down';

function renderResources(filter = 'all') {
  const visible = resources.filter((item) => filter === 'all' || item.type === filter);
  resourceGrid.innerHTML = visible.map((item) => {
    const isPending = item.status === 'pending';
    const action = item.externalUrl
      ? `<a class="card-button" href="${item.externalUrl}" target="_blank" rel="noopener noreferrer">자료 열기 ↗</a>`
      : item.file
        ? `<button class="card-button" type="button" data-resource-id="${item.id}">자료 열기</button>`
        : `<span class="disabled-note">${item.statusLabel}</span>`;
    const visual = item.visual ? `<div class="resource-visual"><img src="${item.file}" alt="일본 지방 균형 발전 정책 변천사 인포그래픽 미리보기" /></div>` : '';
    return `<article class="resource-card ${isPending ? 'pending' : ''}">
      <div class="card-topline"><span class="resource-type">${item.typeLabel}</span><span class="status-label ${isPending ? 'pending-label' : ''}">${item.statusLabel}</span></div>
      ${visual}<h3>${item.title}</h3><p>${item.description}</p>
      <div class="resource-card-footer"><span class="resource-source">${item.source}</span>${action}</div>
    </article>`;
  }).join('') || '<p class="muted">해당 유형의 자료가 없습니다.</p>';
}

function renderPresentations() {
  presentationGrid.innerHTML = presentations.map((item) => `<article class="presentation-card"><span class="presentation-number">${item.no}</span><h3>${item.name}</h3><p>${item.title}</p><div class="presentation-status">${item.status}</div></article>`).join('');
}

function archiveViewer(item, field) {
  if (item.notSubmitted) return '<span class="not-submitted">미제출</span>';
  const label = field === 'submission' ? '원우 제출과제' : '교수평가서';
  const file = archiveFiles[item.no][field];
  return `<details class="archive-disclosure"><summary>${label} 자료 펼치기</summary><div class="embedded-material"><p><strong>${item.no} · ${item.name} 원우님</strong> · ${label}</p><iframe loading="lazy" title="${item.no} ${item.name} ${label}" src="${file}"></iframe></div></details>`;
}

function renderArchive() {
  const query = (document.querySelector('#archive-search').value || '').trim().toLowerCase();
  const filter = document.querySelector('#archive-filter').value;
  const visible = students.filter((item) => {
    const matchesQuery = !query || `${item.name} ${item.title}`.toLowerCase().includes(query);
    const matchesFilter = filter === 'all' || (filter === 'available' && item.files) || (filter === 'not-submitted' && item.notSubmitted);
    return matchesQuery && matchesFilter;
  });
  document.querySelector('#archive-count').textContent = `${visible.length}명`;
  archiveBody.innerHTML = visible.map((item) => {
    const status = item.notSubmitted ? '<span class="archive-state missing">미제출</span>' : '<span class="archive-state">파일 확인됨 · 공개하지 않음</span>';
    return `<tr><td>${item.no}</td><td>${item.name} 원우님</td><td><span class="research-title">${item.title}</span><span class="${item.notSubmitted ? 'archive-state missing' : 'archive-state'}">${item.notSubmitted ? '미제출' : '자료 삽입 완료'}</span></td><td>${archiveViewer(item, 'submission')}</td><td>${archiveViewer(item, 'evaluation')}</td></tr>`;
  }).join('') || '<tr><td colspan="5">검색 결과가 없습니다.</td></tr>';
}

function openResource(item) {
  resourceDialogTitle.textContent = item.title;
  resourceDialogBody.innerHTML = item.type === 'image'
    ? `<p class="modal-caption">${item.description}</p><img src="${item.file}" alt="${item.title}" />`
    : `<p class="modal-caption">${item.description}</p><iframe title="${item.title}" src="${item.file}"></iframe>`;
  if (typeof resourceDialog.showModal === 'function') resourceDialog.showModal();
  else resourceDialog.setAttribute('open', '');
}

function closeDialog(dialog) { if (dialog?.open) dialog.close(); else dialog?.removeAttribute('open'); }

document.addEventListener('click', (event) => {
  const resourceButton = event.target.closest('[data-resource-id]');
  if (resourceButton) openResource(resources.find((item) => item.id === resourceButton.dataset.resourceId));
  if (event.target.closest('[data-close-dialog]')) { closeDialog(resourceDialog); }
});

document.querySelector('#resource-filter').addEventListener('change', (event) => renderResources(event.target.value));
document.querySelector('#archive-search').addEventListener('input', renderArchive);
document.querySelector('#archive-filter').addEventListener('change', renderArchive);
document.querySelectorAll('dialog').forEach((dialog) => dialog.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(dialog); }));

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');
menuToggle.addEventListener('click', () => { const isOpen = siteNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(isOpen)); });
siteNav.addEventListener('click', (event) => { if (event.target.matches('a')) { siteNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); } });

function updateEventStatus() {
  const statusNode = document.querySelector('[data-event-status]');
  const now = new Date();
  const eventStart = new Date('2026-11-10T20:00:00+09:00');
  const eventEnd = new Date('2026-11-10T22:00:00+09:00');
  statusNode.textContent = now < eventStart ? '세미나 전' : (now < eventEnd ? '세미나 진행 중' : '세미나 종료');
}

function updateScrollMascot() {
  const scrollY = window.scrollY;
  if (Math.abs(scrollY - lastScrollY) > 2) scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
  lastScrollY = scrollY;
  const marker = scrollY + window.innerHeight * 0.34;
  let current = scrollSections[0];
  for (const section of scrollSections) {
    const node = document.getElementById(section.id);
    if (node && node.offsetTop <= marker) current = section;
  }
  const asset = mascotAssets[scrollDirection];
  mascot.classList.toggle('is-down', scrollDirection === 'down');
  mascot.classList.toggle('is-up', scrollDirection === 'up');
  mascotImage.src = asset.src;
  mascotImage.alt = asset.alt;
  mascotDirection.textContent = asset.text;
  mascotLabel.textContent = current.label;
  mascotAnchor.href = `#${current.id}`;
}

window.addEventListener('scroll', () => {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(() => {
    updateScrollMascot();
    scrollFrame = null;
  });
}, { passive: true });
window.addEventListener('resize', updateScrollMascot);

renderResources();
renderPresentations();
renderArchive();
updateEventStatus();
updateScrollMascot();
setInterval(updateEventStatus, 60000);
