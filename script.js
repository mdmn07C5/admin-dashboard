const loremIpsum = ['Voluptas est quos sed molestias. Qui quaerat tenetur et quia deleniti est velit rem. Dolores ullam rerum dolore nemo et modi qui est. Consequatur rerum non et et veritatis. Quis facere nobis perspiciatis aliquid distinctio. Quia nihil maxime unde eaque.',
    'Minima consequuntur ut tempora esse nemo voluptas vel quae. Quod et alias est omnis totam atque earum ullam. Soluta voluptatum dicta a quasi.',
    'Voluptas molestiae reprehenderit omnis neque voluptas atque est. Iusto non quis corporis. Cupiditate natus eos vitae hic unde.', 
    'Dolores dolore eos aut at iure rerum. Vitae molestiae delectus veritatis. Aut eaque incidunt et omnis voluptatibus voluptates ut expedita. Id autem qui est quidem laudantium nisi laborum. Ipsam modi perferendis praesentium dolorum. Perspiciatis ut quos illo aut doloremque nulla et.',
    'Magni cum deserunt praesentium nobis nulla. Et veritatis eaque vero ducimus assumenda ipsum. Temporibus explicabo praesentium debitis autem dolore et consequatur consequuntur.', 
    'Ut nesciunt delectus ut. Ducimus molestias eligendi officia perferendis quasi earum. Autem nostrum animi fugit consequuntur quibusdam. Vel nam inventore accusantium fuga aperiam quam non. Sed dolorem inventore nostrum quia reiciendis laudantium voluptatum.'
];


function twoRandomElements(arr) {
    const i = Math.floor(Math.random() * arr.length);
    let j = Math.floor(Math.random() * arr.length);
    while (j === i) {
        j = Math.floor(Math.random() * arr.length); 
    }
    return [arr[i], arr[j]];
}

function createContentText(title) {
    const cardContent = document.createElement('div');
    cardContent.classList = 'card-content';

    const h3 = document.createElement('h3');
    h3.innerHTML = title;

    const p = document.createElement('p');
    p.innerHTML = twoRandomElements(loremIpsum).join(' ');

    cardContent.appendChild(h3);
    cardContent.appendChild(p)

    return cardContent
}

function createButtonRow() {
    const buttonPaths = [
        './assets/fav.svg',
        './assets/watch.svg',
        './assets/fork.svg',
    ]

    const buttonRow = document.createElement('div');
    buttonRow.classList.add('card-buttons');
    buttonPaths.forEach((buttonPath) => {
        const button = document.createElement('button');
        button.type = 'button';        
        const image = document.createElement('img');
        image.src = buttonPath;
        
        button.appendChild(image);
        buttonRow.appendChild(button);
    })
    return buttonRow;
}

function generateProjectContent() {
    const projectsContainer = document.querySelector('#projects-container');

    const titles = [
        'Super Cool Project', 
        'Less Cool Project', 
        'Impossible App', 'Easy Peasy App', 
        'Ad Blocker', 
        'Money Maker',
    ];
    
    titles.forEach((title) => {
        const card = document.createElement('div');
        card.classList = 'card';

        card.appendChild(createContentText(title));
        card.appendChild(createButtonRow());
        projectsContainer.appendChild(card);
    })
}

function generateAnnouncements() {
    const announcements = [
        'Site Maintenance',
        'Community Share Day',
        'Updated Privacy Policy',
    ]

    const announcementsContainer = document.querySelector('#announcements-container');

    announcements.forEach((announcement, index) => {
        const content = document.createElement('div');
        
        const h2 = document.createElement('h2');
        h2.innerHTML = announcement;
        content.appendChild(h2);

        const p = document.createElement('p');
        p.innerHTML = twoRandomElements(loremIpsum)[0];
        content.appendChild(p);

        announcementsContainer.appendChild(content);

        if (index < announcements.length - 1) {
            announcementsContainer.appendChild(document.createElement('hr'));
        }

    })

}

function generateTrends() {
    const announcementsContainer = document.querySelector('#trends-container');
    const trends = [
        {
            color: '#E0F2FE',
            pfp: './assets/pfp/sonna.png',
            handle: '@tegan', 
            subtitle: 'World Peace Builder',
        },
        {
            color: '#FACC15',
            pfp: './assets/pfp/tomoe.png',
            handle: '@morgan', 
            subtitle: 'Super Cool Project',
        },
        {
            color: '#A3A3A3',
            pfp: './assets/pfp/ohaoo.png',
            handle: '@kendall', 
            subtitle: 'Life Changing App',
        },
        {
            color: '#FDA4AF',
            pfp: './assets/pfp/socks.png',
            handle: '@alex', 
            subtitle: 'No Traffic Maker',
        },
    ]


    trends.forEach((trend) => {
        const trendContainer = document.createElement('div')
        trendContainer.classList = 'trend'

        const pfp = document.createElement('div')
        pfp.classList = 'pfp'
        pfp.style.backgroundColor = trend.color;
        const pfpImg = document.createElement('img');
        pfpImg.classList = 'pfp-img';
        pfpImg.src = trend.pfp;
        pfp.appendChild(pfpImg);
        trendContainer.appendChild(pfp)

        const handle = document.createElement('h3');
        handle.innerHTML = trend.handle;
        trendContainer.appendChild(handle);

        const sub = document.createElement('p');
        sub.innerHTML = trend.subtitle;
        trendContainer.appendChild(sub);
        
        announcementsContainer.appendChild(trendContainer);
    })


}


generateProjectContent();
generateAnnouncements();
generateTrends();
