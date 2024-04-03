const body = document.querySelector('body');

// 헤더
const header = document.createElement('header');

// 네비게이션
const navSection = document.createElement('nav');
const navOption = document.createElement('ul');

const links = [
  { text: '소개', href: '#about' },
  { text: '학력', href: '#education' },
  { text: '자격증', href: '#certificate' },
  { text: '기술', href: '#skills' },
  { text: '프로젝트', href: '#projects' },
];

for (const link of links) {
  const li = document.createElement('li');
  const anchor = document.createElement('a');
  anchor.href = link.href;
  anchor.textContent = link.text;
  li.appendChild(anchor);
  navOption.appendChild(li);
}

navSection.appendChild(navOption);
header.appendChild(navSection);

body.appendChild(header);

// 메인
const main = document.createElement('main');

// 소개
const aboutSection = document.createElement('div');
aboutSection.id = 'about';

const profileImg = document.createElement('img');
profileImg.src = 'images/profile_img.jpg';

const aboutInfo = document.createElement('div');

const aboutName = document.createElement('h2');
aboutName.textContent = '김민영';

const aboutTable = document.createElement('table');

const aboutTableRow1 = document.createElement('tr');
const aboutTableCol11 = document.createElement('td');
aboutTableCol11.textContent = '생년월일';
const aboutTableCol12 = document.createElement('td');
aboutTableCol12.textContent = '2002년 10월 21일(만21세)';

const aboutTableRow2 = document.createElement('tr');
const aboutTableCol21 = document.createElement('td');
aboutTableCol21.textContent = 'Email';
const aboutTableCol22 = document.createElement('td');
aboutTableCol22.textContent = 'nonamed1021@naver.com';

const aboutTableRow3 = document.createElement('tr');
const aboutTableCol31 = document.createElement('td');
aboutTableCol31.textContent = 'Github';
const aboutTableCol32 = document.createElement('td');
aboutTableCol32.textContent = 'github.com/min-young417';

aboutTableRow1.appendChild(aboutTableCol11);
aboutTableRow1.appendChild(aboutTableCol12);

aboutTableRow2.appendChild(aboutTableCol21);
aboutTableRow2.appendChild(aboutTableCol22);

aboutTableRow3.appendChild(aboutTableCol31);
aboutTableRow3.appendChild(aboutTableCol32);

aboutTable.appendChild(aboutTableRow1);
aboutTable.appendChild(aboutTableRow2);
aboutTable.appendChild(aboutTableRow3);

aboutInfo.appendChild(aboutName);
aboutInfo.appendChild(aboutTable);

aboutSection.appendChild(profileImg);
aboutSection.appendChild(aboutInfo);

main.appendChild(aboutSection);

// 학력
const educationSection = document.createElement('section');
educationSection.id = 'education';

const educationTitle = document.createElement('h2');
educationTitle.textContent = '학력';

const educationTable = document.createElement('table');

const educationTableRow1 = document.createElement('tr');
const educationTableCol11 = document.createElement('td');
educationTableCol11.textContent = '2018.03~2021.02';
const educationTableCol12 = document.createElement('td');
educationTableCol12.textContent = '동여자고등학교 졸업';

const educationTableRow2 = document.createElement('tr');
const educationTableCol21 = document.createElement('td');
educationTableCol21.textContent = '2021.03~현재';
const educationTableCol22 = document.createElement('td');
educationTableCol22.textContent = '경성대학교 재학';

educationTableRow1.appendChild(educationTableCol11);
educationTableRow1.appendChild(educationTableCol12);

educationTableRow2.appendChild(educationTableCol21);
educationTableRow2.appendChild(educationTableCol22);

educationTable.appendChild(educationTableRow1);
educationTable.appendChild(educationTableRow2);

educationSection.appendChild(educationTitle);
educationSection.appendChild(educationTable);

main.appendChild(educationSection);

// 자격증
const certificateSection = document.createElement('section');
certificateSection.id = 'certificate';

const certificateTitle = document.createElement('h2');
certificateTitle.textContent = '자격증';

const certificateTable = document.createElement('table');

const certificateTableRow1 = document.createElement('tr');
const certificateTableCol11 = document.createElement('td');
certificateTableCol11.textContent = '2023.11';
const certificateTableCol12 = document.createElement('td');
certificateTableCol12.textContent = 'AZ-900:Microsoft Azure';

