// JS IS
var timestamp = function() {
    var timeIndex = 0;
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10];

    var now = new Date();
    var shift = shifts[timeIndex++] || 0;
    var date = new Date(now - shift * 1000);

    return date.getTime() / 1000;
};

var changeSkin = function(skin) {
    location.href = location.href.split('#')[0].split('?')[0] + '?skin=' + skin;
};

var getCurrentSkin = function() {
    var header = document.getElementById('header');
    var skin = location.href.split('skin=')[1];

    if (!skin) {
        skin = 'Snapgram';
    }

    if (skin.indexOf('#') !== -1) {
        skin = skin.split('#')[0];
    }

    var skins = {
        Snapgram: {
            avatars: true, // avatar atau profil
            list: false, // list story
            autoFullScreen: true, // tampilan full screen
            cubeEffect: true, // efek cube
            paginationArrows: true // tanda panah next dan prev story
        },
      
        // konfigurasi untuk tema lainnya
        VemDeZAP: {
            avatars: false,
            list: true,
            autoFullScreen: false,
            cubeEffect: false,
            paginationArrows: true
        },

        FaceSnap: {
            avatars: true,
            list: false,
            autoFullScreen: true,
            cubeEffect: false,
            paginationArrows: true
        },

        Snapssenger: {
            avatars: false,
            list: false,
            autoFullScreen: false,
            cubeEffect: false,
            paginationArrows: false
        }
    };

    var el = document.querySelectorAll('#skin option');
    var total = el.length;
    for (var i = 0; i < total; i++) {
        var what = skin == el[i].value ? true : false;

        if (what) {
            el[i].setAttribute('selected', 'selected');

            header.innerHTML = skin;
            header.className = skin;
        } else {
            el[i].removeAttribute('selected');
        }
    }

    return {
        name: skin,
        params: skins[skin]
    };
};

var currentSkin = getCurrentSkin();
var stories = new Zuck('stories', {
    backNative: true,
    previousTap: true,
    skin: currentSkin['name'],
    autoFullScreen: currentSkin['params']['autoFullScreen'],
    avatars: currentSkin['params']['avatars'],
    paginationArrows: currentSkin['params']['paginationArrows'],
    list: currentSkin['params']['list'],
    cubeEffect: currentSkin['params']['cubeEffect'],
    localStorage: true,
    stories: [
        Zuck.buildTimelineItem(
            "ramon",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg", // foto profil user 1
            "Meong", // nama user 1
            "",
            timestamp(),
            [
                ["ramon-1", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg", '', false, false, timestamp()], // postingan story user ke-1
                ["ramon-2", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/2.jpg", '', false, false, timestamp()], // postingan story user ke-2
                ["ramon-3", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/3.png", 'https://s.id/240mn', 'Visit my Portfolio', false, timestamp()] // postingan story user ke-3
            ]
        ),
        
        // story user ke-2
        Zuck.buildTimelineItem(
            "gorillaz",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg", // foto profil user 2
            "Gorillaz", // nama user 2
            "", // tautan dalam story
            timestamp(),
            [
                ["gorillaz-1", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '', false, false, timestamp()], // postingan story user ke-1
                ["gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, timestamp()], // postingan story user ke-2
            ]
        ),
      
        // story user ke-3
        Zuck.buildTimelineItem(
            "ladygaga",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg", // foto profil user 3
            "Lady Gaga", // nama user 3
            "",
            timestamp(),
            [
                ["ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, timestamp()], // postingan story user ke-1
                ["ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", 'https://ignelius.com.com', 'Visit my Portfolio', false, false, timestamp()], // postingan story user ke-2
            ]
        ),
      
        // story user 4
        Zuck.buildTimelineItem(
            "starboy",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg", // foto profil user 4
            "The Weeknd", // nama user 4
            "",
            timestamp(),
            [
                ["starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp()] // postingan story user ke-1
            ]
        ),
        
        // story user ke-5
        Zuck.buildTimelineItem(
            "gorillaz",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg", // foto profil user 2
            "Gorillaz", // nama user 2
            "", // tautan dalam story
            timestamp(),
            [
                ["gorillaz-1", "video", 0, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.mp4", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg", '', false, false, timestamp()], // postingan story user ke-1
                ["gorillaz-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/5.jpg", '', false, false, timestamp()], // postingan story user ke-2
            ]
        ),
      
        // story user ke-6
        Zuck.buildTimelineItem(
            "ladygaga",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg", // foto profil user 3
            "Lady Gaga", // nama user 3
            "",
            timestamp(),
            [
                ["ladygaga-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg", '', false, false, timestamp()], // postingan story user ke-1
                ["ladygaga-2", "photo", 3, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/7.jpg", 'https://ignelius.com.com', 'Visit my Portfolio', false, false, timestamp()], // postingan story user ke-2
            ]
        ),
      
        // story user 7
        Zuck.buildTimelineItem(
            "starboy",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg", // foto profil user 4
            "The Weeknd", // nama user 4
            "",
            timestamp(),
            [
                ["starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp()] // postingan story user ke-1
            ]
        ),
      
        // story user 8
        Zuck.buildTimelineItem(
            "starboy",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg", // foto profil user 4
            "The Weeknd", // nama user 4
            "",
            timestamp(),
            [
                ["starboy-1", "photo", 5, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg", '', false, false, timestamp()] // postingan story user ke-1
            ]
        ),
      
        // story user 9
        Zuck.buildTimelineItem(
            "riversquomo",
            "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg", // foto profil user 5
            "Rivers Cuomo", // nama user 5
            "",
            timestamp(),
            [
                ["riverscuomo", "photo", 10, "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", "https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg", '', false, false, timestamp()] // postingan story user ke-1
            ]
        )
    ]
});