certificateTableRow1.appendChild(certificateTableCol11);
certificateTableRow1.appendChild(certificateTableCol12);

certificateTable.appendChild(certificateTableRow1);

certificateSection.appendChild(certificateTitle);
certificateSection.appendChild(certificateTable);

main.appendChild(certificateSection);

// 활동
const activitySection = document.createElement('section');
activitySection.id = 'activity';

const activityTitle = document.createElement('h2');
activityTitle.textContent = '활동';

const activityTable = document.createElement('table');

const activityTableRow1 = document.createElement('tr');
const activityTableCol11 = document.createElement('td');
activityTableCol11.textContent = '2024.01~2024.02';
const activityTableCol12 = document.createElement('td');
activityTableCol12.textContent = '[Intel]엣지 AI SW 아카데미 조교';

activityTableRow1.appendChild(activityTableCol11);
activityTableRow1.appendChild(activityTableCol12);

activityTable.appendChild(activityTableRow1);

activitySection.appendChild(activityTitle);
activitySection.appendChild(activityTable);

main.appendChild(activitySection);

// 기술
const skillsSection = document.createElement('section');
skillsSection.id = 'skills';

const skillsTitle = document.createElement('h2');
skillsTitle.textContent = '기술';

const skillsList = document.createElement('ul');

function createSkillItem(imageUrl) {
  const skillItem = document.createElement('li');
  const skillImg = document.createElement('img');
  skillImg.src = imageUrl;
  skillItem.appendChild(skillImg);
  return skillItem;
}

const skills = ['images/html-5.png', 'images/css-3.png', 'images/js.png', 'images/c-.png', 
                'images/c-sharp.png', 'images/java.png', 'images/python.png'];

for (const skill of skills) {
  const skillItem = createSkillItem(skill);
  skillsList.appendChild(skillItem);
}

skillsSection.appendChild(skillsTitle);
skillsSection.appendChild(skillsList);

main.appendChild(skillsSection);

// 프로젝트
const projectsSection = document.createElement('section');
projectsSection.id = 'projects';

const projectsTitle = document.createElement('h2');
projectsTitle.textContent = '프로젝트';

const projectsList = document.createElement('ul');

const projectsItem1 = document.createElement('li');
const projectsItem2 = document.createElement('li');

function createTableRow(cell1Content, cell2Content) {
  const tableRow = document.createElement('tr');
  const tableCol1 = document.createElement('td');
  tableCol1.textContent = cell1Content;
  const tableCol2 = document.createElement('td');
  tableCol2.textContent = cell2Content;
  tableRow.appendChild(tableCol1);
  tableRow.appendChild(tableCol2);
  return tableRow;
}

function createProjectSection(imgUrl, title, details) {
  const projectSection = document.createElement('section');
  const projectImg = document.createElement('img');
  projectImg.src = imgUrl;
  const projectInfo = document.createElement('div');
  const projectTitle = document.createElement('h2');
  projectTitle.textContent = title;
  const projectTable = document.createElement('table');
  for (const detail of details) {
    const tableRow = createTableRow(detail[0], detail[1]);
    projectTable.appendChild(tableRow);
  }
  projectInfo.appendChild(projectTitle);
  projectInfo.appendChild(projectTable);
  projectSection.appendChild(projectImg);
  projectSection.appendChild(projectInfo);
  return projectSection;
}

const project1Details = [
  ['기간', '2023.09~2023.11'],
  ['기술', 'wordpress'],
  ['소개', 'CS LAB에 대해 소개하고 연구실 구성원들이 활용할 수 있는 공간을 만들기 위한 홈페이지'],
];
const project2Details = [
  ['기간', '2023.07~2023.08'],
  ['기술', 'Javascript, HTML/CSS, Node.js, Express, MySQL, Nginx, AWS EC2'],
  ['소개', '자기만의 플레이리스트를 구성하여 음악을 들을 수 있는 음원 스트리밍 사이트'],
];

const project1 = createProjectSection('images/github.png', 'CS LAB 홈페이지', project1Details);
const project2 = createProjectSection('images/github.png', 'Weekly Music', project2Details);

projectsItem1.appendChild(project1);
projectsItem2.appendChild(project2);

projectsList.appendChild(projectsItem1);
projectsList.appendChild(projectsItem2);

projectsSection.appendChild(projectsTitle);
projectsSection.appendChild(projectsList);

main.appendChild(projectsSection);

body.appendChild(main);
